import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "@/contexts/UserContext";

// Landing
import Index from "./pages/Index";
import ReadinessTest from "./pages/ReadinessTest";
import NotFound from "./pages/NotFound";

// Associate Pages
import AssociateDashboard from "./pages/associate/Dashboard";
import Learning from "./pages/associate/Learning";
import Assessments from "./pages/associate/Assessments";
import Projects from "./pages/associate/Projects";
import Badges from "./pages/associate/Badges";

// Employer Pages
import EmployerPipeline from "./pages/employer/Pipeline";
import TalentPool from "./pages/employer/TalentPool";
import Studio from "./pages/employer/Studio";

// Management Pages
import ManagementDashboard from "./pages/management/Dashboard";
import ManagementUsers from "./pages/management/Users";
import ManagementClients from "./pages/management/Clients";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Landing */}
            <Route path="/" element={<Index />} />
            <Route path="/readiness-test" element={<ReadinessTest />} />

            {/* Associate Portal */}
            <Route path="/associate" element={<AssociateDashboard />} />
            <Route path="/associate/learning" element={<Learning />} />
            <Route path="/associate/assessments" element={<Assessments />} />
            <Route path="/associate/projects" element={<Projects />} />
            <Route path="/associate/badges" element={<Badges />} />

            {/* Employer Portal */}
            <Route path="/employer" element={<EmployerPipeline />} />
            <Route path="/employer/talent" element={<TalentPool />} />
            <Route path="/employer/studio" element={<Studio />} />

            {/* Management Portal */}
            <Route path="/management" element={<ManagementDashboard />} />
            <Route path="/management/users" element={<ManagementUsers />} />
            <Route path="/management/clients" element={<ManagementClients />} />
            <Route path="/management/marketplace" element={<ManagementDashboard />} />
            <Route path="/management/support" element={<ManagementDashboard />} />
            <Route path="/management/reports" element={<ManagementDashboard />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
