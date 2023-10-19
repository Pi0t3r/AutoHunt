import { useUserContext } from "@/context/UserContext";
import { auth } from "@/firebase";
import useUserData from "@/useUserData";
import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../sidebar/Page";
import { LinksProps } from "@/types/myTypes";
const Buttons = ({ title, linkTo }: LinksProps) => {
  return (
    <li className="hover:scale-110 transition-all hover:mx-2">
      <Button
        variant="outlined"
        size="small"
        sx={{
          letterSpacing: "1px",
          fontWeight: "bold",
          fontSize: "10px",
          borderColor: "#b78d20",
          color: "#b78d20",
          ":hover": { borderColor: "#a67c10" },
        }}
      >
        <Link href={linkTo}>{title}</Link>
      </Button>
    </li>
  );
};

const LoggedInNabar = () => {
  const { userData } = useUserData(); // Get user data using a custom hook
  const { userName, userSurname } = userData; // Destructure user data
  const { setUser } = useUserContext(); // Get user context and setUser function
  const [visible, setVisible] = useState(false);
  const [scroll, setScroll] = useState<number>(0); // State variable to track scroll position

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user using Firebase
      setUser(null); // Set the user context to null
      localStorage.removeItem("user"); // Remove user data from local storage
    } catch (error) {
      console.error(error);
    }
  };
  const toggleSidebar = () => {
    setVisible(!visible);
  };
  // Adding a scroll event listener to update the scroll state
  // Conditional styling for the navbar based on the scroll position
  const navbarStyles = {
    background: scroll >= 50 ? "#515151f0" : "transparent", // Change background color when scrolled down
  };
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

  return (
    <nav
      className="fixed inset-x-0 top-0 flex justify-between p-5 z-[52] items-center max-w-7xl m-auto transition-all"
      style={navbarStyles}
    >
      <>
        <button
          onClick={toggleSidebar}
          className="bg-inherit border-none md:hidden z-[100]"
        >
          {visible ? (
            <AiOutlineClose className="w-8 h-8 text-main" />
          ) : (
            <FiMenu className="w-8 h-8 text-main" />
          )}
        </button>
        <div className="hidden md:flex flex-row gap-2 items-center text-white justify-between hidden">
          <p>
            Hello, {userName} {userSurname}
          </p>
          <ul className="flex flex-row gap-x-3 items-center ml-6">
            <Buttons title="Add new advert" linkTo="create" />
            <Buttons title="Profile" linkTo="/profile" />
            <Buttons title="My advert" linkTo="/profile/myAdvert" />
            <li className="hover:scale-110 transition-all hover:mx-2">
              <Button
                onClick={handleLogout}
                variant="text"
                size="small"
                sx={{
                  letterSpacing: "1px",
                  fontWeight: "bold",
                  fontSize: "10px",
                  color: "white",
                  textDecoration: "underline",
                }}
              >
                Logout
              </Button>
            </li>
          </ul>
        </div>
      </>
      <div
        className="bg-white fixed inset-y-0 left-0"
        style={{
          transform: visible ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Sidebar />
      </div>
      <>
        <Link href="/" className="text-white no-underline">
          <h1 className="uppercase font-medium text-lg">
            Auto<span className="text-main">hunt</span>
          </h1>
        </Link>
      </>
    </nav>
  );
};

export default LoggedInNabar;
