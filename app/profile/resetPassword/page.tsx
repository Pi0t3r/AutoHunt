"use client";
import { db } from "@/firebase";
import useUserData from "@/useUserData";
import { EmailAuthProvider, getAuth, updatePassword } from "@firebase/auth";
import { collection, doc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

export default function ResetPassword() {
  // State declarations for form inputs and messages
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [mess, setMess] = useState("");
  // Get user data from context
  const { userData } = useUserData();
  const { userPassword, userId } = userData;
  // Initialize Firebase authentication
  const auth = getAuth();
  // Function to handle password change
  const handleChangePassword = async () => {
    if (currentPassword !== userPassword) {
      setMess("Current password is incorrect");
      return;
    } else {
      setMess("");
    }

    if (newPassword !== confirmNewPassword) {
      setMess("New passwords do not match");
      return;
    } else {
      setMess("Your password is updated!");
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        setMess("User not logged in");
        return;
      }
      // Update password in Firebase Authentication
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await updatePassword(user, newPassword);
      // Update password in Firestore user document
      const userCollectionRef = collection(db, "users");
      const userDocRef = doc(userCollectionRef, userId);
      await updateDoc(userDocRef, {
        password: newPassword,
      });
    } catch (err) {
      console.error("Password change error: ", err);
      setMess("Error updating password");
    }
  };
  // Effect to clear form inputs when the message is cleared
  useEffect(() => {
    if (mess === "") {
      setNewPassword("");
      setConfirmNewPassword("");
      setCurrentPassword("");
    }
  }, [mess]);
  // Function to handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleChangePassword();
  };

  return (
    <>
      <div>
        <button>
          <Link href="/profile">Back</Link>
        </button>
      </div>
      <h3>Change Password</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Current Password
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </label>
        <label>
          New Password
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm new Password
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Change Password Account" />
      </form>
      {mess && <p>{mess}</p>}
    </>
  );
}
