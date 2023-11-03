'use client';
import ProfileImage from '@/components/ProfileImage';
import { db, storage } from '@/firebase';
import useUserData from '@/useUserData';
import Button from '@mui/material/Button';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Link from 'next/link';
import { useEffect, useState, ChangeEvent } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { EMPTY_VALUE } from '@/constants';
export default function Profile() {
  const { userData } = useUserData();
  const { userMail, userName, userPassword, userSurname } = userData;

  const [visiblePassword, setVisiblePassword] = useState(false);

  const [profileImage, setProfileImage] = useState<string | null>(null);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [wantChangeImage, setWantImage] = useState(false);
  useEffect(() => {
    if (userData.userProfilePicture) {
      setProfileImage(userData.userProfilePicture);
    }
  }, [userData.userProfilePicture]);

  const handleSelectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[EMPTY_VALUE]) {
      setImageFile(event.target.files[EMPTY_VALUE]);
      const imageUrl = URL.createObjectURL(event.target.files[EMPTY_VALUE]);
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

        const userDocRef = doc(db, 'users', userMail);
        const userDataToUpdate = {
          profileImage: imageUrl,
        };
        await updateDoc(userDocRef, userDataToUpdate);
      } catch (err) {
        console.error(`Error while sending file: ${err}`);
      }
    } else {
      console.error('File not found');
    }
    setWantImage(false);
  };
  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };
  const handleChangeImage = () => {
    setWantImage(true);
  };
  return (
    <main className="my-20">
      <section className="flex flex-row flex-wrap justify-center">
        <ProfileImage userMail={userMail} selectedImage={profileImage} />
      </section>
      <section className="flex flex-row flex-wrap gap-4 items-center justify-center p-4">
        <span>
          Hello,{' '}
          <span className="text-main font-bold">
            {userName} {userSurname}
          </span>
        </span>
        <span>
          Your email: <span className="text-main font-bold">{userMail}</span>{' '}
        </span>
        <span>
          Your password:{' '}
          <span className="font-bold text-main">
            {visiblePassword ? userPassword : '•••••••'}
          </span>{' '}
          <button onClick={handleVisiblePassword}>
            {visiblePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </span>
      </section>
      <section className="flex flex-row flex-wrap justify-center gap-3 my-2">
        <Link href="/profile/resetPassword" className="relative no-underline">
          <Button
            variant="outlined"
            sx={{
              letterSpacing: '1px',
              fontWeight: 'bold',
              fontSize: '10px',
              borderColor: '#b78d20',
              color: '#b78d20',
              transition: 'scale .5s',
              ':hover': {
                margin: '0 5px',
                borderColor: '#a67c10',
                background: 'none',
                scale: '1.1',
              },
            }}
          >
            Change my password
          </Button>
        </Link>
        <Link href="/profile/deleteAcc">
          <Button
            variant="outlined"
            sx={{
              letterSpacing: '1px',
              fontWeight: 'bold',
              fontSize: '10px',
              borderColor: '#b78d20',
              color: '#b78d20',
              transition: 'scale .5s',
              ':hover': {
                margin: '0 5px',
                borderColor: '#a67c10',
                background: 'none',
                scale: '1.1',
              },
            }}
          >
            I want delete my account
          </Button>
        </Link>
        {wantChangeImage ? (
          <div className="m3-3">
            <label className="block mb-2 w-3/4 text-sm font-medium text-gray-900 dark:text-white">
              Upload files
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
                multiple
                onChange={handleChangeImage}
              />
            </label>
          </div>
        ) : (
          <Button
            onClick={handleChangeImage}
            variant="outlined"
            sx={{
              letterSpacing: '1px',
              fontWeight: 'bold',
              fontSize: '10px',
              borderColor: '#b78d20',
              color: '#b78d20',
              transition: 'scale .5s',
              ':hover': {
                margin: '0 5px',
                borderColor: '#a67c10',
                background: 'none',
                scale: '1.1',
              },
            }}
          >
            I want change my Image
          </Button>
        )}
      </section>
    </main>
  );
}
