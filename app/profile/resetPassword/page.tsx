"use client";
import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import useUserData from "@/useUserData";
import { db } from "@/firebase";
import { collection, doc, updateDoc } from "firebase/firestore";
import {
  EmailAuthProvider,
  getAuth,
  updatePassword,
} from "@firebase/auth";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [mess, setMess] = useState("");
  const { userData } = useUserData();
  const { userPassword, userId } = userData;
  const auth = getAuth();

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
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await updatePassword(user, newPassword);

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
  useEffect(() => {
    if (mess === "") {
      setNewPassword("");
      setConfirmNewPassword("");
      setCurrentPassword("");
    }
  }, [mess]);

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
