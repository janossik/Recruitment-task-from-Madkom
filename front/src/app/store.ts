import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { booksApi } from "./books";
import cart from "./cart";
import { debounce } from "debounce";
import { loadState, saveState } from "utils";
import buyForm from "./buyForm";

export const store = configureStore({
  reducer: {
    cart: cart,
    buyForm: buyForm,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
setupListeners(store.dispatch);

store.subscribe(
  // we use debounce to save the state once each 500ms
  // for better performances in case multiple changes occur in a short time
  debounce(() => {
    const { cart } = store.getState();
    saveState({ cart });
  }, 500)
);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
