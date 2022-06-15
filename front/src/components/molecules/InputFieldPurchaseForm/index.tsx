import { RootState } from "app/store";
import { setBuyFormInputField } from "app/purchaseForm";
import InputField from "components/atoms/InputField";
import { ClassAttributes, InputHTMLAttributes } from "react";
import { useSelector, useDispatch } from "react-redux";

const InputFieldPurchaseForm = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement> & {
      label: string;
      name: "first_name" | "last_name" | "city" | "zip_code";
    }
) => {
  const state = useSelector((state: RootState) => state.purchaseForm);
  const dispatch = useDispatch();
  const currentName = props.name as keyof typeof state;
  return (
    <InputField
      {...props}
      required
      value={state[currentName]}
      onChange={({ currentTarget: { value } }) => {
        dispatch(setBuyFormInputField({ value, field: currentName }));
      }}
    />
  );
};

export default InputFieldPurchaseForm;
