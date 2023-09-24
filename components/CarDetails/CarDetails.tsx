import React from "react";
import styles from "./CarDetails.module.css";
import { carDataProps } from "@/types/myTypes";
const CarDetails = ({ data }: carDataProps) => {
  return (
    <div className={styles.infoCar}>
      <p className={styles.title}>Details</p>
      <dl>
        <dt>Vehicle Brand</dt>
        <dd>{data.brand}</dd>
        <dt>Vehicle Model</dt>
        <dd>{data.model}</dd>
        <dt>Vehicle Generation</dt>
        <dd>{data.generation}</dd>
        <dt>Vehicle Version</dt>
        <dd>{data.version}</dd>
        <dt>Vehicle Engine</dt>
        <dd>{data.engine}</dd>
      </dl>
    </div>
  );
};

export default CarDetails;
