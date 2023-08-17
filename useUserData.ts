import { useState, useEffect } from "react";
import { useUserContext } from "./context/UserContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";

const useUserData = () => {
  const { user, setUser } = useUserContext();
  const [userData, setUserData] = useState({
    userName: "",
    userSurname: "",
    userMail: "",
    userPassword: "",
    userProfilePicture: "",
  });
  const updateProfilePicture = (newProfilePicture:string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      userProfilePicture: newProfilePicture,
    }));
  };
  const getUserData = async () => {
    try {
      if (user && user.email) {
        const userCollectionRef = collection(db, "users");
        const q = query(userCollectionRef, where("email", "==", user.email));
        const usersSnapshot = await getDocs(q);
        if (!usersSnapshot.empty) {
          const userData = usersSnapshot.docs[0].data();
          setUserData({
            userName: userData.name,
            userSurname: userData.surname,
            userMail: userData.email,
            userPassword: userData.password,
            userProfilePicture: userData.userProfilePicture,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    if (user && !userData.userName && !userData.userSurname) {
      getUserData();
    }
  }, [
    user,
    userData.userName,
    userData.userSurname,
    userData.userMail,
    userData.userPassword,
    setUser,
  ]);
  return { userData, updateProfilePicture };
};

export default useUserData;
