import { signInWithEmailAndPassword } from "@firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { auth } from "../../firebase";
import { Button } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

// This component represents a login form.
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages
  const [visiblePassword, setVisiblePassword] = useState(false);
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
      const errorCode = (error as any).code;

      let errorMessage = "An error occurred during login.";

      // Customizing the error message when logging in
      switch (errorCode) {
        case "auth/user-not-found":
          errorMessage = "User not found. Please check your email.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        default:
          errorMessage = "An error occurred during login";
      }
      setErrorMessage(errorMessage);
    }
  };
  const toggleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };
  return (
    <form
      action="login"
      onSubmit={handleSubmitLogin}
      className="flex flex-col items-start justify-start gap-2 w-full"
    >
      <label className="font-bold flex flex-col w-full">
        Email
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className={`p-2 rounded-md w-3/4 max-w-3xl mt-2 ${
            errorMessage === "User not found. Please check your email."
              ? "border-red-500 border-2 border-solid"
              : ""
          }`}
        />
      </label>
      <label className="font-bold flex flex-col my-2 w-full">
        Password
        <div className="flex flex-row flex-nowrap items-center">
          <input
            name="password"
            type={visiblePassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className={`p-2 rounded-md w-3/4 max-w-3xl mt-2 ${
              errorMessage === "Incorrect password. Please try again."
                ? "border-red-500 border-2 border-solid"
                : ""
            }`}
          />
          <button onClick={toggleVisiblePassword} className="ml-4">
            {visiblePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        </div>
      </label>
      <Button
        variant="text"
        sx={{
          letterSpacing: "1px",
          fontWeight: "bold",
          fontSize: "10px",
          color: "#b78d20",
          alignSelf: "center",
          transition: "scale .5s",
          ":hover": { scale: "1.1", background: "none" },
        }}
      >
        <Link href="/register/forgot">
          <span>Forgot password?</span>
        </Link>
      </Button>
      <Button
        variant="contained"
        type="submit"
        sx={{
          alignSelf: "center",
          transition: "scale .5s",
          backgroundColor: "#b78d20",
          ":hover": { scale: "1.2", backgroundColor: "#b67c10" },
        }}
      >
        Log in
      </Button>
      {errorMessage && (
        <p className="text-red-500 text-center w-full my-2">{errorMessage}</p>
      )}
    </form>
  );
};

export default LoginForm;
