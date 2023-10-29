import { useUserContext } from "@/context/UserContext";
import { auth } from "@/firebase";
import useUserData from "@/useUserData";
import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../sidebar/Page";
import { LinksProps } from "@/types";
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
  const { userData } = useUserData();
  const { userName, userSurname } = userData;
  const { setUser } = useUserContext();
  const [visible, setVisible] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error(error);
    }
  };
  const toggleSidebar = () => {
    setVisible(!visible);
  };

  const navbarStyles = {
    background: scroll >= 50 ? "#515151f0" : "transparent",
  };
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

  return (
    <nav
      className="fixed bg-[#515151f0] inset-x-0 top-0 flex justify-between p-5 z-[52] items-center max-w-7xl mx-auto transition-all"
      // style={navbarStyles}
    >
      <>
        <button
          onClick={toggleSidebar}
          className="bg-none border-none md:hidden z-[100]"
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
