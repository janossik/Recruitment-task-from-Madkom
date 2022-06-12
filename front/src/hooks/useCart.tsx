import { addBookToCart, removeBookFromCart, setBookInCart } from "app/cart";
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { BookProps } from "types";

const useCart = () => {
  const { booksInCart } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const bookIDs = Object.keys(booksInCart);
  const fullPrice = bookIDs.reduce(
    (prev, curr) =>
      prev + booksInCart[curr].count * booksInCart[curr].book.price,
    0
  );
  const add = (book: BookProps) => dispatch(addBookToCart(book));
  const remove = (book: BookProps) => dispatch(removeBookFromCart(book));
  const set = (book: BookProps, count: number) =>
    dispatch(setBookInCart({ count, book }));
  return { booksInCart, bookIDs, fullPrice, add, remove, set };
};

export default useCart;
