import { fuelOptions } from "@/data/cars";
import { FilterSelectProps } from "@/types";
import { SelectUI } from "../select/SelectUI";

export const FuelSelect = ({ value, onChange }: FilterSelectProps) => {
  return (
    <SelectUI
      onChange={onChange}
      filter="Fuel type"
      options={fuelOptions}
      value={value}
    />
  );
};
