import React from "react";
import { BsFillTelephoneFill, BsFillFlagFill } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import styles from "./SellerDetails.module.css";

const SellerDetails = ({ car, formattedNumber, handleReportClick }) => {
  return (
    <div className={styles.infoSeller}>
      <p className={styles.title}>About the seller</p>
      <div className={styles.seller}>
        <p>
          Dealer <span>{car?.seller_name}</span>
        </p>
        <p>
          <BsFillTelephoneFill />{" "}
          <span>
            <a href={"tel:" + car?.seller_phone}>{formattedNumber}</a>
          </span>
        </p>
        <p>
          <FaMapPin /> <span>{car?.seller_map}</span>
        </p>
      </div>
      <button className={styles.report} onClick={handleReportClick}>
        <BsFillFlagFill /> <span>Report </span>
      </button>
    </div>
  );
};

export default SellerDetails;
