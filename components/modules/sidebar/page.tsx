import styles from "./sidebar.module.css";
import { useUserContext } from "@/context/UserContext";
const Sidebar = () => {
  const { user } = useUserContext();
  return (
    <div className={styles.sidebar}>
      <div>Hello, {user?.email}</div>
    </div>
  );
};

export default Sidebar;
