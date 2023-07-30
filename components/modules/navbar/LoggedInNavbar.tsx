import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

import { FiMenu } from "react-icons/fi";
import Sidebar from "../sidebar/page";
const LoggedInNabar = () => {
  
  return (
    <nav className={styles.nav}>
      <div>
        <button>
          <FiMenu />
        </button>
      </div>
      <Sidebar />
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
