import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";

const Layout = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="invoices" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
