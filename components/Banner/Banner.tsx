import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Banner.module.css";
import Image from "next/image";
type CarImage = string;

interface BannerProps {
  carImages: CarImage[] | undefined;
}

const Banner = ({ carImages }: BannerProps) => {
  const [clickedHeart, setClickedHeart] = useState(false);
  const handleClickHeart = () => {
    setClickedHeart(!clickedHeart);
  };

  return (
    <div className={styles.image}>
      <Carousel showIndicators={false}>
        {carImages?.images.map((image: CarImage, index: number) => (
          <Image
            className={styles.image}
            src={image}
            alt={`Car Image ${index + 1}`}
            key={index}
          />
        ))}
      </Carousel>
      <button className={styles.heart} onClick={handleClickHeart}>
        {clickedHeart ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </div>
  );
};

export default Banner;
