import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
const footerLinks = [
  {
    value: "Privacy Policy",
  },
  {
    value: "Terms & Conditions",
  },
  {
    value: "Feedback",
  },
];
const socialMedia = [
  {
    value: <BsFacebook />,
  },
  {
    value: <BsInstagram />,
  },
  {
    value: <BsTwitter />,
  },
  {
    value: <BsYoutube />,
  },
];
const helpService = [
  {
    value:""
  }
]
export default function Footer() {
  return (
    <div className="bg-black text-white p-5">
      <ul className="flex flex-row flex-wrap justify-between items-center gap-3">
        {socialMedia.map(({ value }, index) => (
          <li key={index} className="hover:scale-110 cursor-pointer">{value}</li>
        ))}
      </ul>
      <ul className="flex flex-row flex-wrap justify-center items-center gap-3">
        {footerLinks.map(({ value }, index) => (
          <span key={index}>
            {value}
            {index < footerLinks.length - 1 && " | "}
          </span>
        ))}
      </ul>
      <ul className="">
        <span>
          Customer service: <a href="tel: +48 123 321 231"> +48 123 321 231</a>
        </span>
        <span>help@autohunt.com</span>
        <span>Mon - Fri, 08:00 - 17:00</span>
      </ul>
    </div>
  );
}
