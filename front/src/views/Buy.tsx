import Button from "components/atoms/Button";
import useCart from "hooks/useCart";
import { ClassAttributes, InputHTMLAttributes } from "react";
import { Link } from "react-router-dom";

const InputField = ({
  label,
  name,
  ...rest
}: JSX.IntrinsicAttributes &
  ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> & { label: string }) => {
  return (
    <label className="block text-gray-700 text-sm font-semibold mb-2">
      {label}
      <input
        name={name || label}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        {...rest}
      />
    </label>
  );
};

const Buy = () => {
  /* 
##### 3. Strona zawierająca formularz potrzebny do złożenia zamówienia
###### Lista funkcjonalności składająca z:
* przygotowanie formularza z polami:
    * imię,
    * nazwisko,
    * miejscowość,
    * kod pocztowy.
* przycisk `ZAMAWIAM I PŁACĘ` po naciśnięciu którego zostaną wysłane dane pod
 endpoint **POST** _/order_.
    */
  const { booksInCart, bookIDs } = useCart();
  return (
    <>
      <Link to="/cart" className="block cursor-pointer">
        {"← wróć do koszyka"}
      </Link>
      <div className="max-w-md mx-auto">
        <p className="text-lg font-bold pb-6">Finalizacja transakcji</p>
        <form
          className="flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const data = {
              order: bookIDs.map((id) => {
                return { id: Number(id), quantity: booksInCart[id].quantity };
              }),
              first_name: "Marcin",
              last_name: "Czaniecki",
              city: "Gdynia",
              zip_code: "00-000",
            };
            const rawResponse = await fetch("http://localhost:3001/api/order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            const content = await rawResponse.json();
            console.log(
              JSON.stringify({
                order: bookIDs.map((id) => {
                  return { id: Number(id), quantity: booksInCart[id].quantity };
                }),
                first_name: "Marcin",
                last_name: "Czaniecki",
                city: "Gdynia",
                zip_code: "00-000",
              })
            );
            console.log(content);
          }}
        >
          <InputField label="Imię" name="first_name" placeholder="Imię" />
          <InputField
            label="Nazwisko"
            name="last_name"
            placeholder="Nazwisko"
          />

          <div className="flex gap-2">
            <InputField
              label="Kod pocztowy"
              name="zip_code"
              pattern="[0-9]*-[0-9]*"
              placeholder="00-000"
              onChange={(e) => {
                if (/\d{2}-\d{3}/.test(e.target.value)) {
                  console.log(e.target.value);
                }
              }}
            />
            <InputField
              label="Miejscowaość"
              name="city"
              placeholder="Miejscowaość"
            />
          </div>
          <Button>ZAMAWIAM I PŁACĘ</Button>
        </form>
      </div>
    </>
  );
};

export default Buy;
