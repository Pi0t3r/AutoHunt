import { useUserContext } from "@/context/UserContext";
import { auth } from "@/firebase";
import useUserData from "@/useUserData";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import ProfileImage from "../profileImage/Page";
import styles from "./sidebar.module.css";
const Sidebar = () => {
  const { userData } = useUserData(); // Get user data using a custom hook
  const { userName, userSurname, userMail } = userData; // Destructure user data
  const { user, setUser } = useUserContext(); // Get user context and setUser function
  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user using Firebase
      setUser(null); // Set the user context to null
      localStorage.removeItem("user"); // Remove user data from local storage
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.div}>
        <div className={styles.profilePicture}>
          <ProfileImage userMail={userMail} />
        </div>
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
