import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth"; // Import Firebase authentication functions
import { collection, doc, setDoc } from "firebase/firestore"; // Import Firebase Firestore functions
import React, { useState } from "react"; // Import React and useState hook
import { AiOutlineCloseCircle } from "react-icons/ai"; // Import AiOutlineCloseCircle icon from react-icons
import { db } from "../../firebase"; // Import Firebase database instance
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
// RegisterForm component
const RegisterForm = () => {
  const [name, setName] = useState(""); // State for user's name
  const [surname, setSurname] = useState(""); // State for user's surname
  const [email, setEmail] = useState(""); // State for user's email
  const [password, setPassword] = useState(""); // State for user's password
  const [, setErrorMessage] = useState(""); // State for error messages (not currently used)
  const [info, setInfo] = useState(false); // State to display registration success message
  const auth = getAuth(); // Get Firebase authentication instance
  const [visiblePassword, setVisiblePassword] = useState(false);
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
  const toggleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };
  return (
    <form
      action="signup"
      onSubmit={handleSubmitRegister}
      className="flex flex-col items-start justify-start gap-2 w-full"
    >
      <label className="font-bold flex flex-col  w-full">
        Name
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)} // Update the "name" state on input change
          className="p-2 rounded-md w-3/4 max-w-3xl mt-2"
        />
      </label>
      <label className="font-bold flex flex-col  w-full">
        Surname
        <input
          required
          name="surname"
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)} // Update the "surname" state on input change
          className="p-2 rounded-md w-3/4 max-w-3xl mt-2"
        />
      </label>
      <label className="font-bold flex flex-col  w-full">
        E-mail
        <input
          required
          name="email"
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update the "email" state on input change
          className="p-2 rounded-md w-3/4 max-w-3xl mt-2"
        />
      </label>
      <label className="font-bold flex flex-col  w-full">
        Password
        <div>
          <input
            required
            name="password"
            type={visiblePassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update the "password" state on input change
            className="p-2 rounded-md w-3/4 max-w-3xl mt-2"
          />
          <button onClick={toggleVisiblePassword} className="ml-4">
            {visiblePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        </div>
      </label>
      <div>
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
      <Button
        variant="outlined"
        type="submit"
        sx={{
          letterSpacing: "1px",
          fontWeight: "bold",
          fontSize: "10px",
          color: "#b78d20",
          alignSelf: "center",
          borderColor: "#b78d20",
          transition: "scale .5s",
          ":hover": {
            scale: "1.1",
            background: "none",
            borderColor: "#b78d20",
          },
        }}
      >
        Create account
      </Button>
    </form>
  );
};

export default RegisterForm;
