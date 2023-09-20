/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./page.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchAdverts } from "@/api/getAdvertDetails";
import Banner from "@/components/banner/Banner";
import CarDetails from "@/components/carDetails/CarDetails";
import SellerDetails from "@/components/sellerDetails/SellerDetails";
import ReportForm from "@/components/reportForm/ReportForm";
import { BsFillFlagFill } from "react-icons/bs";
function Advert() {
  const [reportVisible, setReportVisible] = useState(false);
  const handleReportClick = () => {
    setReportVisible(true);
  };
  const [advertData, setAdvertData] = useState<any[]>([]);
  const params = useParams();
  useEffect(() => {
    const fetchOffers = async () => {
      const adverts = await fetchAdverts();
      setAdvertData(adverts);
    };
    fetchOffers();
  }, []);

  if (advertData.length === 0) {
    return <p>Loading ...</p>;
  }
  const showData = advertData.find((car) => car.id === params.id);
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <Link href={"/"}>
          <BsFillArrowLeftCircleFill />
        </Link>
      </div>
      <div className={styles.offer}>
        <Banner images={showData.images} />
        <CarDetails data={showData} />
        <SellerDetails data={showData} />
        <div>
          <button className={styles.report} onClick={handleReportClick}>
            <BsFillFlagFill /> <span>Report </span>
          </button>
        </div>
      </div>
      {reportVisible && <ReportForm setReportVisible={setReportVisible} />}
    </div>
  );
}
export default Advert;
