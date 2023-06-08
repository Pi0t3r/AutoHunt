/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import advert from "@/components/data/advertisement";
import styles from "./page.module.css";
import { BsFillTelephoneFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
function Advert() {
  const pathname = usePathname();
  const carId = Number(pathname.split("/").pop());
  const car = advert.find((car) => car?.id === carId);
  const phoneNumber = car?.seller_phone || "";
  const formattedNumber = phoneNumber.replace(/(\d{3})(?=\d)/g, "$1 ");
  return (
    <div className={styles.container}>
      <div>
        <Link href={"/"}>
          <BsFillArrowLeftCircleFill />
        </Link>
      </div>
      <div className={styles.offer}>
        <div className={styles.image}>
          <Carousel key={car?.id} showIndicators={false}>
            {car?.images.map((image, index) => (
              <img
                className={styles.image}
                src={image}
                alt={`${car?.brand} ${car?.model} ${car?.version}`}
                key={index}
              />
            ))}
          </Carousel>
        </div>
        <div className={styles.infoCar}>
          <p className={styles.title}>Details</p>
          <p>
            Vehicle brand <span>{car?.brand}</span>
          </p>
          <p>
            Vehicle model <span>{car?.model}</span>
          </p>
          <p>
            Vehicle generation <span>{car?.generation}</span>
          </p>
          <p>
            Version <span>{car?.version}</span>
          </p>
          <p>
            Yearbook <span>{car?.productionYear}</span>
          </p>
          <p>
            Mileage <span>{car?.mileage} km</span>
          </p>
          <p>
            Displacement capacity{" "}
            <span>
              {car?.capacity} cm<sup>3</sup>
            </span>
          </p>
          <p>
            Power <span>{car?.power}</span>
          </p>
          <p>
            Gearbox <span>{car?.gearbox}</span>
          </p>
          <p>
            Drive <span>{car?.drive}</span>
          </p>
          <p>
            Fuel type <span>{car?.fuel}</span>
          </p>
          <p>
            Damaged <span>{car?.isDamage ? "Yes" : "No"}</span>
          </p>

          <p>
            First Registration <span>{car?.registrationDate}</span>
          </p>
          <p>
            VIN <span>{car?.vin}</span>
          </p>
          <p>
            Status <span>{car?.status}</span>
          </p>
        </div>
        <div className={styles.infoSeller}>
          <p className={styles.title}>About the seller</p>
          <div className={styles.seller}>
            <p>
              Dealer <span>{car?.seller_name}</span>
            </p>
            <p>
              <BsFillTelephoneFill /> <span>{formattedNumber}</span>
            </p>
            <p>
              <FaMapPin /> <span>{car?.seller_map}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advert;
