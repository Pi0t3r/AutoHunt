import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Box from "@mui/material/Box";
// Banner component
const Banner = ({ images }: { images: string[] }) => {
  return (
    <Box>
      <Carousel>
        {images.map((image, index) => (
          <Box key={index}>
            <Image
              src={image}
              alt={`Image ${index}`}
              width={300}
              height={250}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;
