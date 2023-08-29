import React, { useState } from "react";
import { options } from "@/data/cars";
import { Select, SelectOption } from "../select/Select";

interface BrandSelectProps {
  onChange: (value: SelectOption | undefined) => void;
}

export const BrandSelect: React.FC<BrandSelectProps> = ({ onChange }) => {
  const [selectedBrand, setSelectedBrand] = useState<SelectOption | undefined>(
    undefined
  );
  const handleBrandChange = (brand: SelectOption | undefined) => {
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
