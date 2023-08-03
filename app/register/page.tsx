"use client";
import Link from "next/link";
import styles from "./register.module.css";
import { BsGoogle, BsFacebook, BsArrowLeftCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import LoginForm from "@/components/loginForm/LoginForm";
import RegisterForm from "@/components/registerForm/RegisterForm";

type ActiveButton = "login" | "signup";

export default function Register() {
  const [activeButton, setActiveButton] = useState<ActiveButton>("login");

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
        <button>
          <BsGoogle /> <span>Sign in with Google</span>
        </button>
        <button>
          <BsFacebook /> <span>Sign in with Facebook</span>
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
