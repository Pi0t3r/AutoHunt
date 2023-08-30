import React, { useState } from "react";
import { Select, SelectOption } from "../select/Select";
import { gearbox, drive } from "../../data/cars";
interface CustomSelectProps {
  onChangeDrive: (value: SelectOption | undefined) => void;
  onChangeGearbox: (value: SelectOption | undefined) => void;
  valueDrive: SelectOption | undefined;
  valueGearbox: SelectOption | undefined;
}

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
