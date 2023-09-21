"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./profile.module.css";
import useUserData from "@/useUserData";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "@/firebase";
import { updateDoc, doc } from "firebase/firestore";
import ProfileImage from "@/components/profileImage/Page";
export default function Profile() {
  const { userData } = useUserData();
  const { userMail, userName, userPassword, userSurname } = userData;
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (userData.userProfilePicture) {
      setProfileImage(userData.userProfilePicture);
    }
  }, [userData.userProfilePicture]);

  const handleSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setProfileImage(imageUrl);
    }
  };
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
            <ProfileImage userMail={userMail} selectedImage={profileImage}/>
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
