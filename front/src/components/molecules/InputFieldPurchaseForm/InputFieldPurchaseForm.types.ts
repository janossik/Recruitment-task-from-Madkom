import { ClassAttributes, InputHTMLAttributes } from "react";

export interface InputFieldPurchaseFormProps
  extends JSX.IntrinsicAttributes,
    ClassAttributes<HTMLInputElement>,
    InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: "first_name" | "last_name" | "city" | "zip_code";
}
