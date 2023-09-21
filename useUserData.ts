import { useState, useEffect } from "react";
import { useUserContext } from "./context/UserContext";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";

const useUserData = () => {
  const { user, setUser } = useUserContext();
  const [userData, setUserData] = useState({
    userName: "",
    userSurname: "",
    userMail: "",
    userPassword: "",
    userProfilePicture: "",
    userId: "",
  });
  const updateProfilePicture = (newProfilePicture: string | null) => {
    if (user) {
      setUser({
        ...user,
        profileImage: newProfilePicture,
      });
      if (user.email && newProfilePicture !== null) {
        const userDocRef = doc(db, "users", user.email);
        const userDataToUpdate = {
          profileImage: newProfilePicture,
        };
        updateDoc(userDocRef, userDataToUpdate)
          .then(() => {
            console.log("Profile picture updated");
          })
          .catch((err) => {
            console.error(`Error updating profile picture: ${err}`);
          });
      }
    }
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
            userId: usersSnapshot.docs[0].id,
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
    userData.userId,
    userData.userProfilePicture,
    setUser,
  ]);
  return { userData, updateProfilePicture };
};

export default useUserData;
