import { InputFieldProps } from "./InputField.types";

const InputField = ({ label, name, ...rest }: InputFieldProps) => {
  return (
    <label className="block text-gray-700 text-sm font-semibold mb-2">
      {label}
      <input
        name={name || label}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        {...rest}
      />
    </label>
  );
};

export default InputField;
