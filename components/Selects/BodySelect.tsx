import React from "react";
import { body } from "@/data/cars";
import { Select } from "../select/Select";
import { FilterSelectProps } from "@/types/myTypes";
export const BodySelect = ({ value, onChange }: FilterSelectProps) => {
  return (
    <Select filter="Body" options={body} value={value} onChange={onChange} />
  );
};
