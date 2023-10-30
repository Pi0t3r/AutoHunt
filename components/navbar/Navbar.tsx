'use client';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import { useUserContext } from '../../context/UserContext';
import LoggedInNabar from './LoggedInNavbar';
import IconButton from '@mui/material/IconButton';
export default function Navbar() {
  const { user } = useUserContext();

  if (user) {
    return <LoggedInNabar />;
  }

  return (
    <header className="fixed bg-[#515151f0] inset-x-0 top-0 p-5 z-[51] items-center max-w-7xl mx-auto">
      <nav className="flex justify-between items-center">
        <Link href="/register">
          <IconButton
            sx={{
              color: 'white',
            }}
          >
            <AiOutlineUser />
          </IconButton>
        </Link>

        <Link href="/" className="text-white no-underline">
          <h1 className="uppercase font-medium text-lg">
            Auto<span className="text-main">hunt</span>
          </h1>
        </Link>
      </nav>
    </header>
  );
}
