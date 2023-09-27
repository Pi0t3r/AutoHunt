"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import LoggedInNabar from "./LoggedInNavbar";
import styles from "./navbar.module.css";
// Defining the Navbar component
export default function Navbar() {
  const { user } = useUserContext(); // Accessing user information from the user context
  const [scroll, setScroll] = useState<number>(0); // State variable to track scroll position
  // Adding a scroll event listener to update the scroll state
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY); // Update the scroll state with the current scroll position
    });
    // Cleaning up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, []); // Empty dependency array to ensure the effect runs only once
  // Conditional styling for the navbar based on the scroll position
  const navbarStyles = {
    background: scroll >= 50 ? "#515151f0" : "transparent", // Change background color when scrolled down
  };

  return (
    <>
      {user ? ( // Conditional rendering based on user authentication
        <LoggedInNabar /> // Render the LoggedInNavbar component if the user is authenticated
      ) : (
        <nav className={styles.nav} style={navbarStyles}>
          {/* Render the navigation bar for non-authenticated users */}
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
