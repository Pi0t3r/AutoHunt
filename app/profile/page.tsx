"use client";
import ProfileImage from "@/components/profileImage/Page";
import { db, storage } from "@/firebase";
import useUserData from "@/useUserData";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./profile.module.css";
export default function Profile() {
  // Get user data from context
  const { userData } = useUserData();
  const { userMail, userName, userPassword, userSurname } = userData;
  // State for password visibility
  const [visiblePassword, setVisiblePassword] = useState(false);
  // State for user profile image
  const [profileImage, setProfileImage] = useState<string | null>(null);
  // State for the selected image file
  const [imageFile, setImageFile] = useState<File | null>(null);
  // Effect to set profile image when user data changes
  useEffect(() => {
    if (userData.userProfilePicture) {
      setProfileImage(userData.userProfilePicture);
    }
  }, [userData.userProfilePicture]);
  // Function to handle file selection
  const handleSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setProfileImage(imageUrl);
    }
  };
  // Function to handle image upload to Firebase
  const handleUploadFile = async () => {
    if (imageFile) {
      const storageRef = ref(storage, `profileImages/${userMail}`);
      try {
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        await uploadTask;

        const imageUrl = await getDownloadURL(storageRef);
        setProfileImage(imageUrl);

        const userDocRef = doc(db, "users", userMail);
        const userDataToUpdate = {
          profileImage: imageUrl,
        };
        await updateDoc(userDocRef, userDataToUpdate);
      } catch (err) {
        console.error(`Error while sending file: ${err}`);
      }
    } else {
      console.error("File not found");
    }
  };
  // Function to toggle password visibility
  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <div className={styles.container}>
      <Link href="/">
        <button>Back</button>
      </Link>
      <>
        <div>
          <div className={styles.circle}>
            <ProfileImage userMail={userMail} selectedImage={profileImage} />
          </div>
          <div>
            <input
              type="file"
              accept="image/png"
              onChange={handleSelectedFile}
            />
            <button onClick={handleUploadFile}>Upload</button>
          </div>
        </div>
        <div className={styles.info}>
          <p>
            Hello,{" "}
            <span className={styles.data}>
              {userName} {userSurname}
            </span>{" "}
            <br />
            Your email: <span className={styles.data}>{userMail}</span> <br />
            <span className={styles.password}>
              Your password:{" "}
              <span className={styles.data}>
                {visiblePassword ? userPassword : "•••••••"}
              </span>{" "}
              <button onClick={handleVisiblePassword}>
                {visiblePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </span>
          </p>
        </div>
        <div className={styles.button}>
          <Link href="/profile/resetPassword">
            <button>Change my password</button>
          </Link>
          <br />
          <Link href="/profile/deleteAcc">
            <button>I want to delete my account</button>
          </Link>
        </div>
      </>
    </div>
  );
}
function getUploadTaskSnapshot(
  uploadTask: Promise<import("@firebase/storage").UploadResult>
) {
  throw new Error("Function not implemented.");
}
