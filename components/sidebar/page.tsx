import { useUserContext } from '@/context/UserContext';
import { auth } from '@/firebase';
import useUserData from '@/useUserData';
import ProfileImage from '../profileImage/Page';
import { Navigation } from '../navbar/Navigation';

const Sidebar = () => {
  const { userData } = useUserData();
  const { userName, userSurname, userMail } = userData;
  const { setUser } = useUserContext();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      localStorage.removeItem('user');
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
      <nav className="h-52 mt-10">
        <Navigation
        scale='scale-y'
          gap="y"
          onClick={handleLogout}
          flex="col"
          color="#b78d20"
          margin="my"
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
