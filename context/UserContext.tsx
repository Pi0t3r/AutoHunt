import { createContext, useContext, useState, useEffect } from "react";

interface UserContextType {
  user: { email: string } | null;
  setUser: (user: { email: string } | null) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
