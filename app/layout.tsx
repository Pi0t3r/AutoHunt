"use client";
import { UserProvider } from "@/context/UserContext";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";
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
  return (
    <html lang="en">
      <head>
        <title>Autohunt</title>
      </head>
      <body className={inter.className}>
        <UserProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
