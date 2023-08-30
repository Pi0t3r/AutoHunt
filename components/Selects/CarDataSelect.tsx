import React from "react";
import { SelectOption, Select } from "../select/Select";

interface CarDataSelectProps {
  filter: string;
  value: SelectOption | undefined;
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
}

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
