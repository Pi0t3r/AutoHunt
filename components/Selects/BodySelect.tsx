import React from "react";
import { body } from "@/data/cars";
import { Select, SelectOption } from "../select/Select";

interface BodySelectProps {
  value: SelectOption | undefined;
  onChange: (value: SelectOption | undefined) => void;
}

export const BodySelect = ({ value, onChange }: BodySelectProps) => {
  return (
    <Select filter="Body" options={body} value={value} onChange={onChange} />
  );
};
