import React, { useState, useEffect } from "react";
import styles from "./CarDetails.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

interface CarDetailsProps {
  carId: number;
}
const CarDetails: React.FC<CarDetailsProps> = ({ carId }) => {
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
  if (advertData.length === 0) {
    return <p>Loading...</p>;
  }
  const advert = advertData.find((advert) => advert.id === carId);
  
  if (!advert) {
    return <p>Advertisement not found</p>;
  }
  const showDoc = () => {
    console.log(advertData.find((advert) => advert.id === carId))
  };
  return (
    <div className={styles.infoCar}>
      <p className={styles.title}>Details</p>
      <button onClick={showDoc}>click</button>
      <dl>
        <dt>Vehicle brand</dt>
        <dd>{advert.brand}</dd>

        <dt>Vehicle model</dt>
        <dd>{advert.model}</dd>

        <dt>Vehicle generation</dt>
        <dd>{advert.generation}</dd>

        <dt>Version</dt>
        <dd>{advert.version}</dd>

        <dt>Engine</dt>
        <dd>{advert.engine}</dd>
      </dl>
    </div>
  );
};

export default CarDetails;
