import Button from "components/atoms/Button";
import BookInCartMesh from "components/organisms/BookInCartMesh";
import useCart from "hooks/useCart";
import { Link } from "react-router-dom";
import { printPrice } from "utils";

const PreviewCart = () => {
  const { fullPrice } = useCart();

  return (
    <div className="hidden absolute bg-slate-50 top-full w-screen right-0 mt-px p-2 gap-5 sm:w-96 sm:right-6 group-hover:grid">
      <div className="flex font-bold items-center">
        <span className="mr-auto">Twój koszyk</span>
        <span className="ml-auto text-sm">
          Wartość koszyka {printPrice(fullPrice)}
        </span>
      </div>
      <BookInCartMesh preview />
      <div className="flex justify-around">
        <Link to="/cart">
          <Button className="bg-transparent hover:bg-blue-500 text-blue-700 text-xs font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded uppercase ">
            Sprawdź koszyk
          </Button>
        </Link>
        <Button>Do kasy</Button>
      </div>
    </div>
  );
};

export default PreviewCart;
