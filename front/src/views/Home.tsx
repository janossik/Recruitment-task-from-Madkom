import { useGetBooksQuery } from "app/books";
import Spinner from "components/atoms/Spinner";
import BookCard from "components/molecules/BookCard";

const Home = () => {
  const { data, error, isLoading, isError } = useGetBooksQuery({});

  return (
    <>
      {isLoading && <Spinner />}
      {isError && (
        <div className="flex items-center">{JSON.stringify(error)}</div>
      )}
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.data?.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </section>
    </>
  );
};

export default Home;
