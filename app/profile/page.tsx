"use client";
import ProfileImage from "@/components/profileImage/Page";
import { db, storage } from "@/firebase";
import useUserData from "@/useUserData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
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
  const [wantChangeImage, setWantImage] = useState<boolean>(false);
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
    setWantImage(false);
  };
  // Function to toggle password visibility
  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };
  const handleChangeImage = () => {
    setWantImage(true);
  };
  return (
    <div className="p-4 text-center">
      <Link href="/" className="absolute top-0 left-0 m-4">
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
      <>
        <div className="flex flex-row flex-wrap justify-center">
          <ProfileImage userMail={userMail} selectedImage={profileImage} />
        </div>
        <div className="">
          <p>
            Hello,{" "}
            <span className="text-main font-bold">
              {userName} {userSurname}
            </span>{" "}
            <br />
            Your email: <span className="text-main font-bold">
              {userMail}
            </span>{" "}
            <br />
            <span>
              Your password:{" "}
              <span className="font-bold text-main">
                {visiblePassword ? userPassword : "•••••••"}
              </span>{" "}
              <button onClick={handleVisiblePassword}>
                {visiblePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </span>
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-2 mt-2">
          <Link href="/profile/resetPassword" className="relative no-underline">
            <Button
              variant="contained"
              sx={{
                background: "#b78d20",
                ":hover": { backgroundColor: "#a67c10" },
              }}
            >
              Change my password
            </Button>
          </Link>
          <Link href="/profile/deleteAcc">
            <Button
              variant="contained"
              sx={{
                background: "#b78d20",
                ":hover": { backgroundColor: "#a67c10" },
              }}
            >
              I want delete my account
            </Button>
          </Link>
          {wantChangeImage ? (
            <div className="mt-3">
              <input
                type="file"
                accept="image/png"
                onChange={handleSelectedFile}
              />
              <Button
                variant="contained"
                sx={{
                  color: "#b78d20",
                  background: "none",
                  ":hover": { backgroundColor: "#a67c10", color: "white" },
                }}
                onClick={handleUploadFile}
              >
                Upload
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleChangeImage}
              variant="contained"
              sx={{
                background: "#b78d20",
                ":hover": { backgroundColor: "#a67c10" },
              }}
            >
              I want change my Image
            </Button>
          )}
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
