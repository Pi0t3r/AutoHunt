import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../sidebar/Page";
import { AiOutlineClose } from "react-icons/ai";

const LoggedInNabar = () => {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.button}>
        <button onClick={toggleSidebar}>
          {visible ? <AiOutlineClose /> : <FiMenu />}
        </button>
      </div>
      <div
        className={styles.sidebar}
        style={{
          transform: visible ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Sidebar />
      </div>
      <div>
        <Link href="/">
          <h1>
            Auto<span>hunt</span>
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default LoggedInNabar;
