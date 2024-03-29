import { ReactNode } from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { ONE_VALUE } from '@/constants';
import IconButton from '@mui/material/IconButton';
const footerLinks = [
  {
    value: 'Privacy Policy',
  },
  {
    value: 'Terms & Conditions',
  },
  {
    value: 'Feedback',
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
    value: (
      <>
        Customer service: <a href="tel: +48 123 321 231"> +48 123 321 231</a>
      </>
    ),
  },
  {
    value: 'help@autohunt.com',
  },
  {
    value: 'Mon - Fri, 08:00 - 17:00',
  },
];
const List = ({
  children,
  justify,
  divide,
}: {
  children: ReactNode;
  justify: string;
  width?: string;
  divide?: string;
}) => {
  return (
    <ul
      className={`flex flex-row flex-wrap justify-${justify} items-center gap-3 my-4 w-3/4 mx-auto ${divide}`}
    >
      {children}
    </ul>
  );
};
export default function Footer() {
  return (
    <div className="bg-black text-white p-5">
      <List justify="between">
        {socialMedia.map(({ value }, index) => (
          <li
            key={index}
            className="hover:scale-125 transition duration-300 cursor-pointer"
          >
            <IconButton sx={{ color: '#b78d20' }}>{value}</IconButton>
          </li>
        ))}
      </List>
      <List justify="center" divide='divide-x'>
        {footerLinks.map(({ value }, index) => (
          <li
            key={index}
            className="hover:scale-110 cursor-pointer transition duration-300 px-2"
          >
            <span>{value}</span>
          </li>
        ))}
      </List>
      <List justify="center">
        {helpService.map(({ value }, index) => (
          <li key={index}>{value}</li>
        ))}
      </List>
    </div>
  );
}
