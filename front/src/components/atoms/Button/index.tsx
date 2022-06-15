import { BottonProps } from "./Button.types";

const Button = (props: BottonProps) => (
  <button
    className={`flex items-center text-xs tracking-wide bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase ${
      props.disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
    {...props}
  />
);

export default Button;
