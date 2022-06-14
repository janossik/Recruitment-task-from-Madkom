import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookProps } from "types";

export interface BuyFormState {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

const initialState: BuyFormState = {
  first_name: "",
  last_name: "",
  city: "",
  zip_code: "",
};

export const CartSlice = createSlice({
  name: "buyForm",
  initialState,
  reducers: {
    setBuyFormInputField: (state, action: PayloadAction<string>) => {
      if (Object.keys(state).includes(action.type)) {
        state[action.type as keyof typeof state] = action.payload;
      } else {
        console.error("error");
      }
    },
  },
});

export const {} = CartSlice.actions;

export default CartSlice.reducer;
