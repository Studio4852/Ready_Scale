import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "@/contexts/UserContext";
import { AuthProvider } from "@/contexts/AuthContext";
import RequireReadiness from "@/components/auth/RequireReadiness";

// Landing
import Index from "./pages/Index";
import ReadinessTest from "./pages/ReadinessTest";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Associate Pages
import AssociateDashboard from "./pages/associate/Dashboard";
import Learning from "./pages/associate/Learning";
import Mentor from "./pages/associate/Mentor";
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
import ManagementMarketplace from "./pages/management/Marketplace";
import ManagementSupport from "./pages/management/Support";
import ManagementReports from "./pages/management/Reports";

// Trainer Pages
import TrainerDashboard from "./pages/trainer/Dashboard";
import TrainerCourses from "./pages/trainer/Courses";
import TrainerPayments from "./pages/trainer/Payments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <UserProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Landing */}
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/readiness-test" element={<ReadinessTest />} />

              {/* Associate Portal */}
              <Route path="/associate" element={<RequireReadiness><AssociateDashboard /></RequireReadiness>} />
              <Route path="/associate/learning" element={<RequireReadiness><Learning /></RequireReadiness>} />
              <Route path="/associate/mentor" element={<RequireReadiness><Mentor /></RequireReadiness>} />
              <Route path="/associate/assessments" element={<RequireReadiness><Assessments /></RequireReadiness>} />
              <Route path="/associate/projects" element={<RequireReadiness><Projects /></RequireReadiness>} />
              <Route path="/associate/badges" element={<RequireReadiness><Badges /></RequireReadiness>} />

              {/* Employer Portal */}
              <Route path="/employer" element={<EmployerPipeline />} />
              <Route path="/employer/talent" element={<TalentPool />} />
              <Route path="/employer/studio" element={<Studio />} />

              {/* Management Portal */}
              <Route path="/management" element={<ManagementDashboard />} />
              <Route path="/management/users" element={<ManagementUsers />} />
              <Route path="/management/clients" element={<ManagementClients />} />
              <Route path="/management/marketplace" element={<ManagementMarketplace />} />
              <Route path="/management/support" element={<ManagementSupport />} />
              <Route path="/management/reports" element={<ManagementReports />} />

              {/* Trainer Portal */}
              <Route path="/trainer" element={<TrainerDashboard />} />
              <Route path="/trainer/courses" element={<TrainerCourses />} />
              <Route path="/trainer/payments" element={<TrainerPayments />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </UserProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
