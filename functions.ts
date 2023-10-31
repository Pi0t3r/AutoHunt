import { auth } from '@/firebase';
import { SetUserFunction } from './types/UserTypes';
export const handleLogout = async (setUser: SetUserFunction) => {
  try {
    await auth.signOut();
    setUser(null);
    localStorage.removeItem('user');
    window.location.href = '/';
  } catch (error) {
    console.error(error);
  }
};
