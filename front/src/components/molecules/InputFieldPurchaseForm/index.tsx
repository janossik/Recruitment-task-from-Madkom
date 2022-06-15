import { setPurchaseFormInputField } from "app/purchaseForm";
import { RootState } from "app/store";
import InputField from "components/atoms/InputField";
import { useDispatch, useSelector } from "react-redux";
import { InputFieldPurchaseFormProps } from "./InputFieldPurchaseForm.types";

const InputFieldPurchaseForm = (props: InputFieldPurchaseFormProps) => {
  const state = useSelector((state: RootState) => state.purchaseForm);
  const dispatch = useDispatch();
  const currentName = props.name as keyof typeof state;
  return (
    <InputField
      {...props}
      required
      value={state[currentName]}
      onChange={({ currentTarget: { value } }) => {
        dispatch(setPurchaseFormInputField({ value, field: currentName }));
      }}
    />
  );
};

export default InputFieldPurchaseForm;
