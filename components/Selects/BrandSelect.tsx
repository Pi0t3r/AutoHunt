import { options } from '@/data/cars';
import { FilterSelectProps, SelectOptionProps } from '@/types/SelectTypes';
import { useState } from 'react';
import { SelectUI } from '../select/SelectUI';
export const BrandSelect = ({ onChange }: FilterSelectProps) => {
  const [selectedBrand, setSelectedBrand] = useState<
    SelectOptionProps | undefined
  >(undefined);
  const handleBrandChange = (brand: SelectOptionProps | undefined) => {
    setSelectedBrand(brand);
    onChange(brand);
  };
  return (
    <SelectUI
      filter="Brand"
      options={options}
      value={selectedBrand}
      onChange={handleBrandChange}
    />
  );
};
