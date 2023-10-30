'use client';
import LoginForm from '@/components/loginForm/LoginForm';
import RegisterForm from '@/components/registerForm/RegisterForm';
import { ActiveButton } from '@/types/ComponentTypes';
import { useEffect, useState } from 'react';

export default function Register() {
  const [activeButton, setActiveButton] = useState<ActiveButton>('login');
  useEffect(() => {}, [activeButton]);
  const handleButtonClick = (button: ActiveButton) => {
    setActiveButton(button);
  };
  return (
    <main className="mt-20">
      <header className="relative h-20">
        <h2 className="uppercase font-medium text-2xl absolute bottom-0 left-1/2 -translate-x-1/2">
          <span className="font-bold text-main">Join us</span> to continue
        </h2>
      </header>
      <section className="flex flex-col justify-center items-center bg-slate-200 w-full mx-auto rounded-md p-4">
        <div className="flex flex-row justify-between w-full my-10">
          <button
            className={`${
              activeButton === 'login'
                ? 'text-main border-solid border-2 border-b-main'
                : 'text-[#a3a3a3]'
            } uppercase w-2/5 text-2xl text-left font-medium hover:scale-110 transition`}
            onClick={() => handleButtonClick('login')}
          >
            Log in
          </button>
          <button
            className={`${
              activeButton === 'signup'
                ? 'text-main border-solid border-2 border-b-main'
                : 'text-[#a3a3a3]'
            } text-2xl uppercase w-2/5 text-left font-medium  hover:scale-110 transition`}
            onClick={() => handleButtonClick('signup')}
          >
            Sign up
          </button>
        </div>
        {activeButton === 'login' && <LoginForm />}
        {activeButton === 'signup' && <RegisterForm />}
      </section>
    </main>
  );
}
