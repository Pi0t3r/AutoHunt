import React, { ChangeEvent } from "react";

interface YearbookInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const YearbookInput: React.FC<YearbookInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <label>
      Yearbook:
      <input type="number" value={value} onChange={onChange} />
    </label>
  );
};
