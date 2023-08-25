import React, { useState, useEffect } from "react";
import styles from "./CarDetails.module.css";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "@/firebase";

const CarDetails = () => {
  const [advertData, setAdvertData] = useState<any>(null);
  useEffect(() => {
    const fetchAdvertDetails = async () => {
      try {
        const advertDocRef = doc(db, "adverts");
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
  }, []);

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
