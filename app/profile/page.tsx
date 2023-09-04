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
  const { userData } = useUserData();
  const { userMail, userName, userPassword, userSurname } = userData;
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <div className={styles.container}>
      <Link href="/">
        <button>Back</button>
      </Link>
      <>
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
          <Link href="/profile/resetPassword">
            <button>Change my password</button>
          </Link>
          <br />
          <Link href="/profile/deleteAcc">
            <button>I want to delete my account</button>
          </Link>
        </div>
      </>
    </div>
  );
}
function getUploadTaskSnapshot(
  uploadTask: Promise<import("@firebase/storage").UploadResult>
) {
  throw new Error("Function not implemented.");
}
