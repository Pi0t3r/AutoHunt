'use client';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import { useUserContext } from '../../context/UserContext';
import LoggedInNabar from './LoggedInNavbar';
export default function Navbar() {
  const { user } = useUserContext();

  if (user) {
    return <LoggedInNabar />;
  }

  return (
    <header className="fixed bg-[#515151f0] inset-x-0 top-0 flex justify-between p-5 z-[51] items-center max-w-7xl mx-auto">
      <nav>
        <div>
          <span className="text-white">
            <Link href="/register">
              <AiOutlineUser className="w-8 h-8" />
            </Link>
          </span>
        </div>
        <Link href="/" className="text-white no-underline">
          <h1 className="uppercase font-medium text-lg">
            Auto<span className="text-main">hunt</span>
          </h1>
        </Link>
      </nav>
    </header>
  );
}
