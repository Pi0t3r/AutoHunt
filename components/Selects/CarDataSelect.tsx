import { CarDataSelectProps } from "@/types";
import { Select } from "../select/Select";

export const CarDataSelect = ({
  filter,
  value,
  options,
  onChange,
}: CarDataSelectProps) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      filter={filter}
    />
  );
};
