"use client";
import Link from "next/link";
import styles from "./register.module.css";
import { BsGoogle, BsFacebook, BsArrowLeftCircle } from "react-icons/bs";
import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default function Register() {
  const [activeButton, setActiveButton] = useState<string>("login");

  const handleButtonClick = (button: any) => {
    setActiveButton(button);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        window.alert("Succesfully created user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
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
        {activeButton === "login" && (
          <form action="login" onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              type="email"
              placeholder="example@email.com"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••••"
              required
            />
            <Link href="/register/forgot">
              <span>Forgot password?</span>
            </Link>
            <input type="submit" value="Log in" className={styles.submit} />
          </form>
        )}
        {activeButton === "signup" && (
          <form action="signup">
            <label htmlFor="name">Full name</label>
            <input type="text" placeholder="Please enter full name" />
            <label htmlFor="number">Phone number</label>
            <input type="number" placeholder="Phone number" />
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="example@email.com" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="••••••••" />
            <div className={styles.checkboxDiv}>
              <input type="checkbox" />
              <p>
                I acknowledge that I have read and accept the Terms and
                Conditions, and understand that OLX Group Ltd. will process my
                personal data in accordance with the Privacy Policy and the
                Policy on Cookies and Similar Technologies, which I have read.
              </p>
            </div>
            <input
              type="submit"
              value="Create account"
              className={styles.submit}
            />
          </form>
        )}
      </div>
    </div>
  );
}
