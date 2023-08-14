"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import styles from "./profile.module.css";
import useUserData from "@/useUserData";
export default function Profile() {
  const { userMail, userName, userPassword, userSurname } = useUserData();
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <div className={styles.container}>
      <Link href="/">
        <button>Back</button>
      </Link>
      <div>
        <div>
          <div className={styles.circle}>
            <AiOutlineUser />
          </div>
        </div>
        <div className={styles.info}>
          <p>
            Hello,{" "}
            <span className={styles.data}>
              {userName} {userSurname}
            </span>{" "}
            <br />
            Your email: <span className={styles.data}>{userMail}</span> <br />
            <span className={styles.password}>
              Your password:{" "}
              <span className={styles.data}>
                {visiblePassword ? userPassword : "•••••••"}
              </span>{" "}
              <button onClick={handleVisiblePassword}>
                {visiblePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </span>
          </p>
        </div>
        <div className={styles.button}>
          <Link href="/reset">
            <button>Change my password</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
