import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./banner.module.css";
// Banner component
const Banner = ({ images }: { images: string[] }) => {

  return (
    <div className={styles.image}>
        <Carousel>
          {images.map((image, index) => (
            <div key={index} className={styles.container}>
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
