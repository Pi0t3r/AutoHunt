import { fuelOptions } from "@/data/cars";
import { FilterSelectProps } from "@/types";
import { Select } from "../select/Select";

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
