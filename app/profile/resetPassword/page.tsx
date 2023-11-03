'use client';
import { db } from '@/firebase';
import { LabelInput } from '@/types/InputTypes';
import useUserData from '@/useUserData';
import { EmailAuthProvider, getAuth, updatePassword } from '@firebase/auth';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { FormEvent, useEffect, useState } from 'react';
const LabelInput = ({ value, onChange, placeholder }: LabelInput) => {
  return (
    <label>
      <input
        type="password"
        value={value}
        onChange={onChange}
        className="p-2 my-2 rounded-md border-main border placeholder:text-slate-300"
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [mess, setMess] = useState('');

  const { userData } = useUserData();
  const { userPassword, userId } = userData;

  const auth = getAuth();

  const handleChangePassword = async () => {
    if (currentPassword !== userPassword) {
      setMess('Current password is incorrect');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setMess('New passwords do not match');
    } else {
      setMess('Your password is updated!');
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        setMess('User not logged in');
        return;
      }
      const userEmail = user.email;
      if (userEmail) {
        const credential = EmailAuthProvider.credential(
          userEmail,
          currentPassword,
        );
        await updatePassword(user, newPassword);

        const userCollectionRef = collection(db, 'users');
        const userDocRef = doc(userCollectionRef, userId);
        await updateDoc(userDocRef, {
          password: newPassword,
        });
      } else {
        setMess('User email is not available');
      }
    } catch (err) {
      console.error('Password change error: ', err);
      setMess('Error updating password');
    }
  };

  useEffect(() => {
    if (mess === '') {
      setNewPassword('');
      setConfirmNewPassword('');
      setCurrentPassword('');
    }
  }, [mess]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleChangePassword();
  };

  return (
    <main className="max-w-7xl mx-auto">
      <header className="relative h-20 mt-10">
        <h3 className="text-main italic font-bold absolute bottom-0 left-1/2 -translate-x-1/2">
          Change Password
        </h3>
      </header>
      <section className="my-20 text-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row flex-wrap gap-2 justify-center items-center"
        >
          <LabelInput
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current password"
          />
          <LabelInput
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password"
          />
          <LabelInput
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Confirm new password"
          />
          <Button
            type="submit"
            endIcon={<SaveIcon />}
            variant="outlined"
            size="small"
            sx={{
              borderColor: '#b78d20',
              color: '#b78d20',
              ':hover': { borderColor: '#a67c10', background: 'none' },
            }}
          >
            Change my password
          </Button>
        </form>
        {mess && <p>{mess}</p>}
      </section>
    </main>
  );
}
