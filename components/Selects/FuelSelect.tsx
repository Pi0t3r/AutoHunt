import React from "react";
import { fuelOptions } from "@/data/cars";
import { Select } from "../select/Select";
import { FilterSelectProps } from "@/types/myTypes";

export const FuelSelect = ({ value, onChange }: FilterSelectProps) => {
  return (
    <Select
      onChange={onChange}
      filter="Fuel type"
      options={fuelOptions}
      value={value}
    />
  );
};
