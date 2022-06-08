import Navigation from "components/Navigation";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="px-2">
        <Outlet />
      </main>
    </>
  );
};

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop-card" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
