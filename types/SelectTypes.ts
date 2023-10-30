export type SelectOption = {
  value: string;
  brand?: SelectOption[] | undefined;
  models?: SelectOption[] | undefined;
  generations?: SelectOption[] | undefined;
  versions?: SelectOption[] | undefined;
  body?: SelectOption[] | undefined;
  engine?: SelectOption[] | undefined;
};

export type SelectProps = {
  options: SelectOption[];
  value: SelectOption | undefined;
  onChange: (value: SelectOption | undefined) => void;
  filter: string;
  isDisabled?: boolean;
};
export type SelectOptionProps = {
  value: string;
};
export interface CustomSelectProps {
  onChangeDrive: (value: SelectOptionProps | undefined) => void;
  onChangeGearbox: (value: SelectOptionProps | undefined) => void;
  valueDrive: SelectOptionProps | undefined;
  valueGearbox: SelectOptionProps | undefined;
}
export interface CarDataSelectProps {
  filter: string;
  value: SelectOptionProps | undefined;
  options: SelectOptionProps[];
  onChange: (value: SelectOptionProps | undefined) => void;
}

export interface FilterSelectProps {
  onChange: (value: SelectOptionProps | undefined) => void;
}

export interface FilterSelectPropsExtend extends FilterSelectProps {
  value: SelectOptionProps | undefined;
}
