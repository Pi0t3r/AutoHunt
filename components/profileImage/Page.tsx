import { storage } from "@/firebase";
import { ProfileImageProps } from "@/types/myTypes";
import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import styles from "./profileImage.module.css";
// ProfileImage component with userMail and selectedImage props
const ProfileImage = ({ userMail, selectedImage }: ProfileImageProps) => {
  const [profileImageURL, setProfileImageURL] = useState<string | null>(null); // State to store the profile image URL

  useEffect(() => {
    // Check if a selectedImage prop is provided (used for custom profile images)
    if (selectedImage) {
      setProfileImageURL(selectedImage);
    } else {
      // If no selected image, fetch the profile image URL from Firebase storage
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
      {profileImageURL ? ( // Display the profile image if the URL exists
        <Image
          src={profileImageURL}
          alt="Profile picture user"
          width={150}
          height={150}
        />
      ) : (
        <AiOutlineUser /> // Display a default user icon if no profile image is available
      )}
    </div>
  );
};

export default ProfileImage;
