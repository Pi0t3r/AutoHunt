import { db } from "@/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUserContext } from "./context/UserContext";
// Custom hook to fetch and manage user data
const useUserData = () => {
  // Get user information from the user context
  const { user, setUser } = useUserContext();
  // State to store user data
  const [userData, setUserData] = useState({
    userName: "",
    userSurname: "",
    userMail: "",
    userPassword: "",
    userProfilePicture: "",
    userId: "",
  });
  // Function to update the user's profile picture
  const updateProfilePicture = (newProfilePicture: string | null) => {
    if (user) {
      // Update the profile picture in the user context
      setUser({
        ...user,
        profileImage: newProfilePicture,
      });
      if (user.email && newProfilePicture !== null) {
        // Reference to the user's document in Firestore
        const userDocRef = doc(db, "users", user.email);
        // Data to update in the user's document
        const userDataToUpdate = {
          profileImage: newProfilePicture,
        };
        // Update the user's document in Firestore
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
  // Function to fetch user data from Firestore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUserData = async () => {
    try {
      if (user && user.email) {
        // Reference to the 'users' collection in Firestore
        const userCollectionRef = collection(db, "users");
        // Query to find the user document with a matching email
        const q = query(userCollectionRef, where("email", "==", user.email));
        // Get the user data from Firestore
        const usersSnapshot = await getDocs(q);
        if (!usersSnapshot.empty) {
          const userData = usersSnapshot.docs[0].data();
          // Set the user data in the state
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
  // useEffect to initialize and update user data
  useEffect(() => {
    if (!user) {
      // If there is no user in the context, try to load it from local storage
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    if (user && !userData.userName && !userData.userSurname) {
      // If user data is not already loaded, fetch it from Firestore
      getUserData();
    }
  }, [user, userData.userName, userData.userSurname, userData.userMail, userData.userPassword, userData.userId, userData.userProfilePicture, setUser, getUserData]);
  // Return user data and the function to update the profile picture
  return { userData, updateProfilePicture };
};

export default useUserData;
