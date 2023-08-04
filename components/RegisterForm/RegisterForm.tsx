import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import styles from "../../app/register/register.module.css";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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

  return (
    <form action="signup" onSubmit={handleSubmitRegister}>
      <label htmlFor="email">E-mail</label>
      <input type="email" placeholder="example@email.com" />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="••••••••" />
      <div className={styles.checkboxDiv}>
        <input type="checkbox" required />
        <p>
          I acknowledge that I have read and accept the Terms and Conditions,
          and understand that OLX Group Ltd. will process my personal data in
          accordance with the Privacy Policy and the Policy on Cookies and
          Similar Technologies, which I have read.
        </p>
      </div>
      <input type="submit" value="Create account" className={styles.submit} />
    </form>
  );
};

export default RegisterForm;
