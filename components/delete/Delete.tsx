import React from "react";
import { auth } from "@/firebase";
import { useRouter } from "next/router";
export default function DeleteUser() {
  const router = useRouter();
  const user = auth.currentUser;
  user
    ?.delete()
    .then(() => {
      console.log("User Account deleted succesful!");
      router.push("/");
    })
    .catch((err) => {
      console.log("Error with deleting user: ", err);
    });
}
