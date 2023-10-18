"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import LoggedInNabar from "./LoggedInNavbar";
import { AiOutlineUser } from "react-icons/ai";
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
    <div className="w-full m-auto z-[51]">
      {user ? ( // Conditional rendering based on user authentication
        <LoggedInNabar /> // Render the LoggedInNavbar component if the user is authenticated
      ) : (
        <nav
          className="fixed inset-x-0 top-0 flex justify-between p-5 z-[51] items-center"
          style={navbarStyles}
        >
          {/* Render the navigation bar for non-authenticated users */}
          <div>
            <span className="text-white">
              <Link href="/register">
                <AiOutlineUser className="w-8 h-8"/>
              </Link>
            </span>
          </div>
          <>
            <Link href="/" className="text-white no-underline">
              <h1 className="uppercase font-medium text-lg">
                Auto<span className="text-main">hunt</span>
              </h1>
            </Link>
          </>
        </nav>
      )}
    </div>
  );
}
