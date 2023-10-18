import { useUserContext } from "@/context/UserContext";
import { auth } from "@/firebase";
import useUserData from "@/useUserData";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import ProfileImage from "../profileImage/Page";
import { LinksProps } from "@/types/myTypes";

const Links = ({ linkTo, icon, title }: LinksProps) => {
  return (
    <li className="my-5">
      <Link href={linkTo} className="text-lg flex items-center">
        {icon} <span className="ml-3">{title}</span>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const { userData } = useUserData(); // Get user data using a custom hook
  const { userName, userSurname, userMail } = userData; // Destructure user data
  const { setUser } = useUserContext(); // Get user context and setUser function
  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user using Firebase
      setUser(null); // Set the user context to null
      localStorage.removeItem("user"); // Remove user data from local storage
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-1/4 p-5 text-center">
      <div>
        <div>
          <ProfileImage userMail={userMail} />
        </div>
        <span className="text-black">
          Hello, <br />
          {userName} {userSurname}
        </span>
      </div>
      <div className="my-10">
        <Link
          href="/create"
          className="block p-3.5 w-4/5 max-w-16 bg-main border-none text-white font-bold text-base rounded-md tracking-wide"
        >
          Add new Car Advert
        </Link>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-1/2 p-4">
        <ul className="text-left p-0 list-none">
          <Links title="Profile" linkTo="/profile" icon={<AiOutlineUser />} />
          <Links
            title="My Car Advert"
            icon={<MdOutlineLocalOffer />}
            linkTo="/profile/myAdvert"
          />
          <li className="absolute bottom-0">
            <button
              onClick={handleLogout}
              className="flex text-lg items-center"
            >
              <BiExit /> <span className="ml-3">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
