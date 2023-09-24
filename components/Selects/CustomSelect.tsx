import React from "react";
import { Select } from "../select/Select";
import { gearbox, drive } from "../../data/cars";
import { CustomSelectProps } from "@/types/myTypes";

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
