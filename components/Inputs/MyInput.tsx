import React from "react";
import { MyInputProps } from "@/types/myTypes";

export const MyInput: React.FC<MyInputProps> = ({
  value,
  onChange,
  title,
  type,
  placeholder,
}) => {
  return (
    <label>
      {title}:
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};
