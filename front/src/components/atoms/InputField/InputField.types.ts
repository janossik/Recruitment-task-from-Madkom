import { ClassAttributes, InputHTMLAttributes } from "react";

export interface InputFieldProps
  extends JSX.IntrinsicAttributes,
    ClassAttributes<HTMLInputElement>,
    InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
