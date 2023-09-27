import Image from "next/image";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./banner.module.css";
// Banner component
const Banner = ({ images }: { images: string[] }) => {
  // State to track whether the heart icon is clicked
  const [clickedHeart, setClickedHeart] = useState(false);
  // Function to handle heart icon click
  const handleClickHeart = () => {
    setClickedHeart(!clickedHeart);
  };

  return (
    <div className={styles.image}>
      <button className={styles.heart} onClick={handleClickHeart}>
        {clickedHeart ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
      <div>
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
    </div>
  );
};

export default Banner;
