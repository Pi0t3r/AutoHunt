import { body } from "@/data/cars";
import { FilterSelectProps } from "@/types";
import { Select } from "../select/Select";
export const BodySelect = ({ value, onChange }: FilterSelectProps) => {
  return (
    <Select filter="Body" options={body} value={value} onChange={onChange} />
  );
};
