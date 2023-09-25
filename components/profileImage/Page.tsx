import React, { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/firebase";
import { AiOutlineUser } from "react-icons/ai";
import styles from "./profileImage.module.css";
import { ProfileImageProps } from "@/types/myTypes";
import Image from "next/image";

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
        <Image src={profileImageURL} alt="Profile picture user" width={150} height={150} />
      ) : (
        <AiOutlineUser />
      )}
    </div>
  );
};

export default ProfileImage;
