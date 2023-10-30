import { useState, useEffect } from 'react';
import { SelectProps } from '@/types/SelectTypes';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
export const SelectUI = ({
  value,
  onChange,
  options,
  filter,
  isDisabled,
}: SelectProps) => {
  const [disabled, setDisabled] = useState(isDisabled);

  useEffect(() => {
    setDisabled(isDisabled);
  }, [isDisabled]);
  return (
    <FormControl fullWidth disabled={disabled} sx={{ maxWidth: 200 }}>
      <InputLabel id="demo-simple-select-label">{filter}</InputLabel>
      <Select
        labelId={`select-label-${filter}`}
        id={`select-${filter}`}
        value={value?.value || ''}
        label={filter}
        onChange={(event) => {
          const selectedValue = options.find(
            (option) => option.value === event.target.value,
          );
          onChange(selectedValue);
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
