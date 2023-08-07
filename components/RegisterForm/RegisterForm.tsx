import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "../../firebase";
import styles from "../../app/register/register.module.css";
import { doc, setDoc, collection } from "firebase/firestore";
const RegisterForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmitRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const usersCollectionRef = collection(db, "users");
      const userDocRef = doc(usersCollectionRef, user.uid);
      await setDoc(userDocRef, {
        name: name,
        surname: surname,
        email: email,
        password: password,
      });
      window.alert("User created!");
    } catch (error) {
      const errorMessage = (error as Error).message;
      setErrorMessage(errorMessage);
    }
  };
  return (
    <form action="signup" onSubmit={handleSubmitRegister}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="surname">Surname</label>
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.checkboxDiv}>
        <input type="checkbox" required />
        <p>
          I acknowledge that I have read and accept the Terms and Conditions,
          and understand that AutoHunt Group Ltd. will process my personal data
          in accordance with the Privacy Policy and the Policy on Cookies and
          Similar Technologies, which I have read.
        </p>
      </div>
      <input type="submit" value="Create account" className={styles.submit} />
    </form>
  );
};

export default RegisterForm;
