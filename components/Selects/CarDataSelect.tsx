import { CarDataSelectProps } from "@/types/myTypes";
import React from "react";
import { Select } from "../select/Select";

export const CarDataSelect: React.FC<CarDataSelectProps> = ({
  filter,
  value,
  options,
  onChange,
}) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      filter={filter}
    />
  );
};