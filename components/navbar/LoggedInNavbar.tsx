import { useUserContext } from "@/context/UserContext";
import { auth } from "@/firebase";
import useUserData from "@/useUserData";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../sidebar/Page";

// const Buttons = () => {
//   return (
//     <Button
//       variant="contained"
//       onClick={clearData}
//       type="submit"
//       sx={{
//         letterSpacing: "1px",
//         fontWeight: "bold",
//         fontSize: "10px",
//         background: "#b78d20",
//         ":hover": { backgroundColor: "#a67c10" },
//       }}
//     >
//       Display
//     </Button>
//   );
// };

const LoggedInNabar = () => {
  const { userData } = useUserData(); // Get user data using a custom hook
  const { userName, userSurname } = userData; // Destructure user data
  const { setUser } = useUserContext(); // Get user context and setUser function
  const [visible, setVisible] = useState(false);
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
  return (
    <nav className="fixed inset-x-0 top-0 flex justify-between p-5 z-[51] items-center max-w-7xl m-auto">
      <div>
        <button
          onClick={toggleSidebar}
          className="bg-inherit border-none md:hidden"
        >
          {visible ? (
            <AiOutlineClose className="w-8 h-8 text-main" />
          ) : (
            <FiMenu className="w-8 h-8 text-main" />
          )}
        </button>
        <div className="block flex flex-row gap-2 items-center text-white">
          <p>
            Hello, {userName} {userSurname}
          </p>
          <ul className="flex flex-row gap-1 items-center">
            <li>
              <Button variant="contained" size="small">
                <Link href="/create">Add new advert</Link>
              </Button>
            </li>
            <li>
              <Button variant="contained" size="small">
                <Link href="/profile">Profile</Link>
              </Button>
            </li>
            <li>
              <Button variant="contained" size="small">
                <Link href="/profile/myAdvert">My advert</Link>
              </Button>
            </li>
            <li>
              <Button onClick={handleLogout} variant="contained" size="small">
                Logout
              </Button>
            </li>
          </ul>
        </div>
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
