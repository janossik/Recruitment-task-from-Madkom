import Button from "components/atoms/Button";
import useCart from "hooks/useCart";
import { BookInCartMeshProps } from "./BookInCartMesh.types";

const BookInCartMesh = ({
  preview,
  hiddenActions,
  mockBooksInCart,
}: BookInCartMeshProps) => {
  const { bookIDs, booksInCart, remove, set, add } = useCart();
  const books = mockBooksInCart || booksInCart;
  return (
    <div
      className={
        preview
          ? "grid max-h-96 gap-4 overflow-y-auto"
          : "grid max-w-3xl mx-auto gap-14"
      }
    >
      {bookIDs.length > 0 ? (
        bookIDs.map((key) => {
          const currentBook = books[key];
          return (
            <div
              key={currentBook.book.id}
              className="flex gap-2 p-3 bg-slate-200"
            >
              {!preview && (
                <img
                  src={currentBook.book.cover_url}
                  alt={currentBook.book.title}
                  className="h-32 flex-none bg-cover text-center overflow-hidden"
                />
              )}
              <div>
                <p className="text-md font-semibold">
                  {currentBook.book.title}
                </p>
                {hiddenActions ? (
                  <div className="flex ml-auto flex-row items-center gap-2">
                    Ilość {currentBook.quantity}
                  </div>
                ) : (
                  <div className="flex ml-auto flex-row items-center gap-2">
                    <div>
                      <Button onClick={() => remove(currentBook.book)}>
                        -
                      </Button>
                    </div>
                    <div className="py-2">
                      <input
                        className="form-control appearance-none block w-16 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="number"
                        value={currentBook.quantity}
                        onChange={({ currentTarget: { valueAsNumber } }) =>
                          !(valueAsNumber < 0 || Number.isNaN(valueAsNumber)) &&
                          set(currentBook.book, valueAsNumber)
                        }
                      />
                    </div>
                    <div>
                      <Button onClick={() => add(currentBook.book)}>+</Button>
                    </div>
                    <div>
                      <Button
                        className=""
                        onClick={() => set(currentBook.book, 0)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="36"
                          width="36"
                          viewBox="0 -2 44 44"
                          fill="#3B82F6"
                        >
                          <path d="M13.05 42Q11.85 42 10.95 41.1Q10.05 40.2 10.05 39V10.5H8V7.5H17.4V6H30.6V7.5H40V10.5H37.95V39Q37.95 40.2 37.05 41.1Q36.15 42 34.95 42ZM34.95 10.5H13.05V39Q13.05 39 13.05 39Q13.05 39 13.05 39H34.95Q34.95 39 34.95 39Q34.95 39 34.95 39ZM18.35 34.7H21.35V14.75H18.35ZM26.65 34.7H29.65V14.75H26.65ZM13.05 10.5V39Q13.05 39 13.05 39Q13.05 39 13.05 39Q13.05 39 13.05 39Q13.05 39 13.05 39Z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex gap-2 p-3 bg-slate-200">
          <p className="text-sm">Twój koszyk jest pusty</p>
        </div>
      )}
    </div>
  );
};

export default BookInCartMesh;
