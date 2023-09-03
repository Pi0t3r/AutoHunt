import React from "react";
import { fuelOptions } from "@/data/cars";
import { Select, SelectOption } from "../select/Select";

interface FuelSelectProps {
  value: SelectOption | undefined;
  onChange: (value: SelectOption | undefined) => void;
}

export const FuelSelect = ({ value, onChange }: FuelSelectProps) => {
  return (
    <Select
      onChange={onChange}
      filter="Fuel type"
      options={fuelOptions}
      value={value}
    />
  );
};
