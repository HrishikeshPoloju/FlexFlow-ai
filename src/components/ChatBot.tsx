import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatWithAI, Message, submitContactRequest, extractContactInfo } from "@/services/api";
import { motion, AnimatePresence } from "framer-motion";

// Check if user wants to end conversation
const checkEndConversation = (text: string): boolean => {
  const endPhrases = [
    'that\'s all',
    'that\'s it',
    'nothing else',
    'no more questions',
    'no further questions',
    'thank you',
    'thanks',
    'appreciate it',
    'goodbye',
    'bye',
    'see you',
    'have a good day',
    'i\'m done',
    'all set',
    'that\'s everything',
    'thats all',
    'thats it',
  ];
  const lowerText = text.toLowerCase().trim();
  return endPhrases.some(phrase => lowerText.includes(phrase));
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'bot'; content: string }>>(() => {
    // Load messages from localStorage if available
    const saved = localStorage.getItem('flexflow_chat_messages');
    return saved ? JSON.parse(saved) : [{ role: "bot", content: "Welcome to FlexFlow AI. I'm here to assist you with our AI automation solutions. How may I help you today?" }];
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [conversationHistory, setConversationHistory] = useState<Message[]>(() => {
    // Load history from localStorage if available
    const saved = localStorage.getItem('flexflow_chat_history');
    return saved ? JSON.parse(saved) : [];
  });
  const [isExtracting, setIsExtracting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('flexflow_chat_messages', JSON.stringify(messages));
  }, [messages]);

  // Save conversation history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('flexflow_chat_history', JSON.stringify(conversationHistory));
  }, [conversationHistory]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input };
    const currentInput = input;
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      // Send the current conversation history to maintain context
      console.log('📤 Sending with history length:', conversationHistory.length);
      
      const response = await chatWithAI(currentInput, conversationHistory);
      
      // Update both UI messages and conversation history
      const newMessages = [
        ...messages,
        userMessage,
        { role: "bot" as const, content: response.response }
      ];
      
      setMessages(newMessages);
      setConversationHistory(response.history);
      console.log('📥 Updated history length:', response.history.length);

      // Check if user wants to end conversation
      const wantsToEnd = checkEndConversation(currentInput);
      if (wantsToEnd && !isExtracting) {
        console.log('👋 User wants to end conversation, auto-triggering email...');
        // Wait a bit for the goodbye message to be visible
        setTimeout(() => {
          if (!isExtracting) { // Double-check before triggering
            handleEndChat(true); // Pass true to indicate auto-triggered
          }
        }, 2000);
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError('Failed to connect to the AI service. Please check if the backend server is running.');
      
      setMessages(prev => [
        ...prev,
        { 
          role: "bot" as const, 
          content: "I'm having trouble connecting to the AI service. Please try again later." 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndChat = async (isAutoTriggered = false) => {
    if (isExtracting) return; // Prevent double-triggering
    
    setIsExtracting(true);
    
    try {
      // Only show processing message if manually triggered
      if (!isAutoTriggered) {
        setMessages(prev => [
          ...prev,
          { 
            role: "bot" as const, 
            content: "Processing your information and sending to our team..." 
          }
        ]);
      }

      // Use LLM to extract contact info and generate summary
      console.log('🔍 Extracting contact information using AI...');
      const extractionResult = await extractContactInfo(messages);
      
      if (!extractionResult.success || !extractionResult.data) {
        throw new Error('Failed to extract contact information');
      }

      const { name, email, phone, summary } = extractionResult.data;
      
      console.log('✅ Extracted:', { name, email, phone, summary });

      // Validate that we have at least email or phone
      if (!email && !phone) {
        if (isAutoTriggered) {
          // Silently fail for auto-triggered - no contact info provided
          console.log('⚠️ Auto-trigger but no contact info found, skipping email');
          return;
        }
        
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "bot" as const,
            content: "I couldn't find your contact information in our conversation. Please provide your email address and phone number so our team can reach you."
          };
          return updated;
        });
        return;
      }

      // Prepare full conversation transcript
      const chatTranscript = messages
        .map(msg => `${msg.role === 'user' ? 'User' : 'Bot'}: ${msg.content}`)
        .join('\n\n');

      // Submit contact request with extracted info and summary
      await submitContactRequest({
        name: name || "Not provided",
        email: email || "not-provided@flexflow.ai",
        phone: phone || "Not provided",
        message: chatTranscript,
        requestType: "Complete Chat Conversation",
        summary: summary || "User inquiry about FlexFlow AI services",
      });

      console.log('✅ Full conversation with summary sent successfully');
      
      // Only update message if not auto-triggered (bot already said goodbye)
      if (!isAutoTriggered) {
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "bot" as const,
            content: "Thank you. I have forwarded your conversation details to our team. A specialist will contact you within 24 hours to discuss your requirements."
          };
          return updated;
        });
      }

    } catch (error) {
      console.error('❌ Failed to process conversation:', error);
      
      if (!isAutoTriggered) {
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "bot" as const,
            content: "I had trouble processing the details, but I'll make sure our team receives your information. They'll contact you soon!"
          };
          return updated;
        });
      }
    } finally {
      setIsExtracting(false);
    }
  };

  const handleClearChat = () => {
    // Reset to initial state
    setMessages([{ role: "bot", content: "Welcome to FlexFlow AI. I'm here to assist you with our AI automation solutions. How may I help you today?" }]);
    setConversationHistory([]);
    setError(null);
    localStorage.removeItem('flexflow_chat_messages');
    localStorage.removeItem('flexflow_chat_history');
    console.log('🗑️ Chat history cleared');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <MessageCircle className="h-5 w-5 text-white" />
          )}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 rounded-2xl shadow-lg z-50 overflow-hidden border border-white/20 backdrop-blur-xl bg-white/10 dark:bg-black/20 transition-all duration-300 hover:border-white/30 hover:shadow-xl"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            {/* Header */}
            <div className="border-b border-white/20 p-3 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-2">
                <img 
                  src="/logos/apple-touch-icon.png" 
                  alt="FlexFlow AI" 
                  className="w-8 h-8 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-foreground dark:text-white text-sm">
                    FlexFlow AI
                  </h3>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-[10px] text-foreground/70 dark:text-white/70">Online</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => handleEndChat(false)}
                  variant="ghost"
                  size="sm"
                  className="text-xs h-8 px-3 rounded-lg transition-all font-medium text-white bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="End chat and send details to team"
                  disabled={isExtracting || isLoading}
                >
                  {isExtracting ? "Processing..." : "End Chat"}
                </Button>
                <Button
                  onClick={handleClearChat}
                  variant="ghost"
                  size="icon"
                  className="text-foreground/70 dark:text-white/70 hover:text-foreground dark:hover:text-white hover:bg-white/10 h-7 w-7 rounded-lg transition-all"
                  title="Clear chat history"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3 relative custom-scrollbar">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 text-red-600 dark:text-red-400 p-3 rounded-xl text-xs"
              >
                <p className="font-semibold">Connection Error</p>
                <p className="text-[10px] mt-1">{error}</p>
              </motion.div>
            )}
            
            <AnimatePresence mode="popLayout">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2.5 rounded-2xl transition-all duration-200 ${
                      message.role === "user"
                        ? "bg-white/90 dark:bg-white/20 backdrop-blur-md text-gray-900 dark:text-white border border-white/40 shadow-md font-medium"
                        : "bg-white/10 dark:bg-black/20 hover:bg-white/15 dark:hover:bg-black/25 text-foreground dark:text-white border border-white/20 backdrop-blur-sm"
                    }`}
                  >
                    <p 
                      className="text-xs leading-relaxed whitespace-pre-wrap"
                      style={{ lineHeight: '1.6' }}
                    >
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-white/10 dark:bg-black/20 border border-white/20 backdrop-blur-sm px-3 py-2 rounded-2xl">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-cyan-400" />
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/20 bg-white/5">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-white/10 dark:bg-black/20 border-white/20 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-full text-xs px-4 transition-all duration-300 text-foreground dark:text-white placeholder:text-foreground/50 dark:placeholder:text-white/50"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSend} 
                size="icon"
                className="h-9 w-9 rounded-full bg-white/90 dark:bg-white/20 hover:bg-white dark:hover:bg-white/30 transition-all duration-300 disabled:opacity-50 shadow-md border border-white/40"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin text-cyan-600" />
                ) : (
                  <Send className="h-4 w-4 text-cyan-600" />
                )}
              </Button>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
