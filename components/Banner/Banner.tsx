import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannerProps } from "@/types";

const Banner = ({ images }: BannerProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(true);
  };

  const handleReduceImage = () => {
    setIsClicked(false);
  };

  return (
    <div
      className={` ${
        isClicked
          ? "bg-black/80 absolute inset-0 flex items-center justify-center transition duration-300 ease-out flex-col z-50"
          : ""
      }`}
    >
      <div
        className={`${
          isClicked
            ? "block absolute top-0 right-0 p-5 transition duration-300 ease-out text-white"
            : "hidden"
        }`}
        onClick={handleReduceImage}
      >
        <AiOutlineClose />
      </div>
      <Carousel className="w-full">
        {images.map((image, index) => (
          <div key={index} onClick={handleImageClick}>
            <Image
              src={image}
              alt={`Image ${index}`}
              width={300}
              height={250}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
