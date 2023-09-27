import { SelectOptionProps, SelectProps } from "@/types/myTypes";
import { useEffect, useState } from "react";
import styles from "./select.module.css";

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
      onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown visibility on click
      tabIndex={0}
      className={`${styles.container} ${disabled ? styles.disabled : ""}`} // Apply CSS classes based on disabled state
    >
      <span className={styles.title}>{filter}</span>{" "}
      {/* Display the filter title */}
      <div className={styles.divider} /> {/* Display a divider */}
      <span className={styles.value}>{value?.value}</span>{" "}
      {/* Display the selected value */}
      <button
        onClick={(e) => {
          e.preventDefault();
          clearOption(); // Clear the selected option when the clear button is clicked
        }}
        className={styles["clear-btn"]}
      >
        &times; {/* Display a clear button */}
      </button>
      <div className={styles.divider} /> {/* Display a divider */}
      <div className={styles.caret} />{" "}
      {/* Display a caret for dropdown indicator */}
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
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
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ""
              } ${index === highlightedIndex ? styles.highlighted : ""}`}
            >
              {option.value}
            </li>
          ))}
      </ul>
    </div>
  );
}
