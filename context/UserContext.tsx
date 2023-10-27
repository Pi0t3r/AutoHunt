import { UserContextType } from "@/types";
import { collection, doc, setDoc } from "firebase/firestore";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../firebase";

// Create a context for user data
export const UserContext = createContext<UserContextType | null>(null);
// Define a UserProvider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  // State to hold user data
  const [user, setUser] = useState<{
    email: string;
    name: string;
    surname: string;
    password: string;
    profileImage: string | null;
  } | null>(() => {
    // Initialize user state from local storage when available
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
  // Save user data to local storage and Firestore when it changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    if (user) {
      const { email, name, surname, password, profileImage } = user;
      if (email && name && surname) {
        const userDocRef = doc(collection(db, "users"), email);
        setDoc(userDocRef, { name, surname, email, password, profileImage })
          .then(() => {
            console.log("User data is saved!");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  }, [user]);
  // Function to set user data
  const handleSetUser = (
    userData: {
      email: string;
      name: string;
      surname: string;
      password: string;
      profileImage: string | null;
    } | null
  ) => {
    setUser(userData);
  };
  // Function to update user password
  const updatePassword = (newPassword: string) => {
    if (user) {
      setUser({
        ...user,
        password: newPassword,
      });
    }
  };
  // Function to update user profile picture
  const updateProfilePicture = (newImage: string) => {
    if (user) {
      setUser({
        ...user,
        profileImage: newImage,
      });
    }
  };
  // Create a context value object
  const contextValue = {
    user,
    setUser: handleSetUser,
    updatePassword,
    updateProfilePicture,
  };
  // Provide the context value to children components
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
// Custom hook to access the user context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
