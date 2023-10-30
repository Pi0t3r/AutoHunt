import AddBoxIcon from '@mui/icons-material/AddBox';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import { Button } from '@mui/material';
import Link from 'next/link';
import { NavigationProps } from '@/types/ComponentTypes';
const buttonLink = [
  {
    title: 'Add new advert',
    link: '/create',
    icon: <AddBoxIcon />,
  },
  {
    title: 'Profile',
    link: '/profile',
    icon: <AiOutlineUser />,
  },
  {
    title: 'My advert',
    link: '/myAdvert',
    icon: <MdOutlineLocalOffer />,
  },
];

export const Navigation = ({
  flex,
  gap,
  onClick,
  color,
  margin,
}: NavigationProps) => {
  return (
    <ul
      className={`flex flex-${flex} gap-${gap}-3 items-center justify-between w-full h-full `}
    >
      {buttonLink.map(({ title, link, icon }, index) => (
        <li
          key={index}
          className={`hover:scale-110 transition-all hover:${margin}-2`}
        >
          <Link href={link}>
            <Button
              variant="outlined"
              size="small"
              startIcon={icon}
              sx={{
                letterSpacing: '1px',
                fontWeight: 'medium',
                fontSize: '10px',
                borderColor: '#b78d20',
                color: { color },
                ':hover': { borderColor: '#a67c10', background: 'none' },
              }}
            >
              {title}
            </Button>
          </Link>
        </li>
      ))}
      <li className="hover:scale-110 transition-all hover:mx-2">
        <Button
          variant="text"
          size="small"
          onClick={onClick}
          startIcon={<BiExit />}
          sx={{
            textDecoration: 'underline',
            color: '#b78d20',
          }}
        >
          Logout
        </Button>
      </li>
    </ul>
  );
};
