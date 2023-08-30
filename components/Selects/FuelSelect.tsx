import React, { useState } from "react";
import { fuelOptions } from "@/data/cars";
import { Select, SelectOption } from "../select/Select";

export const FuelSelect = () => {
  const [selectedFuel, setSelectedFuel] = useState<SelectOption | undefined>(
    undefined
  );
  const handleFuelChange = (selectedFuel: SelectOption | undefined) => {
    setSelectedFuel(selectedFuel);
  };
  return (
    <Select
      onChange={handleFuelChange}
      filter="Fuel type"
      options={fuelOptions}
      value={selectedFuel}
    />
  );
};
