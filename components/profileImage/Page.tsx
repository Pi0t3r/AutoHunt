import React, { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/firebase";
import { AiOutlineUser } from "react-icons/ai";
import styles from "./profileImage.module.css";

interface ProfileImageProps {
  userMail: string;
  selectedImage?: string | null;
}
const ProfileImage = ({ userMail, selectedImage }: ProfileImageProps) => {
  const [profileImageURL, setProfileImageURL] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      setProfileImageURL(selectedImage);
    } else {
      const storageRef = ref(storage, `profileImages/${userMail}`);
      getDownloadURL(storageRef)
        .then((url) => {
          setProfileImageURL(url);
        })
        .catch((error) => {
          console.error("Error fetching profile image:", error);
        });
    }
  }, [userMail, selectedImage]);

  return (
    <div className={styles.profileImage}>
      {profileImageURL ? (
        <img src={profileImageURL} alt="Profile picture user" />
      ) : (
        <AiOutlineUser />
      )}
    </div>
  );
};

export default ProfileImage;
