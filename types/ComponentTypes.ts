import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { IconButtonProps } from "@mui/material/IconButton";
import { ReactNode } from "react";

export type ActiveButton = "login" | "signup";

export type FiltersProps = {
  setAdvertData: (data: any[]) => void;
};

export type BannerProps = {
  images: string[];
};

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
}
export interface IconProps extends LinksProps {
  icon: JSX.Element;
}
