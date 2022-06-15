import { ClassAttributes, ButtonHTMLAttributes } from "react";

export interface BottonProps
  extends JSX.IntrinsicAttributes,
    ClassAttributes<HTMLButtonElement>,
    ButtonHTMLAttributes<HTMLButtonElement> {}
