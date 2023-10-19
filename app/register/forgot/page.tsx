/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@mui/material";
import Footer from "@/components/footer/Footer";
export default function Forgot() {
  return (
    <div className="w-full max-w-7xl relative h-screen mx-auto flex">
      <div className="w-full flex flex-col">
        <Link href="/register" className="absolute top-0 left-0 p-4">
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
        <div className="flex flex-col items-center justify-center absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h5 className="text-lg lg:text-3xl text-center">Forgot password</h5>
          <div className="mt-12">
            <p>
              Enter your email and we'll send you a link to reset your password.
            </p>
          </div>
          <div className="flex flex-col gap-y-5 w-full mt-10">
            <label className="font-bold flex flex-col w-full">
              E-mail
              <input
                type="text"
                id="email"
                placeholder="example@email.com"
                className="p-2 rounded-md w-3/4 max-w-3xl mt-2 bg-[#a3a3a33e]"
              />
            </label>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#b78d20",
                transition: "scale .5s",
                margin:"auto",
                width:"fit-content",
                ":hover": {
                  scale: "1.1",
                  backgroundColor: "#b78d20",
                },
              }}
            >
              Reset password
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
