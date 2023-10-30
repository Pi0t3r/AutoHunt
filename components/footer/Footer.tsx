import { ReactNode } from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { ONE_VALUE } from '@/constants';
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
}: {
  children: ReactNode;
  justify: string;
  width?: string;
}) => {
  return (
    <ul
      className={`flex flex-row flex-wrap justify-${justify} items-center gap-3 my-4 w-3/4 mx-auto`}
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
            {value}
          </li>
        ))}
      </List>
      <List justify="center">
        {footerLinks.map(({ value }, index) => (
          <li key={index}>
            <span>
              {value}
              {index < footerLinks.length - ONE_VALUE && ' | '}
            </span>
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
