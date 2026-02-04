import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useUser } from "@/contexts/UserContext";
import { UserRole } from "@/types/user";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardCheck,
  FolderKanban,
  Award,
  RefreshCw,
  Users,
  Settings,
  Globe,
  Store,
  HeadphonesIcon,
  BarChart3,
  LogOut,
  Diamond,
} from "lucide-react";

const associateNav = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/associate" },
  { label: "My Learning", icon: BookOpen, path: "/associate/learning" },
  { label: "Assessments", icon: ClipboardCheck, path: "/associate/assessments" },
  { label: "Projects", icon: FolderKanban, path: "/associate/projects" },
  { label: "My Badges", icon: Award, path: "/associate/badges" },
];

const employerNav = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/employer" },
  { label: "Talent Pool", icon: Users, path: "/employer/talent" },
  { label: "Studio", icon: Settings, path: "/employer/studio" },
];

const managementNav = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/management" },
  { label: "Users", icon: Users, path: "/management/users" },
  { label: "Clients", icon: Globe, path: "/management/clients" },
  { label: "Marketplace", icon: Store, path: "/management/marketplace" },
  { label: "Support", icon: HeadphonesIcon, path: "/management/support" },
  { label: "Reports", icon: BarChart3, path: "/management/reports" },
];

const Sidebar = () => {
  const location = useLocation();
  const { user, setRole } = useUser();

  const navItems =
    user.role === "associate"
      ? associateNav
      : user.role === "employer"
      ? employerNav
      : managementNav;

  const roleLabels: Record<UserRole, string> = {
    associate: "ASSOCIATE",
    employer: "EMPLOYER",
    management: "MANAGEMENT",
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 bg-background border-r border-border flex flex-col z-50">
      {/* Logo */}
      <div className="p-6">
        <NavLink to="/" className="flex items-center gap-2">
          <Diamond className="w-6 h-6 text-foreground" fill="currentColor" />
          <span className="logo-text text-xl text-foreground">ReadyScale</span>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      {/* Access Portal */}
      <div className="px-4 py-4 border-t border-border">
        <p className="text-xs text-muted-foreground tracking-widest mb-3">
          ACCESS PORTAL
        </p>
        <div className="flex flex-wrap gap-2">
          {(["associate", "employer", "management"] as UserRole[]).map((role) => (
            <button
              key={role}
              onClick={() => setRole(role)}
              className={cn(
                "px-2 py-1 text-xs rounded border transition-colors",
                user.role === role
                  ? "border-foreground text-foreground"
                  : "border-border text-muted-foreground hover:border-muted-foreground"
              )}
            >
              {roleLabels[role]}
            </button>
          ))}
        </div>
      </div>

      {/* User */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
            {user.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              {user.name}
            </p>
            <p className="text-xs text-muted-foreground uppercase">
              {user.role}
            </p>
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 pt-0">
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
