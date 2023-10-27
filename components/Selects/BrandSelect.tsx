import { options } from "@/data/cars";
import { FilterSelectProps, SelectOptionProps } from "@/types";
import React, { useState } from "react";
import { Select } from "../select/Select";
export const BrandSelect: React.FC<FilterSelectProps> = ({ onChange }) => {
  const [selectedBrand, setSelectedBrand] = useState<
    SelectOptionProps | undefined
  >(undefined);
  const handleBrandChange = (brand: SelectOptionProps | undefined) => {
    setSelectedBrand(brand);
    onChange(brand);
  };
  return (
    <Select
      filter="Brand"
      options={options}
      value={selectedBrand}
      onChange={handleBrandChange}
    />
  );
};
