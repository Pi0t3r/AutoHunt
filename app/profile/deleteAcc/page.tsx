"use client";
import { useUserContext } from "@/context/UserContext";
import { auth, db } from "@/firebase";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import { deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";

export default function DeleteAcc() {
  const { setUser } = useUserContext(); // Use the user context to access user data
  // Function to handle user account deletion
  async function handleDeleteUser() {
    const user = auth.currentUser; // Get the current authenticated user

    try {
      const userId = user?.uid; // Get the user's UID
      await deleteDoc(doc(db, "users", userId as string)); // Delete the user's document from Firestore
      await user?.delete(); // Delete the user's authentication account
      await auth.signOut(); // Sign the user out
      setUser(null); // Set the user context to null
      window.location.href = "/"; // Redirect to the home page
    } catch (err) {
      console.error("Error with deleting user: ", err); // Log any errors that occur during deletion
    }
  }
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <Link href="/profile" className="absolute top-0 left-0 p-4">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          sx={{
            borderColor: "#b78d20",
            color: "#b78d20",
            textTransform: "lowercase",

            ":hover": { borderColor: "#a67c10", color: "#b78d20" },
          }}
        >
          Back
        </Button>
      </Link>
      <div className="mt-20 text-center flex flex-col gap-2">
        <h2>Are you sure?</h2>
        <Button
          onClick={handleDeleteUser}
          variant="contained"
          sx={{
            background: "#b78d20",
            textTransform: "lowercase",
            ":hover": { backgroundColor: "#a67c10" },
          }}
        >
          Yes, delele my account
        </Button>
        <Link href="/profile">
          <Button
            variant="contained"
            sx={{
              textTransform: "lowercase",
              ":hover": { backgroundColor: "#a67c10" },
              background: "#b78d20",
            }}
          >
            No, not now
          </Button>
        </Link>
      </div>
    </div>
  );
}
