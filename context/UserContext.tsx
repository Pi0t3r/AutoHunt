import { collection, doc, setDoc } from "firebase/firestore";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { db } from "../firebase";

interface UserContextType {
  user: { email: string; name: string; surname: string } | null;
  setUser: (
    user: { email: string; name: string; surname: string } | null
  ) => void;
}

export const UserContext = createContext<UserContextType | null>(null);
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{
    email: string;
    name: string;
    surname: string;
  } | null>(() => {
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
    if (user) {
      const { email, name, surname } = user;
      if (email && name && surname) {
        const userDocRef = doc(collection(db, "users"), email);
        setDoc(userDocRef, { name, surname, email })
          .then(() => {
            console.log("User data is saved!");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  }, [user]);
  const handleSetUser = (
    userData: { email: string; name: string; surname: string } | null
  ) => {
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
