export type UserRole = "associate" | "employer" | "management" | "trainer";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface AssociateStats {
  readinessScore: number;
  earnedBadges: number;
  legacyModules: { completed: number; total: number };
}

export interface EmployerStats {
  talentPool: number;
  companyReady: number;
  hiringQuota: { used: number; total: number };
  studioAssets: number;
}

export interface ManagementStats {
  globalClients: number;
  platformRevenue: string;
  systemHealth: number;
  pendingAudits: number;
}
