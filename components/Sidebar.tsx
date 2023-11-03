import { useUserContext } from '@/context';
import { handleLogout } from '@/functions';
import useUserData from '@/useUserData';
import { Navigation } from './navbar/Navigation';
import ProfileImage from './ProfileImage';

export const Sidebar = () => {
  const { userData } = useUserData();
  const { userName, userSurname, userMail } = userData;
  const { setUser } = useUserContext();
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
      <nav className="h-52 mt-10">
        <Navigation
          gap="y"
          onClick={() => handleLogout(setUser)}
          flex="col"
          color="#b78d20"
          margin="my"
        />
      </nav>
    </aside>
  );
};
