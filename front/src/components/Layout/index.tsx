import Navigation from "components/organisms/Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="py-10 px-10 sm:px-12 lg:px-8 xl:px-20 2xl:px-24">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
