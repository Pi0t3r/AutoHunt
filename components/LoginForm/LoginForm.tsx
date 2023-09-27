import { signInWithEmailAndPassword } from "@firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "../../app/register/register.module.css";
import { useUserContext } from "../../context/UserContext";
import { auth } from "../../firebase";
// This component represents a login form.
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages
  const { setUser } = useUserContext(); // Access the user context
  const router = useRouter();
  // Function to handle the form submission when the user tries to log in
  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Attempt to sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      // Set user context with email and empty user details
      setUser({
        email: email,
        name: "",
        surname: "",
        password: "",
        profileImage: "",
      });
      // Redirect the user to the home page after successful login
      router.push("/");
    } catch (error) {
      // If there's an error during login, display the error message
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
