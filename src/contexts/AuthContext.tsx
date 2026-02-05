import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const VALID_CREDENTIALS = {
  username: "UserTest",
  password: "SecurePass123",
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing session
    const savedAuth = localStorage.getItem("auth");
    if (savedAuth) {
      const { isAuthenticated, username } = JSON.parse(savedAuth);
      setIsAuthenticated(isAuthenticated);
      setUsername(username);
    }
  }, []);

  const login = (inputUsername: string, inputPassword: string): boolean => {
    if (
      inputUsername === VALID_CREDENTIALS.username &&
      inputPassword === VALID_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      setUsername(inputUsername);
      localStorage.setItem(
        "auth",
        JSON.stringify({ isAuthenticated: true, username: inputUsername })
      );
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("readinessCompleted");
    localStorage.removeItem("readinessScore");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
