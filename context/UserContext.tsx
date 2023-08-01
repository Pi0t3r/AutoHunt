import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface UserContextType {
  user: { email: string } | null;
  setUser: (user: { email: string } | null) => void;
}

export const UserContext = createContext<UserContextType | null>(null);
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ email: string } | null>(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      try {
        if (storedUser && typeof storedUser === "string") {
          return JSON.parse(storedUser);
        } else {
          return null;
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        return null;
      }
    } else {
      return null;
    }
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const handleSetUser = (userData: { email: string } | null) => {
    setUser(userData);
  };
  const contextValue = {
    user,
    setUser: handleSetUser,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
