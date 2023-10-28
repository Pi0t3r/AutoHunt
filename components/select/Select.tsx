import { SelectOptionProps, SelectProps } from "@/types";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export function Select({
  value,
  onChange,
  options,
  filter,
  disabled,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOption() {
    onChange(undefined);
  }

  function selectOption(option: SelectOptionProps) {
    if (option !== value) onChange(option);
  }

  function isOptionSelected(option: SelectOptionProps) {
    return option === value;
  }
  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      className={`relative w-full min-h-[1.5em] border border-solid border-[#777] flex items-center rounded-md outline-none cursor-pointer p-[5px] focus:border-main max-w-[400px] ${
        disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : ""
      }`}
    >
      <span className="font-bold text-main p-[3px]">{filter}</span>{" "}
      <div className="bg-[#777] self-stretch w-px my-0 mx-2.5" />{" "}
      <span className="grow">{value?.value}</span>{" "}
      <button
        onClick={(e) => {
          e.preventDefault();
          clearOption();
        }}
        className="bg-none text-[#777] border-none outline-none cursor-pointer p-0 text-3xl focus:text-[#333] hover:text-[#333]"
      >
        &times;
      </button>
      <div className="bg-[#777] self-stretch w-px my-0 mx-2.5" />{" "}
      <div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`transition-all duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ExpandMoreIcon />
        </button>
      </div>
      <ul
        className={`absolute m-0 p-0 list-none max-h-52 overflow-y-auto border border-solid border-[#777] rounded-md w-full left-0 top-[105%] bg-white z-[100] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {" "}
        {options &&
          options.map((option, index) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.value}
              className={`p-[5px] py-2.5 cursor-pointer ${
                isOptionSelected(option) ? "bg-main" : ""
              } ${index === highlightedIndex ? "bg-main text-white" : ""}`}
            >
              {option.value}
            </li>
          ))}
      </ul>
    </div>
  );
}
