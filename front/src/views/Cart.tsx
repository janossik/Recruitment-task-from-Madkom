import Button from "components/atoms/Button";
import BookInCartMesh from "components/organisms/BookInCartMesh";
import useCart from "hooks/useCart";
import { Link } from "react-router-dom";
import { printPrice } from "utils";

const Cart = () => {
  const { fullPrice } = useCart();
  return (
    <>
      <BookInCartMesh />
      <footer className="flex flex-col pt-8 justify-around items-center gap-5">
        <div className="text-xl">Wartość koszyka {printPrice(fullPrice)}</div>
        <Link to="/buy" className={fullPrice <= 0 ? "pointer-events-none" : ""}>
          <Button disabled={fullPrice <= 0}>Dalej</Button>
        </Link>
      </footer>
    </>
  );
};

export default Cart;
