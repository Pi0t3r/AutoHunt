import { CustomSelectProps } from "@/types";
import { drive, gearbox } from "../../data/cars";
import { SelectUI } from "../select/SelectUI";

export const CustomSelect = ({
  onChangeDrive,
  onChangeGearbox,
  valueDrive,
  valueGearbox,
}: CustomSelectProps) => {
  return (
    <>
      <SelectUI
        options={drive}
        filter="Drive"
        onChange={onChangeDrive}
        value={valueDrive}
      />
      <SelectUI
        options={gearbox}
        filter="Gearbox"
        onChange={onChangeGearbox}
        value={valueGearbox}
      />
    </>
  );
};
