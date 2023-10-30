import { useUserContext } from '@/context/UserContext';
import { auth } from '@/firebase';
import { LinksProps } from '@/types/ComponentTypes';
import useUserData from '@/useUserData';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import Sidebar from '../sidebar/Page';

const buttonLink = [
  {
    title: 'Add new advert',
    link: '/create',
  },
  {
    title: 'Profile',
    link: '/profile',
  },
  {
    title: 'My advert',
    link: '/myAdvert',
  },
];

const LoggedInNabar = () => {
  const { userData } = useUserData();
  const { userName, userSurname } = userData;
  const { setUser } = useUserContext();
  const [visible, setVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      localStorage.removeItem('user');
    } catch (error) {
      console.error(error);
    }
  };
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
      <p className="hidden md:block text-white">
        Hello,
        <span className="text-main font-medium italic">
          {' '}
          {userName} {userSurname}
        </span>
      </p>
      <nav className='hidden md:block'>
        <ul className="flex flex-row gap-x-3 items-center justify-center ml-6">
          {buttonLink.map(({ title, link }, index) => (
            <li
              key={index}
              className="hover:scale-110 transition-all hover:mx-2"
            >
              <Link href={link}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                    fontSize: '10px',
                    borderColor: '#b78d20',
                    color: '#b78d20',
                    ':hover': { borderColor: '#a67c10' },
                  }}
                >
                  {title}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
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
      <>
        <Link href="/" className="text-white no-underline">
          <h1 className="uppercase font-medium text-lg">
            Auto<span className="text-main">hunt</span>
          </h1>
        </Link>
      </>
    </header>
  );
};

export default LoggedInNabar;
