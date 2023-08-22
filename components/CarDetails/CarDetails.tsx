import React, { useState, useEffect } from "react";
import styles from "./CarDetails.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

interface CarDetailsProps {
  advertId: number;
}

const CarDetails = () => {
  const [advertData, setAdvertData] = useState<any[]>([]);
  const fetchAdvert = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "adverts"));
      const adverts = querySnapshot.docs.map((doc) => doc.data());
      setAdvertData(adverts);
    } catch (error) {
      console.error("Błąd przy pobieraniu ogłoszeń: ", error);
    }
  };
  useEffect(() => {
    fetchAdvert();
  }, []);
  const showDoc = () => {
    console.log(advertData);
  };
  return (
    <div className={styles.infoCar}>
      <p className={styles.title}>Details</p>
      <button onClick={showDoc}>click</button>
      <dl>
        <dt>Vehicle brand</dt>
        <dd>{advertData.brand}</dd>

        <dt>Vehicle model</dt>
        <dd>{advertData.model}</dd>

        <dt>Vehicle generation</dt>
        <dd>{advertData.generation}</dd>

        <dt>Version</dt>
        <dd>{advertData.version}</dd>

        <dt>Engine</dt>
        <dd>{advertData.engine}</dd>
      </dl>
    </div>
  );
};

export default CarDetails;
