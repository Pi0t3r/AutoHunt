import React from "react";
import styles from "./CarDetails.module.css";

const CarDetails = ({ car }) => {
  return (
    <div className={styles.infoCar}>
      <p className={styles.title}>Details</p>
      <p>
        Vehicle brand <span>{car?.brand}</span>
      </p>
      <p>
        Vehicle model <span>{car?.model}</span>
      </p>
      <p>
        Vehicle generation <span>{car?.generation}</span>
      </p>
      <p>
        Version <span>{car?.version}</span>
      </p>
      <p>
        Yearbook <span>{car?.productionYear}</span>
      </p>
      <p>
        Mileage <span>{car?.mileage} km</span>
      </p>
      <p>
        Engine <span>{car?.engine}</span>
      </p>
      <p>
        Gearbox <span>{car?.gearbox}</span>
      </p>
      <p>
        Drive <span>{car?.drive}</span>
      </p>
      <p>
        Fuel type <span>{car?.fuel}</span>
      </p>
      <p>
        Damaged <span>{car?.isDamage ? "Yes" : "No"}</span>
      </p>

      <p>
        First Registration <span>{car?.registrationDate}</span>
      </p>
      <p>
        VIN <span>{car?.vin}</span>
      </p>
      <p>
        Status <span>{car?.status}</span>
      </p>
    </div>
  );
};

export default CarDetails;
