import { CustomSelectProps } from "@/types";
import React from "react";
import { drive, gearbox } from "../../data/cars";
import { Select } from "../select/Select";

export const CustomSelect: React.FC<CustomSelectProps> = ({
  onChangeDrive,
  onChangeGearbox,
  valueDrive,
  valueGearbox,
}) => {
  return (
    <>
      <Select
        options={drive}
        filter="Drive"
        onChange={onChangeDrive}
        value={valueDrive}
      />
      <Select
        options={gearbox}
        filter="Gearbox"
        onChange={onChangeGearbox}
        value={valueGearbox}
      />
    </>
  );
};
