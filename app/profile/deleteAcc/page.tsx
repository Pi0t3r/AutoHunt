"use client";
import { useUserContext } from "@/context/UserContext";
import { auth, db } from "@/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";

export default function DeleteAcc() {
  const { user, setUser } = useUserContext(); // Use the user context to access user data
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
    <div>
      <Link href="/profile">
        <button>Back</button>
      </Link>
      <h2>Are you sure?</h2>
      <button onClick={handleDeleteUser}>Yes, delete my account</button>
    </div>
  );
}
