import { useGetBooksQuery } from "app/books";
import Spinner from "components/atoms/Spinner";
import BookCard from "components/molecules/BookCard";
import ErrorInfo from "components/molecules/ErrorInfo";

const Home = () => {
  const { data, error, isLoading, isError } = useGetBooksQuery({});

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.log(error);
    return (
      <ErrorInfo>
        Przykro nam,
        <br /> niestety nie znaleźliśmy książek
      </ErrorInfo>
    );
  }

  return (
    <>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {data?.data?.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </section>
    </>
  );
};

export default Home;
