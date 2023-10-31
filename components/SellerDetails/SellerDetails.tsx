import { SellerDataProps } from '@/types/SellerTypes';
import { InfoProps } from '@/types/ComponentTypes';
import { FaMapPin } from 'react-icons/fa';
import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';

const Info = ({ title, value }: InfoProps) => {
  return (
    <li className="flex items-center bg-gray-100 border-2 m-2 p-4 rounded-md shadow-lg text-main font-medium">
      {title} <span className="text-black font-normal ml-4">{value}</span>
    </li>
  );
};

export const SellerDetails = ({ data }: SellerDataProps) => {
  return (
    <div className="bg-gray-300 pt-2">
      <h4 className="text-center font-medium text-lg">About the seller</h4>
      <ul className="flex flex-row flex-wrap justify-center">
        <Info title={<AiOutlineUser />} value={data.sellerName} />
        <Info title={<FaMapPin />} value={data.sellerPlace} />
        <li className="flex items-center bg-gray-100 border-2 m-2 p-4 rounded-md shadow-lg text-main font-medium">
          <AiOutlinePhone />{' '}
          <span className="text-black font-normal ml-4">
            <a href={`tel: ${data.phone} `}>{data.phone}</a>
          </span>
        </li>
      </ul>
    </div>
  );
};


