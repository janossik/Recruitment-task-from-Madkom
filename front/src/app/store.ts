import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { booksApi } from "./books";
import shoppingCard from "./shoppingCard";
import { debounce } from "debounce";
import { loadState, saveState } from "utils";

export const store = configureStore({
  reducer: {
    shoppingCard: shoppingCard,
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
    const { shoppingCard } = store.getState();
    saveState({ shoppingCard });
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
