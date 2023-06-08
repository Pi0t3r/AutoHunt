"use client";

import { usePathname } from "next/navigation";
import advert from "@/components/data/advertisement";
import styles from "./page.module.css";
import Image from "next/image";
import { BsFillTelephoneFill, BsFillChatDotsFill } from "react-icons/bs";
import { FaMapPin, FaUserAlt } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Advert() {
  const pathname = usePathname();
  const carId = Number(pathname.split("/").pop());
  const car = advert.find((car) => car.id === carId);

  return (
    <div className={styles.container}>
      <div className={styles.offer}>
        <div className={styles.image}>
          <Carousel key={car.id}>
            <Image
              src={car?.image1}
              width={350}
              height={350}
              alt={`${car.brand} ${car.model} ${car.version}`}
            />

            <Image
              src={car.image2}
              width={350}
              height={350}
              alt={`${car.brand} ${car.model} ${car.version}`}
            />

            <Image
              src={car.image3}
              width={350}
              height={350}
              alt={`${car.brand} ${car.model} ${car.version}`}
            />
            <Image
              src={car.image4}
              width={350}
              height={350}
              alt={`${car.brand} ${car.model} ${car.version}`}
            />
            <Image
              src={car.image5}
              width={350}
              height={350}
              alt={`${car.brand} ${car.model} ${car.version}`}
            />
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
            Yearbook <span>{car?.yearbook}</span>
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
            Color <span>{car?.color}</span>
          </p>
          <p>
            Color Type <span>{car?.color_type}</span>
          </p>
          <p>
            First Registration{" "}
            <span>
              {car?.day_register}/ {car?.month_register} / {car?.year_register}
            </span>
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
              Dealer <span>Wiktor</span>
            </p>
            <p>
              <BsFillTelephoneFill /> <span>604555789</span>
            </p>
            <p>
              <BsFillChatDotsFill /> <span>Very Efficiently responds</span>
            </p>
            <p>
              <FaMapPin />{" "}
              <span>Warszawska 33, 42-350 Koziegłowy, Śląskie</span>
            </p>
            <p>
              <FaUserAlt /> <span>The Seller from 2019</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advert;
