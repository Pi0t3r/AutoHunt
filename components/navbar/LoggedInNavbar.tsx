import { useUserContext } from '@/context/UserContext';
import { handleLogout } from '@/functions';
import useUserData from '@/useUserData';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Sidebar } from '../sidebar/page';
import { Navigation } from './Navigation';
const LoggedInNabar = () => {
  const { userData } = useUserData();
  const { userName } = userData;
  const { setUser } = useUserContext();
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };
  return (
    <header className="fixed bg-[#515151f0] inset-x-0 top-0 flex justify-between p-5 z-[52] items-center max-w-7xl mx-auto transition-all">
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
      <p className="hidden md:block text-white w-1/4">
        Hello,
        <span className="text-main font-medium italic"> {userName}</span>
      </p>
      <nav className="hidden md:block w-3/4">
        <Navigation
          gap="x"
          onClick={() => handleLogout(setUser)}
          flex="row"
          color="white"
          margin="mx"
        />
      </nav>

      <div
        className="bg-white fixed inset-y-0 left-0"
        style={{
          transform: visible ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <Sidebar />
      </div>
      <div className="ml-5">
        <Link href="/" className="text-white no-underline">
          <h1 className="uppercase font-medium text-lg">
            Auto<span className="text-main">hunt</span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default LoggedInNabar;
