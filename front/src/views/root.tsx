import Layout from "components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./Order";
import Cart from "./Cart";
import Home from "./Home";
import ErrorInfo from "components/molecules/ErrorInfo";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route
            path="*"
            element={
              <ErrorInfo>
                404 <br /> Niestety nie mamy takiej strony
              </ErrorInfo>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
