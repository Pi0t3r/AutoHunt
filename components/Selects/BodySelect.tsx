import { body } from "@/data/cars";
import { FilterSelectProps } from "@/types";
import { SelectUI } from "../select/SelectUI";
export const BodySelect = ({ value, onChange }: FilterSelectProps) => {
  return (
    <SelectUI filter="Body" options={body} value={value} onChange={onChange} />
  );
};
