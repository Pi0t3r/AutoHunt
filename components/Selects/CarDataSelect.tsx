import { CarDataSelectProps } from "@/types/SelectTypes";
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
