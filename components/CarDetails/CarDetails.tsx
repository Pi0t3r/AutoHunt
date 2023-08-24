import React, { useState, useEffect } from "react";
import styles from "./CarDetails.module.css";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "@/firebase";

interface CarDetailsProps {
  advertId: string | string[] | undefined;
}

const CarDetails: React.FC<CarDetailsProps> = ({ advertId }) => {
  const [advertData, setAdvertData] = useState<any>(null);
  useEffect(() => {
    const fetchAdvertDetails = async () => {
      try {
        const advertDocRef = doc(db, "adverts", advertId); // Użyj ID do odnalezienia dokumentu w Firebase
        const advertDoc = await getDoc(advertDocRef);
        if (advertDoc.exists()) {
          setAdvertData(advertDoc.data());
        } else {
          console.error("Document does not exist");
        }
      } catch (err) {
        console.error("Error fetching: ", err);
      }
    };
    fetchAdvertDetails();
  }, [advertId]);

  return (
    <div className={styles.infoCar}>
      <p className={styles.title}>Details</p>
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
