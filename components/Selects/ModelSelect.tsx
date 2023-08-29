import React, { useState } from "react";

import { Select, SelectOption } from "../select/Select";

interface ModelSelectProps {
  value: SelectOption | undefined;
  onChange: (model: SelectOption | undefined) => void;
  options: SelectOption[];
}

export const ModelSelect: React.FC<ModelSelectProps> = ({
  value,
  onChange,
  options,
}) => {
  return (
    <Select
      value={value}
      filter="Model"
      onChange={onChange}
      options={options}
    />
  );
};
