import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { IconButtonProps } from "@mui/material/IconButton";
import { ChangeEvent, Dispatch, SetStateAction, ReactNode } from "react";
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
  setAdvertData: (data: any[]) => void;
};

export type SelectOptionProps = {
  value: string;
};

export type BannerProps = {
  images: string[];
};
export type UserProviderProps = {
  children: ReactNode;
};
export type SelectProps = {
  options: SelectOption[];
  value: SelectOption | undefined;
  onChange: (value: SelectOption | undefined) => void;
  filter: string;
  isDisabled?: boolean;
};

type Engine = {
  value: string;
};
type Version = {
  value: string;
  engine: Engine[];
};
type Generation = {
  value: string;
  versions: Version[];
};
type Model = {
  value: string;
  generations: Generation[];
};
export type Car = {
  value: string;
  models: Model[];
};

interface carDetailsProps {
  brand: string;
  model: string;
  generation: string;
  version: string;
  engine: string;
  mileage: number;
  body: string;
  drive: string;
  firstRegister: string;
  fuel: string;
  gearbox: string;
  price: number;
  yearbook: number;
  vin: string;
  createAdvert: string;
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
  type: string;
  placeholder?: string;
}

export interface ProfileImageProps {
  userMail: string;
  selectedImage?: string | null;
}

export interface ReportFormProps {
  setReportVisible: Dispatch<SetStateAction<boolean>>;
  reportVisible: boolean;
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
    userData: {
      email: string;
      name: string;
      surname: string;
      password: string;
      profileImage: string | null;
    } | null
  ) => void;
  updatePassword: (newPassword: string) => void;
  updateProfilePicture: (newImage: string) => void;
}
export interface MyTimerProps {
  expiryTimestamp: Date;
  onExpire: () => void;
}

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export interface InfoProps {
  title: string | ReactJSXElement;
  value: ReactNode;
}

export interface LabelProps {
  value: string;
  title: string;
}

export interface LinksProps {
  linkTo: string;
  title: string;
  icon?: JSX.Element;
}

export interface LabelInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  name?: string;
  title?: string;
}

export interface UserDataProps {
  userName: string;
  userSurname: string;
  userMail: string;
}