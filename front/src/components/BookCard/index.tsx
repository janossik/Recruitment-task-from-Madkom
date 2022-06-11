import { addBookToCart } from "app/shoppingCard";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { BookProps } from "types";

const BookCard = (props: BookProps) => {
  const dispatch = useDispatch();
  return (
    <article className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-96 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url('${props.cover_url}')` }}
        title={props.title}
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <h3 className="text-gray-900 font-bold text-xl mb-2">
            {props.title}
          </h3>
          <p className="text-sm text-gray-600 flex items-center">
            {props.author}
          </p>
          <p className="text-gray-700 text-base">{props.pages} ilość stron</p>
          <p className="text-gray-700 text-base">
            {props.price.toString().slice(0, 2)}.
            {props.price.toString().slice(2, 4)} {props.currency}
          </p>
        </div>
        <div className="flex items-center">
          <Button onClick={() => dispatch(addBookToCart(props))}>
            DODAJ DO KOSZYKA
            <svg
              className="fill-white ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              height="30"
              width="30"
              aria-hidden="true"
            >
              <path d="M23.25 17.35V11.2H17.05V8.2H23.25V2.05H26.25V8.2H32.4V11.2H26.25V17.35ZM14.5 44Q13 44 11.95 42.95Q10.9 41.9 10.9 40.4Q10.9 38.9 11.95 37.85Q13 36.8 14.5 36.8Q16 36.8 17.05 37.85Q18.1 38.9 18.1 40.4Q18.1 41.9 17.05 42.95Q16 44 14.5 44ZM34.7 44Q33.2 44 32.15 42.95Q31.1 41.9 31.1 40.4Q31.1 38.9 32.15 37.85Q33.2 36.8 34.7 36.8Q36.2 36.8 37.25 37.85Q38.3 38.9 38.3 40.4Q38.3 41.9 37.25 42.95Q36.2 44 34.7 44ZM14.5 33.65Q12.4 33.65 11.425 31.95Q10.45 30.25 11.45 28.5L14.5 22.95L7 7H3.1V4H8.9L17.4 22.2H32L39.8 8.2L42.4 9.6L34.75 23.45Q34.3 24.3 33.525 24.75Q32.75 25.2 31.7 25.2H16.7L13.6 30.65Q13.6 30.65 13.6 30.65Q13.6 30.65 13.6 30.65H38.3V33.65Z" />
            </svg>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
