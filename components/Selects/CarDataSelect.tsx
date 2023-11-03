import { CarDataSelectProps } from '@/types/SelectTypes';
import { SelectUI } from '../SelectUI';

export const CarDataSelect = ({
  filter,
  value,
  options,
  onChange,
}: CarDataSelectProps) => {
  return (
    <SelectUI
      options={options}
      value={value}
      onChange={onChange}
      filter={filter}
    />
  );
};
