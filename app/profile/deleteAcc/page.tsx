"use client";
import React from "react";
import Link from "next/link";
import { auth, db } from "@/firebase";
import { useUserContext } from "@/context/UserContext";
import { deleteDoc, doc } from "firebase/firestore";
export default function DeleteAcc() {
  const { user, setUser } = useUserContext();
  async function handleDeleteUser() {
    const user = auth.currentUser;

    try {
      const userId = user?.uid;
      await deleteDoc(doc(db, "users", userId));
      await user?.delete();
      await auth.signOut();
      setUser(null);
      console.log("User Account deleted succesful!");
      window.location.href = "/";
    } catch (err) {
      console.error("Error with deleting user: ", err);
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
