import React, { useState } from "react";
import styles from "../../app/register/register.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useUserContext } from "../../context/UserContext";
import { auth } from "../../firebase";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useUserContext();
  const router = useRouter();

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
  );
};

export default LoginForm;
