"use client";
import { useUserContext } from "@/context/UserContext";
import { auth, db } from "@/firebase";
import Button from "@mui/material/Button";
import { deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";

export default function DeleteAcc() {
  const { setUser } = useUserContext();
  async function handleDeleteUser() {
    const user = auth.currentUser;

    try {
      const userId = user?.uid;
      await deleteDoc(doc(db, "users", userId as string));
      await user?.delete();
      await auth.signOut();
      setUser(null);
      window.location.href = "/";
    } catch (err) {
      console.error("Error with deleting user: ", err);
    }
  }
  return (
    <main className="flex flex-col justify-center items-center p-4 max-w-7xl mx-auto">
      <div className="mt-20 text-center flex flex-col gap-2">
        <h2>Are you sure?</h2>
        <Button
          onClick={handleDeleteUser}
          variant="contained"
          sx={{
            background: "#b78d20",
            textTransform: "lowercase",
            ":hover": { backgroundColor: "#a67c10" },
          }}
        >
          Yes, delele my account
        </Button>
        <Link href="/profile">
          <Button
            variant="contained"
            sx={{
              textTransform: "lowercase",
              ":hover": { backgroundColor: "#a67c10" },
              background: "#b78d20",
            }}
          >
            No, not now
          </Button>
        </Link>
      </div>
    </main>
  );
}
