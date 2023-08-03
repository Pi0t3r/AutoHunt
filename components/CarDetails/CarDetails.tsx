import React from "react";
import styles from "./CarDetails.module.css";

interface iCarDetails {
  car:
    | {
        brand: string;
        model: string;
        generation: string;
        version: string;
        productionYear: number;
        mileage: number;
        engine: string;
        gearbox: string;
        drive: string;
        fuel: string;
        isDamage: boolean;
        registrationDate: string;
        vin: string;
        status: string;
      }
    | undefined;
}

const CarDetails = ({ car }: iCarDetails) => {
  return (
    <div className={styles.infoCar}>
      <p className={styles.title}>Details</p>
      <dl>
        <dt>Vehicle brand</dt>
        <dd>{car?.brand}</dd>

        <dt>Vehicle model</dt>
        <dd>{car?.model}</dd>

        <dt>Vehicle generation</dt>
        <dd>{car?.generation}</dd>

        <dt>Version</dt>
        <dd>{car?.version}</dd>

        <dt>Yearbook</dt>
        <dd>{car?.productionYear}</dd>

        <dt>Mileage</dt>
        <dd>{car?.mileage} km</dd>

        <dt>Engine</dt>
        <dd>{car?.engine}</dd>

        <dt>Gearbox</dt>
        <dd>{car?.gearbox}</dd>

        <dt>Drive</dt>
        <dd>{car?.drive}</dd>

        <dt>Fuel type</dt>
        <dd>{car?.fuel}</dd>

        <dt>Damaged</dt>
        <dd>{car?.isDamage ? "Yes" : "No"}</dd>

        <dt>First Registration</dt>
        <dd>{car?.registrationDate}</dd>

        <dt>VIN</dt>
        <dd>{car?.vin}</dd>

        <dt>Status</dt>
        <dd>{car?.status}</dd>
      </dl>
    </div>
  );
};

export default CarDetails;
