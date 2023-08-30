import React, { ChangeEvent } from "react";

interface MyInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  type: string;
  placeholder?: string;
}

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
