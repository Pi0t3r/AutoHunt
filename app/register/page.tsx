"use client";
import Link from "next/link";
import styles from "./register.module.css";
import { BsGoogle, BsFacebook, BsArrowLeftCircle } from "react-icons/bs";
import { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { useRouter } from "next/navigation";

export default function Register() {
  const [activeButton, setActiveButton] = useState<string>("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleButtonClick = (button: any) => {
    setActiveButton(button);
  };
  const router = useRouter();

  const handleSubmitRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  };
  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    await signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.push("/");
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
          <form action="login" onSubmit={handleSubmitLogin}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••"
              required
            />
            <Link href="/register/forgot">
              <span>Forgot password?</span>
            </Link>
            <input type="submit" value="Log in" className={styles.submit} />
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        )}
        {activeButton === "signup" && (
          <form action="signup" onSubmit={handleSubmitRegister}>
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
