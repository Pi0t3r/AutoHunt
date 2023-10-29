import { CarDataSelectProps } from "@/types";
import { SelectUI } from "../select/SelectUI";

export const CarDataSelect = ({
  filter,
  value,
  options,
  onChange,
}: CarDataSelectProps) => {
  return (
    <SelectUI
      options={options}
      value={value}
      onChange={onChange}
      filter={filter}
    />
  );
};
