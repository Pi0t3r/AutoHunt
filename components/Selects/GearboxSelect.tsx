import React from "react";
import { gearbox } from "@/data/cars";
import { Select, SelectOption } from "../select/Select";

interface GearboxSelectProps {
  value: SelectOption | undefined;
  onChange: (value: SelectOption | undefined) => void;
}

export const GearboxSelect: React.FC<GearboxSelectProps> = ({
  value,
  onChange,
}) => {
  return (
    <Select
      options={gearbox}
      filter="Gearbox"
      onChange={onChange}
      value={value}
    />
  );
};
