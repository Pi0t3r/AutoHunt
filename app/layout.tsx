"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { UserContext } from "../context/UserContext";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutoHunt",
  description: "Website for buying car online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<{ email: string } | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleSetUser = (userData: { email: string } | null) => {
    setUser(userData);
  };
  const contextValue = {
    user,
    setUser: handleSetUser,
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContext.Provider value={contextValue}>
          {children}
        </UserContext.Provider>
      </body>
    </html>
  );
}
