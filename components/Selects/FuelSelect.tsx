import { fuelOptions } from '@/data/cars';
import { FilterSelectPropsExtend } from '@/types/SelectTypes';
import { SelectUI } from '../select/SelectUI';

export const FuelSelect = ({ value, onChange }: FilterSelectPropsExtend) => {
  return (
    <SelectUI
      onChange={onChange}
      filter="Fuel type"
      options={fuelOptions}
      value={value}
    />
  );
};
