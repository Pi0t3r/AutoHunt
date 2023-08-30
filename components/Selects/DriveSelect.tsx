import React from "react";
import { drive } from "@/data/cars";
import { Select, SelectOption } from "../select/Select";

interface DriveSelectProps {
  value: SelectOption | undefined;
  onChange: (value: SelectOption | undefined) => void;
}

export const DriveSelect: React.FC<DriveSelectProps> = ({
  onChange,
  value,
}) => {
  return (
    <Select options={drive} filter="Drive" onChange={onChange} value={value} />
  );
};
