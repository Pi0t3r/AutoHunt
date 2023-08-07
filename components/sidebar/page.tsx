import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { BiExit } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
const Sidebar = () => {
  const { user, setUser } = useUserContext();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/register");
  };
  useEffect(() => {
    const getUserNameFromFirestore = async () => {
      try {
        if (user && user.email) {
          const usersCollectionRef = collection(db, "users");
          const q = query(usersCollectionRef, where("email", "==", user.email));
          const usersSnapshot = await getDocs(q);

          if (!usersSnapshot.empty) {
            const userData = usersSnapshot.docs[0].data();
            setUserName(userData.name);
            setUserSurname(userData.surname);
          }
        }
      } catch (error) {
        console.error("Error getting user data from Firestore:", error);
      }
    };

    if (!user) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    if (user && !userName && !userSurname) {
      getUserNameFromFirestore();
    }
  }, [user, userName, userSurname, setUser]);
  return (
    <div className={styles.sidebar}>
      <div className={styles.div}>
        <span>
          Hello, <br/>
          {userName} {userSurname}
        </span>
      </div>
      <div className={styles.button}>
        <Link href="/create">Add new Car Advert</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/profile">
              <AiOutlineUser /> Profile
            </Link>
          </li>
          <li>
            <Link href="/myAdvert">
              <MdOutlineLocalOffer /> My Car Advert
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className={styles.logoutButton}>
              <BiExit /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
