import { useUserContext } from "@/context/UserContext";
import { auth } from "@/firebase";
import { IconProps } from "@/types/ComponentTypes";
import useUserData from "@/useUserData";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import ProfileImage from "../profileImage/Page";
const SidebarLinks = ({ linkTo, icon, title }: IconProps) => {
  return (
    <li className="my-5">
      <Link href={linkTo} passHref>
        <Button
          variant="outlined"
          startIcon={icon}
          sx={{
            ":hover": {
              scale: "1.1",
            },
            transition: "scale .3s",
          }}
        >
          {title}
        </Button>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const { userData } = useUserData();
  const { userName, userSurname, userMail } = userData;
  const { setUser } = useUserContext();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <aside className="mt-1/4 p-5 text-center">
      <header>
        <ProfileImage userMail={userMail} />
        <p className="text-black">
          Hello,
          <span className="text-main block font-medium italic">
            {userName} {userSurname}
          </span>
        </p>
      </header>
      <nav>
        <ul className="flex flex-col flex-nowrap gap-y-2 mt-10">
          <SidebarLinks
            title="Add new advert"
            linkTo="/create"
            icon={<AddBoxIcon />}
          />
          <SidebarLinks
            title="Profile"
            linkTo="/profile"
            icon={<AiOutlineUser />}
          />
          <SidebarLinks
            title="My Car Advert"
            icon={<MdOutlineLocalOffer />}
            linkTo="/profile/myAdvert"
          />
          <Button
            onClick={handleLogout}
            variant="outlined"
            startIcon={<BiExit />}
            sx={{
              ":hover": {
                scale: "1.1",
              },
              transition: "scale .3s",
            }}
          >
            Logout
          </Button>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
