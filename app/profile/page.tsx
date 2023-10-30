'use client';
import ProfileImage from '@/components/profileImage/Page';
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
      <section className="flex flex-row flex-wrap justify-center gap-2 my-2">
        <Link href="/profile/resetPassword" className="relative no-underline">
          <Button
            variant="contained"
            sx={{
              background: '#b78d20',
              ':hover': { backgroundColor: '#a67c10' },
            }}
          >
            Change my password
          </Button>
        </Link>
        <Link href="/profile/deleteAcc">
          <Button
            variant="contained"
            sx={{
              background: '#b78d20',
              ':hover': { backgroundColor: '#a67c10' },
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
                color: '#b78d20',
                background: 'none',
                ':hover': { backgroundColor: '#a67c10', color: 'white' },
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
              background: '#b78d20',
              ':hover': { backgroundColor: '#a67c10' },
            }}
          >
            I want change my Image
          </Button>
        )}
      </section>
    </main>
  );
}
function getUploadTaskSnapshot(
  uploadTask: Promise<import('@firebase/storage').UploadResult>,
) {
  throw new Error('Function not implemented.');
}
