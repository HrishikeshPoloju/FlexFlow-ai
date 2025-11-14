import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatWithAI, Message } from "@/services/api";
import { motion, AnimatePresence } from "framer-motion";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'bot'; content: string }>>([
    { role: "bot", content: "Hi! I'm Flexi Bot. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      // Convert messages to the format expected by the API
      const apiMessages: Message[] = messages
        .filter(msg => msg.role === 'user' || msg.role === 'bot')
        .map(msg => ({
          role: msg.role === 'user' ? 'user' as const : 'model' as const,
          parts: [{ text: msg.content }]
        }));

      const response = await chatWithAI(input, apiMessages);
      
      setMessages(prev => [
        ...prev,
        { role: "bot" as const, content: response.response }
      ]);
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
          className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 via-blue-500 to-purple-600 hover:from-orange-600 hover:via-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
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
            className="fixed bottom-24 right-6 w-80 md:w-96 glass-card rounded-xl shadow-2xl z-50 overflow-hidden border border-border/50 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-orange-500 via-blue-500 to-purple-600 p-4 flex items-center gap-3">
              <img 
                src="/logos/apple-touch-icon.png" 
                alt="FlexFlow AI" 
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <h3 className="font-bold text-white text-base">
                  FlexFlow AI
                </h3>
                <p className="text-xs text-white/90">Typical response time: 1-2 minutes</p>
              </div>
            </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-background/50 relative custom-scrollbar">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 p-3 rounded-lg text-sm"
              >
                <p className="font-semibold">Connection Error</p>
                <p className="text-xs mt-1">{error}</p>
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
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-orange-500 via-blue-500 to-purple-600 text-white"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
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
                <div className="bg-muted p-3 rounded-lg">
                  <Loader2 className="h-4 w-4 animate-spin text-orange-500" />
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border/50 bg-background">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-background border-border focus:border-orange-500 focus:ring-orange-500/20"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSend} 
                size="icon"
                className="bg-gradient-to-r from-orange-500 via-blue-500 to-purple-600 hover:from-orange-600 hover:via-blue-600 hover:to-purple-700 transition-all"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                ) : (
                  <Send className="h-4 w-4 text-white" />
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
