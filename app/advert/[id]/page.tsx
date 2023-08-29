/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./page.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";
import Banner from "@/components/banner/Banner";
import CarDetails from "@/components/carDetails/CarDetails";
import SellerDetails from "@/components/sellerDetails/SellerDetails";
import ReportForm from "@/components/reportForm/ReportForm";

function Advert() {
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
        {/* <Banner carImages={car?.images} /> */}

        <CarDetails />

        <SellerDetails />
        <div>
          {/* <button className={styles.report} onClick={handleReportClick}>
        <BsFillFlagFill /> <span>Report </span>
      </button> */}
        </div>
      </div>
      {reportVisible && <ReportForm setReportVisible={setReportVisible} />}
    </div>
  );
}
export default Advert;
