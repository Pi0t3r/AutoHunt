import { ChangeEvent } from 'react';

export interface MyInputProps {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}
export interface LabelInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
export interface LabelInputExtends extends LabelInput {
  type: string;
  name: string;
  title: string;
}
