import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookProps, BooksInCartProps } from "types";
export interface CartState {
  booksInCart: BooksInCartProps;
}
const initialState: CartState = {
  booksInCart: {},
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCartBook: () => initialState,
    addBookToCart: (state, action: PayloadAction<BookProps>) => {
      const bookInCart = state.booksInCart[action.payload.id];
      if (bookInCart) {
        bookInCart.quantity += 1;
      } else {
        state.booksInCart[action.payload.id] = {
          quantity: 1,
          book: action.payload,
        };
      }
    },
    removeBookFromCart: (state, action: PayloadAction<BookProps>) => {
      const bookInCart = state.booksInCart[action.payload.id];
      if (bookInCart) {
        bookInCart.quantity -= 1;
        if (bookInCart.quantity === 0) {
          delete state.booksInCart[action.payload.id];
        }
      }
    },
    setBookInCart: (
      state,
      action: PayloadAction<{ quantity: number; book: BookProps }>
    ) => {
      if (action.payload.quantity === 0) {
        delete state.booksInCart[action.payload.book.id];
      } else {
        state.booksInCart[action.payload.book.id] = {
          quantity: action.payload.quantity,
          book: action.payload.book,
        };
      }
    },
  },
});

export const {
  addBookToCart,
  removeBookFromCart,
  setBookInCart,
  resetCartBook,
} = CartSlice.actions;

export default CartSlice.reducer;
