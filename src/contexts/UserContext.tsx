import { createContext, useContext, useState, ReactNode } from "react";
import { User, UserRole } from "@/types/user";

interface UserContextType {
  user: User;
  setRole: (role: UserRole) => void;
}

const mockUsers: Record<UserRole, User> = {
  associate: {
    id: "1",
    name: "Alex Johnson",
    email: "alex.j@example.com",
    role: "associate",
  },
  employer: {
    id: "2",
    name: "Jordan Employer",
    email: "jordan@tech-hire.com",
    role: "employer",
  },
  management: {
    id: "3",
    name: "System Manager",
    email: "admin@readyscale.ai",
    role: "management",
  },
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(mockUsers.associate);

  const setRole = (role: UserRole) => {
    setUser(mockUsers[role]);
  };

  return (
    <UserContext.Provider value={{ user, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
