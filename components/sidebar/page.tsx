import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { BiExit } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
const Sidebar = () => {
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/register");
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.div}>Hello, {user?.email}</div>
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
