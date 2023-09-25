import React from "react";
import { Select } from "../select/Select";
import { CarDataSelectProps } from "@/types/myTypes";

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