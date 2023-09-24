import React, { ChangeEvent } from "react";

export type ActiveButton = "login" | "signup";

export type SelectOption = {
  value: string;
  brand?: SelectOption[] | undefined;
  models?: SelectOption[] | undefined;
  generations?: SelectOption[] | undefined;
  versions?: SelectOption[] | undefined;
  body?: SelectOption[] | undefined;
  engine?: SelectOption[] | undefined;
};

export type FiltersProps = {
  lenght: number;
  advertData: any[];
  setAdvertData: (data: any[]) => void;
};

export type SelectOptionProps = {
  value: string;
};

export type SelectProps = {
  options: SelectOption[];
  value: SelectOption | undefined;
  onChange: (value: SelectOption | undefined) => void;
  filter: string;
  disabled?: boolean;
};

interface carDetailsProps {
  brand: string;
  model: string;
  generation: string;
  version: string;
  engine: string;
}

export interface carDataProps {
  data: carDetailsProps;
}
interface SellerDetailsProps {
  sellerName: string;
  sellerSurname: string;
  phone: string;
  sellerPlace: string;
}
export interface SellerDataProps {
  data: SellerDetailsProps;
}

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
  value?: SelectOptionProps | undefined;
  onChange: (value: SelectOptionProps | undefined) => void;
}

export interface ImageUploadProps {
  onImageSelect: (filtes: FileList) => void;
}

export interface MyInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  type: string;
  placeholder?: string;
}

export interface ProfileImageProps {
  userMail: string;
  selectedImage?: string | null;
}

export interface ReportFormProps {
  setReportVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserContextType {
  user: {
    email: string;
    name: string;
    surname: string;
    password: string;
    profileImage: string | null;
  } | null;
  setUser: (
    user: {
      email: string;
      name: string;
      surname: string;
      password: string;
      profileImage: string | null;
    } | null
  ) => void;
  updatePassword: (newPassword: string) => void;
}
