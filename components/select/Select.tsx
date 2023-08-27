import styles from "./select.module.css";
import React, { useState, useEffect } from "react";

export type SelectOption = {
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
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);

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
      <div className={styles.divider} />
      <span className={styles.value}>{value?.value}</span>
      <button
        onClick={(e) => {
          e.preventDefault();
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
              {option.value}
            </li>
          ))}
      </ul>
    </div>
  );
}
