"use ";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
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
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/myAdvert">My Car Advert</Link>
          </li>
          <li>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
