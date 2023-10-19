import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="flex flex-row flex-wrap gap-2 justify-center bg-black text-white">
      <div className="flex flex-row flex-wrap justify-around p-5 w-full max-w-56">
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
        <BsYoutube />
      </div>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-56 gap-x-1.5">
        <span>Privacy Policy</span>|<span>Terms & Conditions</span>|
        <span>Feedback</span>
      </div>
      <div className="flex flex-column flex-wrap justify-center items-center gap-2 mt-2 pb-4">
        <span>
          Customer service: <a href="tel: +48 123 321 231"> +48 123 321 231</a>
        </span>
        <span>help@autohunt.com</span>
        <span>Mon - Fri, 08:00 - 17:00</span>
      </div>
    </div>
  );
}
