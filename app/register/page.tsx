"use client";
import Link from "next/link";
import styles from "./register.module.css";
import { BsGoogle, BsArrowLeftCircle } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import LoginForm from "@/components/loginForm/LoginForm";
import RegisterForm from "@/components/registerForm/RegisterForm";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile,
  updateEmail,
} from "firebase/auth";
import { db } from "@/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { useUserContext } from "@/context/UserContext";

type ActiveButton = "login" | "signup";

export default function Register() {
  const [activeButton, setActiveButton] = useState<ActiveButton>("login");
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const { setUser } = useUserContext();
  const handleSignInWithGoogle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          const user = result.user;
          console.log(token)
          console.log(user)
        })
        .catch((error) => {       
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;     
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("Google sign-in error: ", error);
    }
  };
  useEffect(() => {}, [activeButton]);
  const handleButtonClick = (button: ActiveButton) => {
    setActiveButton(button);
  };

  return (
    <div className={styles.div}>
      <Link className={styles.back} href="/">
        <BsArrowLeftCircle />
      </Link>
      <h1>Join us to continue</h1>
      <div className={styles.containerButton}>
        <button onClick={handleSignInWithGoogle}>
          <BsGoogle /> <span>Sign in with Google</span>
        </button>
      </div>
      <span className={styles.or}>or</span>
      <div className={styles.form}>
        <div className={styles.formButton}>
          <button
            className={activeButton === "login" ? styles.active : ""}
            onClick={() => handleButtonClick("login")}
          >
            Log in
          </button>
          <button
            className={activeButton === "signup" ? styles.active : ""}
            onClick={() => handleButtonClick("signup")}
          >
            Sign up
          </button>
        </div>
        {activeButton === "login" && <LoginForm />}
        {activeButton === "signup" && <RegisterForm />}
      </div>
    </div>
  );
}
