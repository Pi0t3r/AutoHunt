import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="block">
      <div className="flex flex-row flex-wrap justify-around p-5">
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
        <BsYoutube />
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        <span>Privacy Policy |</span>
        <span> Terms & Conditions |</span>
        <span> Feedback</span>
      </div>
      <div className="flex flex-column flex-nowrap items-center mt-2 pb-4">
        <span>Customer service:</span>
        <span>+48 123 321 231</span>
        <span>help@autohunt.com</span>
        <span>Mon - Fri, 08:00 - 17:00</span>
      </div>
    </div>
  );
}
