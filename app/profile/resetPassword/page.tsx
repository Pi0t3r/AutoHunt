"use client";
import { db } from "@/firebase";
import { LabelInput } from "@/types/myTypes";
import useUserData from "@/useUserData";
import { EmailAuthProvider, getAuth, updatePassword } from "@firebase/auth";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import { collection, doc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import SaveIcon from "@mui/icons-material/Save";
import { FormEvent, useEffect, useState } from "react";
const LabelInput = ({ value, onChange, placeholder }: LabelInput) => {
  return (
    <label>
      <input
        type="password"
        value={value}
        onChange={onChange}
        className="p-2 my-2 rounded-md border-main border placeholder:text-slate-300"
        placeholder={placeholder}
        required
      />
    </label>
  );
};

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
      const userEmail = user.email;
      if (userEmail) {
        const credential = EmailAuthProvider.credential(
          userEmail,
          currentPassword
        );
        await updatePassword(user, newPassword);
        // Update password in Firestore user document
        const userCollectionRef = collection(db, "users");
        const userDocRef = doc(userCollectionRef, userId);
        await updateDoc(userDocRef, {
          password: newPassword,
        });
      } else {
        setMess("User email is not available");
      }
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
      <div className="mt-20 text-center">
        <h3 className="text-main italic font-bold">Change Password</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row flex-wrap justify-center md:justify-start items-center"
        >
          <LabelInput
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current password"
          />
          <LabelInput
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password"
          />
          <LabelInput
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Confirm new password"
          />
          <Button
            type="submit"
            endIcon={<SaveIcon />}
            variant="contained"
            size="small"
            sx={{
              background: "#b78d20",
              ":hover": { backgroundColor: "#a67c10" },
            }}
          >
            Change my password
          </Button>
        </form>
        {mess && <p>{mess}</p>}
      </div>
    </>
  );
}
