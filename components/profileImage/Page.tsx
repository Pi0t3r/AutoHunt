import { storage } from "@/firebase";
import { ProfileImageProps } from "@/types";
import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

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
    <div className="mt-10 my-5 flex justify-center">
      {profileImageURL ? ( 
        <Image
          src={profileImageURL}
          alt="Profile picture user"
          width={150}
          height={150}
          className="rounded-full shadow-xl w-28 border border-main max-h-28 max-w-28 object-contain"
        />
      ) : (
        <AiOutlineUser /> 
      )}
    </div>
  );
};

export default ProfileImage;
