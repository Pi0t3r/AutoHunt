import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../sidebar/Page";


const LoggedInNabar = () => {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };
  return (
    <nav className="fixed inset-x-0 top-0 flex justify-between p-5 z-50 items-center">
      <div className="z-50">
        <button onClick={toggleSidebar} className="bg-inherit border-none">
          {visible ? (
            <AiOutlineClose className="w-8 h-8 text-main" />
          ) : (
            <FiMenu className="w-8 h-8 text-main" />
          )}
        </button>
      </div>
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
