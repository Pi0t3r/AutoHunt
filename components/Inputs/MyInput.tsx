import React from "react";
import { MyInputProps } from "@/types";

export const MyInput: React.FC<MyInputProps> = ({
  value,
  onChange,
  type,
  placeholder,
}) => {
  return (
    <label className="w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="border border-[#777] rounded-md p-2 w-full"
      />
    </label>
  );
};
