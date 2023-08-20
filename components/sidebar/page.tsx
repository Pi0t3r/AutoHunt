import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { useUserContext } from "@/context/UserContext";
import { BiExit } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import useUserData from "@/useUserData";
import { auth } from "@/firebase";
const Sidebar = () => {
  const { userData } = useUserData();
  const { userName, userSurname } = userData;
  const { user, setUser } = useUserContext();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.div}>
        <span>
          Hello, <br />
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
            <Link href="/profile/myAdvert">
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
