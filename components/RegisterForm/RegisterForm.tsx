import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { db } from '../../firebase';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from '@mui/material';
import { LabelInputExtends } from '@/types/InputTypes';

const LabelInput = ({
  title,
  name,
  type,
  placeholder,
  value,
  onChange,
}: LabelInputExtends) => {
  return (
    <label className="font-bold flex flex-col w-3/4 max-w-xl">
      {title}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
        className="p-2 rounded-md w-full mt-2"
      />
    </label>
  );
};

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setErrorMessage] = useState('');
  const [info, setInfo] = useState(false);
  const auth = getAuth();
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleSubmitRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;

      const usersCollectionRef = collection(db, 'users');
      const userDocRef = doc(usersCollectionRef, user.uid);

      await setDoc(userDocRef, {
        name: name,
        surname: surname,
        email: email,
        password: password,
      });

      setInfo(true);
    } catch (error) {
      const errorMessage = (error as Error).message;
      setErrorMessage(errorMessage);
    }
  };
  const toggleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };
  return (
    <form
      action="signup"
      onSubmit={handleSubmitRegister}
      className="flex flex-row flex-wrap items-center justify-center gap-2 w-full"
    >
      <LabelInput
        title="Name"
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <LabelInput
        title="Surname"
        name="surname"
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <LabelInput
        title="E-mail"
        name="email"
        type="email"
        placeholder="example@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="font-bold flex flex-col w-3/4 max-w-xl relative">
        Password
        <input
          required
          name="password"
          type={visiblePassword ? 'text' : 'password'}
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded-md w-full mt-2"
        />
        <button
          onClick={toggleVisiblePassword}
          className="absolute top-1/2 -right-10"
        >
          {visiblePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      </label>
      <div>
        <input type="checkbox" required />
        <p>
          I acknowledge that I have read and accept the Terms and Conditions,
          and understand that AutoHunt Group Ltd. will process my personal data
          in accordance with the Privacy Policy and the Policy on Cookies and
          Similar Technologies, which I have read.
        </p>
      </div>
      {info && (
        <div>
          <div>
            <button onClick={() => setInfo(false)}>
              <AiOutlineCloseCircle />
            </button>
          </div>

          <p>You have been registered! Now go to the Login tab and log in.</p>
        </div>
      )}
      <Button
        variant="outlined"
        type="submit"
        sx={{
          letterSpacing: '1px',
          fontWeight: 'bold',
          fontSize: '10px',
          color: '#b78d20',
          alignSelf: 'center',
          borderColor: '#b78d20',
          transition: 'scale .5s',
          ':hover': {
            scale: '1.1',
            background: 'none',
            borderColor: '#b78d20',
          },
        }}
      >
        Create account
      </Button>
    </form>
  );
};

export default RegisterForm;
