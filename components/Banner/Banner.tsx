import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Banner component
const Banner = ({ images }: { images: string[] }) => {
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle image click
  const handleImageClick = () => {
    setIsClicked(true); // Set 'isClicked' to true when the image is clicked
  };

  // Function to handle reducing the image view
  const handleReduceImage = () => {
    setIsClicked(false); // Set 'isClicked' back to false to reduce the image view
  };

  return (
    <div
      className={` ${
        isClicked
          ? "bg-black/80 absolute inset-0 flex items-center justify-center transition duration-300 ease-out flex-col z-50"
          : ""
      }`} // Conditional class for the full-screen view
    >
      <div
        className={`${
          isClicked
            ? "block absolute top-0 right-0 p-5 transition duration-300 ease-out text-white"
            : "hidden"
        }`} // Conditional class for the close button
        onClick={handleReduceImage}
      >
        {/* Close button with an 'X' icon */}
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
