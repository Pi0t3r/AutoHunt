import { ReactNode } from "react";

export interface UserContextType {
  user: {
    email: string;
    name: string;
    surname: string;
    password: string;
    profileImage: string | null;
  } | null;
  setUser: (
    userData: {
      email: string;
      name: string;
      surname: string;
      password: string;
      profileImage: string | null;
    } | null
  ) => void;
  updatePassword: (newPassword: string) => void;
  updateProfilePicture: (newImage: string) => void;
}

export interface UserDataProps {
  userName: string;
  userSurname: string;
  userMail: string;
}
export type UserProviderProps = {
  children: ReactNode;
};
