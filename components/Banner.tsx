import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BannerProps } from '@/types/ComponentTypes';
import clsx from 'clsx';
import { BASIC_IMAGE_SIZE, CLICKED_IMAGE_SIZE } from '@/constants';
export const Banner: React.FC<BannerProps> = ({ images }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(true);
  };

  const handleReduceImage = () => {
    setIsClicked(false);
  };

  const buttonClasses = clsx({
    'block absolute top-0 right-0 p-5 m-5 transition duration-300 ease-out text-white z-[101] cursor-pointer hover:text-[#111]':
      isClicked,
    hidden: !isClicked,
  });

  return (
    <div
      className={` ${
        isClicked
          ? 'bg-black/80 absolute inset-0 flex items-center justify-center transition duration-300 ease-out flex-col z-[100]'
          : 'w-full md:w-1/2'
      }`}
    >
      <div className={buttonClasses} onClick={handleReduceImage}>
        <AiOutlineClose />
      </div>
      <Carousel
        className={`max-w-7xl ${isClicked ? 'cursor-auto' : 'cursor-pointer'}`}
      >
        {images.map((image, index) => (
          <div key={index} onClick={handleImageClick}>
            <Image
              src={image}
              alt={`Image ${index}`}
              width={isClicked ? CLICKED_IMAGE_SIZE : BASIC_IMAGE_SIZE}
              height={isClicked ? CLICKED_IMAGE_SIZE : BASIC_IMAGE_SIZE}
              className={`${isClicked ? 'max-w-[400px]' : ''} max-h-[600px] ` }
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
