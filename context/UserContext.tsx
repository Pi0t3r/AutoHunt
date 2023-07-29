import { createContext, useContext, useState } from "react";

interface UserContextType {
  user: { email: string } | null;
  setUser: (user: { email: string } | null) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const useUserContext = () => useContext(UserContext);

export default UserContext;
