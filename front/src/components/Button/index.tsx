import { ClassAttributes, ButtonHTMLAttributes } from "react";

const Button = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLButtonElement> &
    ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className="flex items-center text-xs tracking-wide bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase "
      {...props}
    />
  );
};

export default Button;
