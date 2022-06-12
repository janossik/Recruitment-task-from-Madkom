import Button from "components/atoms/Button";
import useCart from "hooks/useCart";

const BookInCartMesh = ({ preview }: { preview?: boolean }) => {
  const { bookIDs, booksInCart, remove, set, add } = useCart();

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
          const currentBook = booksInCart[key];
          return (
            <div
              key={currentBook.book.id}
              className="flex gap-2 p-3 bg-slate-200"
            >
              {!preview && (
                <img
                  src={currentBook.book.cover_url}
                  alt={currentBook.book.title}
                  className="lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden"
                />
              )}
              <p className="text-sm">{currentBook.book.title}</p>
              <div className="flex gap-2 ml-auto items-center">
                <div>
                  <Button onClick={() => remove(currentBook.book)}>-</Button>
                </div>
                {preview ? (
                  <div>{currentBook.count}</div>
                ) : (
                  <div>
                    <input
                      className="
                      form-control
                      appearance-none
                      block
                      w-16
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                      type="number"
                      value={currentBook.count}
                      onChange={({ currentTarget: { valueAsNumber } }) => {
                        if (valueAsNumber < 0 || Number.isNaN(valueAsNumber)) {
                          return;
                        }
                        set(currentBook.book, valueAsNumber);
                      }}
                    />
                  </div>
                )}
                <div>
                  <Button onClick={() => add(currentBook.book)}>+</Button>
                </div>
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
