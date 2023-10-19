import { SelectOptionProps, SelectProps } from "@/types/myTypes";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export function Select({
  value,
  onChange,
  options,
  filter,
  disabled,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for dropdown visibility
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0); // State for highlighted option index
  // Function to clear selected option
  function clearOption() {
    onChange(undefined);
  }
  // Function to select an option
  function selectOption(option: SelectOptionProps) {
    if (option !== value) onChange(option);
  }
  // Function to check if an option is selected
  function isOptionSelected(option: SelectOptionProps) {
    return option === value;
  }
  useEffect(() => {
    // Reset the highlighted index when the dropdown is opened
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)} // Close dropdown when focus is lost
      tabIndex={0}
      className={`relative w-full min-h-[1.5em] border border-solid border-[#777] flex items-center rounded-md outline-none cursor-pointer p-[5px] focus:border-main max-w-[400px] ${
        disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : ""
      }`} // Apply CSS classes based on disabled state
    >
      <span className="font-bold text-main p-[3px]">{filter}</span>{" "}
      {/* Display the filter title */}
      <div className="bg-[#777] self-stretch w-px my-0 mx-2.5" />{" "}
      {/* Display a divider */}
      <span className="grow">{value?.value}</span>{" "}
      {/* Display the selected value */}
      <button
        onClick={(e) => {
          e.preventDefault();
          clearOption(); // Clear the selected option when the clear button is clicked
        }}
        className="bg-none text-[#777] border-none outline-none cursor-pointer p-0 text-3xl focus:text-[#333] hover:text-[#333]"
      >
        &times; {/* Display a clear button */}
      </button>
      <div className="bg-[#777] self-stretch w-px my-0 mx-2.5" />{" "}
      {/* Display a divider */}
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <button className={`transition-all duration-500 ${isOpen ? "rotate-180" : ""}`}>
          <ExpandMoreIcon />
        </button>
      </div>
      {/* Display a caret for dropdown indicator */}
      <ul
        className={`absolute m-0 p-0 list-none max-h-52 overflow-y-auto border border-solid border-[#777] rounded-md w-full left-0 top-[105%] bg-white z-[100] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {" "}
        {/* Display the dropdown options */}
        {options &&
          options.map((option, index) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option); // Select an option when clicked
                setIsOpen(false); // Close the dropdown
              }}
              onMouseEnter={() => setHighlightedIndex(index)} // Highlight option on mouse enter
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
