import React, { useState, useEffect } from "react";
import styles from "./CarDetails.module.css";
import { useParams } from "next/navigation";
import { fetchAdverts } from "@/api/getAdvertDetails";
const CarDetails = () => {
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
    <div className={styles.infoCar}>
      <p className={styles.title}>Details</p>
      <dl>
        <dt>Vehicle Brand</dt>
        <dd>{showData.brand}</dd>
        <dt>Vehicle Model</dt>
        <dd>{showData.model}</dd>
        <dt>Vehicle Generation</dt>
        <dd>{showData.generation}</dd>
        <dt>Vehicle Version</dt>
        <dd>{showData.version}</dd>
        <dt>Vehicle Engine</dt>
        <dd>{showData.engine}</dd>
      </dl>
    </div>
  );
};

export default CarDetails;
