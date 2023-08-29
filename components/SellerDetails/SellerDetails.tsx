import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import styles from "./sellerDetails.module.css";

interface SellerDetailsProps {
  sellerName: string;
  sellerSurname: string;
  phone: string;
  sellerPlace: string;
}

interface iData {
  data: SellerDetailsProps;
}

const SellerDetails = ({ data }: iData) => {
  return (
    <div className={styles.infoSeller}>
      <p className={styles.title}>About the seller</p>
      <div className={styles.seller}>
        <p>
          Dealer{" "}
          <span>
            {data.sellerName} {data.sellerSurname}
          </span>
        </p>
        <p>
          <BsFillTelephoneFill />{" "}
          <span>
            <a href={`tel: ${data.phone} `}>{data.phone}</a>
          </span>
        </p>
        <p>
          <FaMapPin /> <span>{data.sellerPlace}</span>
        </p>
      </div>
    </div>
  );
};

export default SellerDetails;
