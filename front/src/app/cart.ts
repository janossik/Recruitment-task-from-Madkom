import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookProps } from "types";

export interface CartState {
  booksInCart: { [key: string | number]: { count: number; book: BookProps } };
}

const initialState: CartState = {
  booksInCart: {},
};

export const CartSlice = createSlice({
  name: "cart",
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
    setBookInCart: (
      state,
      action: PayloadAction<{ count: number; book: BookProps }>
    ) => {
      if (action.payload.count === 0) {
        delete state.booksInCart[action.payload.book.id];
      } else {
        state.booksInCart[action.payload.book.id] = {
          count: action.payload.count,
          book: action.payload.book,
        };
      }
    },
  },
});

export const { addBookToCart, removeBookFromCart, setBookInCart } =
  CartSlice.actions;

export default CartSlice.reducer;
