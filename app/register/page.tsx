"use client";
import Link from "next/link";
import styles from "./register.module.css";
import { BsGoogle, BsFacebook, BsArrowLeftCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { useRouter } from "next/navigation";
import { useUserContext } from "../../context/UserContext";


type ActiveButton = "login" | "signup";

export default function Register() {
  const [activeButton, setActiveButton] = useState<ActiveButton>("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { setUser } = useUserContext();
  const router = useRouter();

  useEffect(() => {}, [activeButton]);

  const handleButtonClick = (button: ActiveButton) => {
    setActiveButton(button);
  };

  const handleSubmitRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.alert("User created!");
    } catch (error) {
      const errorMessage = (error as Error).message;
      setErrorMessage(errorMessage);
    }
  };
  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser({ email });
      router.push("/");
    } catch (error) {
      const errorMessage = (error as Error).message;
      setErrorMessage(errorMessage);
    }
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
