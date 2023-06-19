import styles from "./select.module.css";
import React, { useState, useEffect } from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value: SelectOption | undefined;
  onChange: (value: SelectOption | undefined) => void;
  filter: string;
  disabled?: boolean;
};

export function Select({
  value,
  onChange,
  options,
  filter,
  disabled,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOption() {
    onChange(undefined);
  }
  function selectOption(option: SelectOption) {
    if (option !== value) onChange(option);
  }
  function isOptionSelected(option: SelectOption) {
    return option === value;
  }
  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={`${styles.container} ${disabled ? styles.disabled : ''}`}
    >
      <span className={styles.title}>{filter}</span>
      <div className={styles.dividerOne} />
      <span className={styles.value}>{value?.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOption();
        }}
        className={styles["clear-btn"]}
      >
        &times;
      </button>
      <div className={styles.divider} />
      <div className={styles.caret} />
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
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
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ""
              } ${index === highlightedIndex ? styles.highlighted : ""}`}
            >
              {option.label}
            </li>
          ))}
      </ul>
    </div>
  );
}
