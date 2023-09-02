"use client";
import React, { useState } from "react";
import Link from "next/link";
import useUserData from "@/useUserData";


export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [currentPassowrd, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { userData } = useUserData();
  const { userPassword } = userData;

  const checkNewPassword = () => {
    if (newPassword === confirmPassword) {
      setError("");
    } else {
      setError("Password is not the same");
    }
  };


  return (
    <>
      <div>
        <button>
          <Link href="/profile">Back</Link>
        </button>
      </div>
      <h3>Change Password</h3>
      <form>
        <label>
          Current Password
          <input
            type="password"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </label>
        <label>
          New Password
          <input
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm new Password
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Change Password Account" />
      </form>
      <p>
        {currentPassowrd} {newPassword} & {confirmPassword}
      </p>
      {error && <p>{error}</p>}
    </>
  );
}
