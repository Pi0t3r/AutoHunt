import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Banner.module.css";

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
            <div key={index}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
