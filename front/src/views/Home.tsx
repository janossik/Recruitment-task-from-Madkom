import { RootState } from "app/store";
import { useGetBooksQuery } from "app/books";
import BookCard from "components/BookCard";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { data, error, isLoading, isError } = useGetBooksQuery({});
  /* 
    #### 1. Strona główna
    ###### Lista funkcjonalności składająca się z:
    * pobieranie danych z API po wejściu na stronę aplikacji (**GET** _/books_),
    * wyświetlenie wcześniej pobranych danych w konkretnym formacie, tj. każdą
    książkę powinien przedstawiać jeden blok, który ma w sobie zawierać okładkę
    książki, jej tytuł, autora, liczbę stron oraz przycisk:
        * `DODAJ DO KOSZYKA`, który będzie dodawał konkretną pozycję do koszyka.
    * przycisk, który umożliwia przejście do koszyka.
  */
  /*   const count = useSelector((state: RootState) => state.shoppingCard.value);
  const dispatch = useDispatch(); */
  return (
    <>
      {/*       <div>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        {count}
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div> */}
      {isLoading && <p>Loading...</p>}

      {isError && <p>{JSON.stringify(error)}</p>}
      <section className="grid py-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.data?.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </section>
    </>
  );
};

export default Home;
