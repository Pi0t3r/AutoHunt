/* eslint-disable react/no-unescaped-entities */
import { Button } from '@mui/material';
import Link from 'next/link';
export default function Forgot() {
  return (
    <main className="mt-20">
      <header>
        <nav>
          <Link href="/register" className="p-4">
            <Button
              variant="outlined"
              sx={{
                borderColor: '#b78d20',
                color: '#b78d20',
                textTransform: 'lowercase',

                ':hover': { borderColor: '#a67c10', color: '#b78d20' },
              }}
            >
              Back
            </Button>
          </Link>
        </nav>
        <h5 className="text-lg lg:text-3xl text-center font-bold text-main">
          Forgot password
        </h5>
      </header>
      <section className="flex flex-col items-center justify-center p-5">
        <div className="mt-12">
          <p>
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>
        <div className="flex flex-col gap-y-5 w-full items-center justify-center mt-10">
          <label className="font-bold flex flex-col w-60">
            E-mail
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="p-2 rounded-md w-full mt-2 bg-[#a3a3a33e]"
            />
          </label>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#b78d20',
              transition: 'scale .5s',
              margin: 'auto',
              width: 'fit-content',
              ':hover': {
                scale: '1.1',
                backgroundColor: '#b78d20',
              },
            }}
          >
            Reset password
          </Button>
        </div>
      </section>
    </main>
  );
}
