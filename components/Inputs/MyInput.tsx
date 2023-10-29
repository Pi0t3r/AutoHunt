import { MyInputProps } from "@/types";

export const MyInput = ({
  value,
  onChange,
  type,
  placeholder,
}: MyInputProps) => {
  const today = new Date();
  const dateTime = today
    .toLocaleDateString("en-CA")
    .replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1");
  return (
    <label>
      {placeholder}
      <input
        type={type}
        max={dateTime}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="border border-[#777] rounded-md p-2 ml-2"
      />
    </label>
  );
};
