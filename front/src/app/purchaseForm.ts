import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface purchaseFormState {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

const initialState: purchaseFormState = {
  first_name: "",
  last_name: "",
  city: "",
  zip_code: "",
};

export const purchaseForm = createSlice({
  name: "purchaseForm",
  initialState,
  reducers: {
    resetPurchaseForm: () => initialState,
    setPurchaseFormInputField: (
      state,
      action: PayloadAction<{ value: string; field: keyof typeof initialState }>
    ) => {
      if (Object.keys(state).includes(action.payload.field)) {
        state[action.payload.field] = action.payload.value;
      } else {
        console.error("Invalid field name");
      }
    },
  },
});

export const { setPurchaseFormInputField, resetPurchaseForm } =
  purchaseForm.actions;

export default purchaseForm.reducer;
