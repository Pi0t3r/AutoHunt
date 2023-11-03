import { body } from '@/data/cars';
import { FilterSelectPropsExtend } from '@/types/SelectTypes';
import { SelectUI } from '../SelectUI';
export const BodySelect = ({ value, onChange }: FilterSelectPropsExtend) => {
  return (
    <SelectUI filter="Body" options={body} value={value} onChange={onChange} />
  );
};
