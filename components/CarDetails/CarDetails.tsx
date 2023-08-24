import React, { useState, useEffect } from "react";
import styles from "./CarDetails.module.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

interface CarDetailsProps {
  advertId: string | string[] | undefined;
}

const CarDetails: React.FC<CarDetailsProps> = ({ advertId }) => {
  const [advertData, setAdvertData] = useState<any | null>(null);

  useEffect(() => {
    if (typeof advertId === "string") {
      const fetchAdvertDetails = async () => {
        try {
          const advertDocRef = doc(db, "adverts", advertId);
          const advertDoc = await getDoc(advertDocRef);
          if (advertDoc.exists()) {
            setAdvertData(advertDoc.data());
          } else {
            console.log("Document does not exists");
          }
        } catch (err) {
          console.error("My error: ", err);
        }
      };
      fetchAdvertDetails();
    }
  }, [advertId]);
  const showDoc = () => {
    console.log(doc(db, "adverts", advertId));
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
