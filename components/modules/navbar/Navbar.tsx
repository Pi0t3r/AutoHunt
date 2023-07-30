"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useUserContext } from "../../../context/UserContext";
import LoggedInNabar from "./LoggedInNavbar";
export default function Navbar() {
  const { user } = useUserContext();
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, []);
  const navbarStyles = {
    background: scroll >= 50 ? "#515151f0" : "transparent",
  };

  return (
    <>
      {user ? (
        <LoggedInNabar />
      ) : (
        <nav className={styles.nav} style={navbarStyles}>
          <div>
            <span>
              <Link href="/register">Login</Link> |{" "}
              <Link href="/register">Sign up</Link>
            </span>
          </div>
          <div>
            <Link href="/">
              <h1>
                Auto<span>hunt</span>
              </h1>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
