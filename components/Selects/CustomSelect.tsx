import { CustomSelectProps } from "@/types";
import { drive, gearbox } from "../../data/cars";
import { Select } from "../select/Select";

export const CustomSelect = ({
  onChangeDrive,
  onChangeGearbox,
  valueDrive,
  valueGearbox,
}: CustomSelectProps) => {
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
