import React from "react";
import styles from "./CarDetails.module.css";
import { carDataProps } from "@/types/myTypes";
const CarDetails = ({ data }: carDataProps) => {
  return (
    <div className={styles.infoCar}>
      <p className={styles.title}>Details</p>
      <dl>
        <p>Price {data.price}</p>
        <dt>Vehicle Body</dt>
        <dd>{data.body}</dd>
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
        <dt>Drive</dt>
        <dd>{data.drive}</dd>
        <dt>Gearbox</dt>
        <dd>{data.gearbox}</dd>
        <dt>Mileage</dt>
        <dd>{data.mileage}</dd>
        <dt>Yearbook</dt>
        <dd>{data.yearbook}</dd>
        <dt>First register</dt>
        <dd>{data.firstRegister}</dd>
        <dt>Fuel</dt>
        <dd>{data.fuel}</dd>
        <dt>VIN</dt>
        <dd>{data.vin}</dd>
      </dl>
      <p>created: {data.createAdvert}</p>
    </div>
  );
};

export default CarDetails;
