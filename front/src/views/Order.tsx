import { resetCartBook } from "app/cart";
import { resetPurchaseForm } from "app/purchaseForm";
import { RootState } from "app/store";
import IF from "components/atoms/IF";
import ErrorInfo from "components/molecules/ErrorInfo";
import InputFieldPurchaseForm from "components/molecules/InputFieldPurchaseForm";
import Modal from "components/molecules/Modal";
import BookInCartMesh from "components/organisms/BookInCartMesh";
import useCart from "hooks/useCart";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ResultOrder } from "types";

const FailureOrder = () => (
  <ErrorInfo>
    Niestety nie udało się zrealizować Twojego zamówienia. Sprawdź czy wszystkie
    dane są poprawne.
  </ErrorInfo>
);

const SucessfulOrder = (props: ResultOrder | null) => (
  <div>
    <p className="text-lg font-bold">Dziekujemy za zamówienie</p>
    <hr />
    <div className="py-4">
      <div className="text-xl pb-3">Twoje zamówienie</div>
      <div>
        {props?.data?.first_name} {props?.data?.last_name}
      </div>
      <div>
        {props?.data?.zip_code} {props?.data?.city}
      </div>
    </div>
    <div>
      <BookInCartMesh preview hiddenActions />
    </div>
  </div>
);

const Order = () => {
  const navigate = useNavigate();
  const { booksInCart, bookIDs } = useCart();
  const [result, setResult] = useState<ResultOrder | null>(null);
  const dataForm = useSelector((state: RootState) => state.purchaseForm);
  const dispatch = useDispatch();

  const formHandling = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const order = bookIDs.map((id) => ({
      id: Number(id),
      quantity: booksInCart[id].quantity,
    }));
    const response = await fetch("http://localhost:3001/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order, ...dataForm }),
    });
    const content = (await response.json()) as ResultOrder;
    setResult(content);
    if (content.error) {
      console.error(
        new Error(
          `${content.error?.message} ${Object.keys(
            content.error?.violations
          ).map(
            (item) =>
              content.error?.violations[
                item as keyof typeof content.error.violations
              ]
          )}`
        )
      );
    } else {
      dispatch(resetPurchaseForm());
    }
  };

  return (
    <>
      <Link to="/cart" className="block cursor-pointer">
        {"← wróć do koszyka"}
      </Link>
      <div className="max-w-md mx-auto">
        <p className="text-lg font-bold pb-6">Finalizacja transakcji</p>
        <form className="flex flex-col gap-4" onSubmit={formHandling}>
          <InputFieldPurchaseForm
            label="Imię"
            placeholder="Imię"
            name="first_name"
          />

          <InputFieldPurchaseForm
            label="Nazwisko"
            name="last_name"
            placeholder="Nazwisko"
          />
          <div className="flex gap-2">
            <div>
              <InputFieldPurchaseForm
                label="Kod pocztowy"
                name="zip_code"
                pattern="[0-9]*-[0-9]*"
                placeholder="00-000"
              />
            </div>
            <div>
              <InputFieldPurchaseForm
                label="Miejscowaość"
                name="city"
                placeholder="Miejscowaość"
              />
            </div>
          </div>
          <Modal
            onConfirm={() => {
              if (!result?.error) {
                /* Counteraction: Form submission canceled because the form is not connected */
                setTimeout(() => {
                  navigate("/");
                }, 500);
              }
            }}
            confirmButtonContent="Wróć do sklepu"
            closeButtonContent="Wróć do formularza"
            openButtonContent="Zamawiam i płacę"
            onClose={() => {
              if (!result?.error) {
                dispatch(resetCartBook());
              }
            }}
            disabled={
              !Boolean(
                dataForm.city &&
                  dataForm.first_name &&
                  dataForm.last_name &&
                  dataForm.zip_code &&
                  bookIDs.length
              )
            }
          >
            <IF condition={result?.data}>
              <SucessfulOrder data={result?.data} />
            </IF>
            <IF condition={result?.error}>
              <FailureOrder />
            </IF>
          </Modal>
        </form>
      </div>
    </>
  );
};

export default Order;
