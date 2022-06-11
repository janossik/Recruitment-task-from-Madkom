import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookProps } from "types";

export interface ShoppingCardState {
  booksInCart: { [key: string | number]: { count: number; book: BookProps } };
}

const initialState: ShoppingCardState = {
  booksInCart: {},
};

export const ShoppingCardSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addBookToCart: (state, action: PayloadAction<BookProps>) => {
      const bookInCart = state.booksInCart[action.payload.id];
      if (bookInCart) {
        bookInCart.count += 1;
      } else {
        state.booksInCart[action.payload.id] = {
          count: 1,
          book: action.payload,
        };
      }
    },
    removeBookFromCart: (state, action: PayloadAction<BookProps>) => {
      const bookInCart = state.booksInCart[action.payload.id];
      if (bookInCart) {
        bookInCart.count -= 1;
        if (bookInCart.count === 0) {
          delete state.booksInCart[action.payload.id];
        }
      }
    },
  },
});

export const { addBookToCart } = ShoppingCardSlice.actions;

export default ShoppingCardSlice.reducer;
