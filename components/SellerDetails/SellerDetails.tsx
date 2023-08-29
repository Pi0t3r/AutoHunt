import React, { useState, useEffect } from "react";
import { BsFillTelephoneFill, BsFillFlagFill } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import styles from "./sellerDetails.module.css";
import { useParams } from "next/navigation";
import { fetchAdverts } from "@/api/getAdvertDetails";

// interface SellerDetailsProps {
//   car:
//     | {
//         seller_name: string;
//         seller_phone: string;
//         seller_map: string;
//       }
//     | undefined;
//   formattedNumber: string;
//   handleReportClick: () => void;
// }

const SellerDetails = () => {
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
    <div className={styles.infoSeller}>
      <p className={styles.title}>About the seller</p>
      <div className={styles.seller}>
        <p>{/* Dealer <span>{car?.seller_name}</span> */}</p>
        <p>
          <BsFillTelephoneFill />{" "}
          <span>
            <a href={`tel: ${showData.phone} `}>{showData.phone}</a>
          </span>
        </p>
        <p>{/* <FaMapPin /> <span>{car?.seller_map}</span> */}</p>
      </div>
     
    </div>
  );
};

export default SellerDetails;
