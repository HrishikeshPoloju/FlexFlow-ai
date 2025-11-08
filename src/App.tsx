import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { VoiceAgents } from "./pages/services/VoiceAgents";
import { ChatAutomation } from "./pages/services/ChatAutomation";
import { WorkflowAutomation } from "./pages/services/WorkflowAutomation";
import { AIBuilder } from "./pages/services/AIBuilder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/voice-agents" element={<VoiceAgents />} />
          <Route path="/services/chat-automation" element={<ChatAutomation />} />
          <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/services/ai-website-builder" element={<AIBuilder />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
