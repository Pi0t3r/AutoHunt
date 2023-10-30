import { signInWithEmailAndPassword } from '@firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { useUserContext } from '../../context/UserContext';
import { auth } from '../../firebase';
import { Button } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { setUser } = useUserContext();
  const router = useRouter();

  const handleSubmitLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      setUser({
        email: email,
        name: '',
        surname: '',
        password: '',
        profileImage: '',
      });

      router.push('/');
    } catch (error) {
      const errorCode = (error as any).code;

      let errorMessage = 'An error occurred during login.';

      switch (errorCode) {
        case 'auth/user-not-found':
          errorMessage = 'User not found. Please check your email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password. Please try again.';
          break;
        default:
          errorMessage = 'An error occurred during login';
      }
      setErrorMessage(errorMessage);
    }
  };
  const toggleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };
  return (
    <form
      action="login"
      onSubmit={handleSubmitLogin}
      className="flex flex-col items-center justify-center gap-2 w-full"
    >
      <label className="font-bold flex flex-col w-1/2">
        Email
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className={`p-2 rounded-md w-full mt-2 ${
            errorMessage === 'User not found. Please check your email.'
              ? 'border-red-500 border-2 border-solid'
              : ''
          }`}
        />
      </label>
      <label className="font-bold flex flex-col my-2 w-1/2 relative">
        Password
        <input
          name="password"
          type={visiblePassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          className={`p-2 rounded-md w-full mt-2 ${
            errorMessage === 'Incorrect password. Please try again.'
              ? 'border-red-500 border-2 border-solid'
              : ''
          }`}
        />
        <button
          onClick={toggleVisiblePassword}
          className="absolute -right-10 top-1/2"
        >
          {visiblePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      </label>

      <Button
        variant="text"
        sx={{
          letterSpacing: '1px',
          fontWeight: 'bold',
          fontSize: '10px',
          color: '#b78d20',
          alignSelf: 'center',
          transition: 'scale .5s',
          ':hover': { scale: '1.1', background: 'none' },
        }}
      >
        <Link href="/register/forgot">
          <span>Forgot password?</span>
        </Link>
      </Button>
      <Button
        variant="outlined"
        type="submit"
        sx={{
          alignSelf: 'center',
          transition: 'scale .5s',
          borderColor: '#b78d20',
          color: '#b78d20',
          ':hover': { scale: '1.2', borderColor: '#b67c10' },
        }}
      >
        Log in
      </Button>
      {errorMessage && (
        <p className="text-red-500 text-center w-full my-2">{errorMessage}</p>
      )}
    </form>
  );
};

export default LoginForm;
