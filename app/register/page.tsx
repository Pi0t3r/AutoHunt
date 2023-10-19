"use client";
import LoginForm from "@/components/loginForm/LoginForm";
import RegisterForm from "@/components/registerForm/RegisterForm";
import { ActiveButton } from "@/types/myTypes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";



export default function Register() {
  const [activeButton, setActiveButton] = useState<ActiveButton>("login");
  useEffect(() => {}, [activeButton]);
  const handleButtonClick = (button: ActiveButton) => {
    setActiveButton(button);
  };

  return (
    <div>
      <Link href="/" className="absolute top-0 left-0 p-4">
        <Button
          variant="outlined"
          sx={{
            borderColor: "#b78d20",
            color: "#b78d20",
            textTransform: "lowercase",

            ":hover": { borderColor: "#a67c10", color: "#b78d20" },
          }}
        >
          Back
        </Button>
      </Link>
      <div className="flex flex-col justify-center items-center mt-20 bg-slate-200 w-full max-w-xl mx-auto rounded-md p-4">
        <h1 className="uppercase font-medium text-2xl"><span className="font-bold text-main">Join us</span> to continue</h1>
        <div className="flex flex-row justify-between w-full max-w-xl my-10">
          <button
            className={`${
              activeButton === "login"
                ? "text-main border-solid border-2 border-b-main"
                : "text-[#a3a3a3]"
            } uppercase w-2/5 text-2xl text-left font-medium hover:scale-110 transition`}
            onClick={() => handleButtonClick("login")}
          >
            Log in
          </button>
          <button
            className={`${
              activeButton === "signup"
                ? "text-main border-solid border-2 border-b-main"
                : "text-[#a3a3a3]"
            } text-2xl uppercase w-2/5 text-left font-medium  hover:scale-110 transition`}
            onClick={() => handleButtonClick("signup")}
          >
            Sign up
          </button>
        </div>
        {activeButton === "login" && <LoginForm />}
        {activeButton === "signup" && <RegisterForm />}
      </div>
    </div>
  );
}
