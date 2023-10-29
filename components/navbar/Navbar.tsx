"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import LoggedInNabar from "./LoggedInNavbar";
import { AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  const { user } = useUserContext();
  const [scroll, setScroll] = useState(0);

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
    <div className="z-[51]">
      {user ? (
        <LoggedInNabar />
      ) : (
        <nav
          className="fixed bg-[#515151f0] inset-x-0 top-0 flex justify-between p-5 z-[51] items-center max-w-7xl mx-auto"
          // style={navbarStyles}
        >
          <div>
            <span className="text-white">
              <Link href="/register">
                <AiOutlineUser className="w-8 h-8" />
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
