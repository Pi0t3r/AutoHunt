import Image from "next/image";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./banner.module.css";

const Banner = ({ images }: { images: string[] }) => {
  const [clickedHeart, setClickedHeart] = useState(false);
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
              <Image src={image} alt={`Image ${index}`} width={300} height={250}/>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
