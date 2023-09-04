"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import styles from "./profile.module.css";
import useUserData from "@/useUserData";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Image from "next/image";

export default function Profile() {
  const { userData } = useUserData();
  const { userMail, userName, userPassword, userSurname } = userData;
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState("");
  const [isUploading, setIsuploading] = useState(false);
  const storage = getStorage();
  const handleSelectedFile = (files: any) => {
    setImageFile(files[0]);
  };
  const handleUploadFile = () => {
    if (imageFile) {
      const name = imageFile.name;
      const storageRef = ref(storage, `image/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

         

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {

            setDownloadURL(url);
          });
        }
      );
    } else {
      console.error("File not found");
    }
  };

  const handleRemoveFile = () => setImageFile(undefined);
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
            {downloadURL && (
              <>
                <Image
                  src={downloadURL}
                  width={250}
                  height={250}
                  alt="Profile Picture user"
                />
              </>
            )}
          </div>
          <div>
            <input
              type="file"
              accept="image/png"
              onChange={(files) => handleSelectedFile(files.target.value)}
            />
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
