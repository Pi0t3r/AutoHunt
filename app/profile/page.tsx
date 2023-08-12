"use client";
import React, { useState, useEffect } from "react";
import { useUserContext } from "@/context/UserContext";
import Link from "next/link";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { AiOutlineUser } from "react-icons/ai";
export default function Profile() {
  const { user, setUser } = useUserContext();
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const getUserData = async () => {
    try {
      if (user && user.email) {
        const userCollectionRef = collection(db, "users");
        const q = query(userCollectionRef, where("email", "==", user.email));
        const usersSnapshot = await getDocs(q);
        if (!usersSnapshot.empty) {
          const userData = usersSnapshot.docs[0].data();
          setUserName(userData.name);
          setUserSurname(userData.surname);
          setUserMail(userData.email);
          setUserPassword(userData.password);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    if (user && !userName && !userSurname) {
      getUserData();
    }
  }, [user, userName, userSurname, setUser]);

  return (
    <div>
      <Link href="/">
        <button>Back</button>
      </Link>
      <div>
        <div>
          <div>
            <AiOutlineUser />
          </div>
          Witam, {userName} {userSurname} <br />
          <span>Twój mail to: {userMail}</span> <br />
          <span>Twoje hasło to: {userPassword}</span>
        </div>
      </div>
    </div>
  );
}
