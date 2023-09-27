import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth"; // Import Firebase authentication functions
import { collection, doc, setDoc } from "firebase/firestore"; // Import Firebase Firestore functions
import React, { useState } from "react"; // Import React and useState hook
import { AiOutlineCloseCircle } from "react-icons/ai"; // Import AiOutlineCloseCircle icon from react-icons
import styles from "../../app/register/register.module.css"; // Import CSS styles
import { db } from "../../firebase"; // Import Firebase database instance

// RegisterForm component
const RegisterForm = () => {
  const [name, setName] = useState(""); // State for user's name
  const [surname, setSurname] = useState(""); // State for user's surname
  const [email, setEmail] = useState(""); // State for user's email
  const [password, setPassword] = useState(""); // State for user's password
  const [, setErrorMessage] = useState(""); // State for error messages (not currently used)
  const [info, setInfo] = useState(false); // State to display registration success message
  const auth = getAuth(); // Get Firebase authentication instance

  // Function to handle form submission (user registration)
  const handleSubmitRegister = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Create a new user account with email and password using Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Get the user object from the userCredential
      const user = userCredential.user;

      // Define references to Firestore collection and document
      const usersCollectionRef = collection(db, "users");
      const userDocRef = doc(usersCollectionRef, user.uid);

      // Set user data in Firestore document
      await setDoc(userDocRef, {
        name: name,
        surname: surname,
        email: email,
        password: password,
      });

      // Set the "info" state to true to display the registration success message
      setInfo(true);
    } catch (error) {
      const errorMessage = (error as Error).message; // Get error message from the error object
      setErrorMessage(errorMessage); // Set the error message (not currently used)
    }
  };

  return (
    <form action="signup" onSubmit={handleSubmitRegister}>
      <label>
        Name
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update the "name" state on input change
        />
      </label>
      <label>
        Surname
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)} // Update the "surname" state on input change
        />
      </label>
      <label>
        E-mail
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update the "email" state on input change
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update the "password" state on input change
        />
      </label>
      <div className={styles.checkboxDiv}>
        <input type="checkbox" required />
        <p>
          {/* Terms and conditions message */}I acknowledge that I have read and
          accept the Terms and Conditions, and understand that AutoHunt Group
          Ltd. will process my personal data in accordance with the Privacy
          Policy and the Policy on Cookies and Similar Technologies, which I
          have read.
        </p>
      </div>
      {info && (
        <div>
          <div>
            <button onClick={() => setInfo(false)}>
              <AiOutlineCloseCircle /> {/* Close button */}
            </button>
          </div>
          {/* Registration success message */}
          <p>You have been registered! Now go to the Login tab and log in.</p>
        </div>
      )}
      <input type="submit" value="Create account" className={styles.submit} />
    </form>
  );
};

export default RegisterForm;
