import Layout from "components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buy from "./Buy";
import Cart from "./Cart";
import Home from "./Home";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="buy" element={<Buy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
