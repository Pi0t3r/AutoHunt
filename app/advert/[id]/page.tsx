/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname } from "next/navigation";
import advert from "@/data/advertisement";
import styles from "./page.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import Banner from "@/components/banner/Banner";
import CarDetails from "@/components/carDetails/CarDetails";
import SellerDetails from "@/components/sellerDetails/SellerDetails";
import ReportForm from "@/components/reportForm/ReportForm";


function Advert() {
  const pathname = usePathname();
  const carId = Number(pathname.split("/").pop());
  const car = advert.find((car) => car?.id === carId);
  const phoneNumber = car?.seller_phone || "";
  const formattedNumber = phoneNumber.replace(/(\d{3})(?=\d)/g, "$1 ");
  const [reportVisible, setReportVisible] = useState(false);

  const handleReportClick = () => {
    setReportVisible(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <Link href={"/"}>
          <BsFillArrowLeftCircleFill />
        </Link>
      </div>
      <div className={styles.offer}>
        <Banner carImages={car?.images} />
        <CarDetails advertId={carId} />
        <SellerDetails
          car={car}
          formattedNumber={formattedNumber}
          handleReportClick={handleReportClick}
        />
      </div>
      {reportVisible && <ReportForm setReportVisible={setReportVisible} />}
    </div>
  );
}

export default Advert;
