import { MyInputProps } from "@/types";

export const MyInput = ({
  value,
  onChange,
  type,
  placeholder,
}: MyInputProps) => {
  return (
    <label className="w-full">
      {placeholder}
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
