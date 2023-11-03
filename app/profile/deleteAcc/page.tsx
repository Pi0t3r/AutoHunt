'use client';
import { useUserContext } from '@/context';
import { auth, db } from '@/firebase';
import Button from '@mui/material/Button';
import { deleteDoc, doc } from 'firebase/firestore';
import Link from 'next/link';

export default function DeleteAcc() {
  const { setUser } = useUserContext();
  async function handleDeleteUser() {
    const user = auth.currentUser;

    try {
      const userId = user?.uid;
      await deleteDoc(doc(db, 'users', userId as string));
      await user?.delete();
      await auth.signOut();
      setUser(null);
      window.location.href = '/';
    } catch (err) {
      console.error('Error with deleting user: ', err);
    }
  }
  return (
    <main className="mt-20">
      <div className="text-center flex flex-row flex-wrap justify-center items-center gap-2 p-10">
        <h2>Are you sure you want to delete your account?</h2>
        <p>
          Deleting your account will result in the permanent loss of all your
          data associated with your account. Are you absolutely certain you wish
          to proceed with this action?
        </p>
        <Button
          onClick={handleDeleteUser}
          variant="outlined"
          sx={{
            color: '#b78d20',
            borderColor: '#b78d20',
            textTransform: 'lowercase',
            ':hover': { borderColor: '#a67c10', background: 'none' },
          }}
        >
          Yes, delele my account
        </Button>
        <Link href="/profile">
          <Button
            variant="outlined"
            sx={{
              color: '#b78d20',
              borderColor: '#b78d20',
              textTransform: 'lowercase',
              ':hover': { borderColor: '#a67c10', background: 'none' },
            }}
          >
            No, not now
          </Button>
        </Link>
      </div>
    </main>
  );
}
