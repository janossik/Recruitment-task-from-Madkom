import CustomNavLink from "components/atoms/CustomNavLink";
import useCart from "hooks/useCart";
import PreviewCart from "../PreviewCart";

const Navigation = () => {
  const { quantity } = useCart();
  return (
    <nav className="fixed top-0 left-0 h-14 py-0 flex items-center w-screen shadow bg-slate-50">
      <CustomNavLink to="/">Home</CustomNavLink>

      <div className="group relative h-full ml-auto flex items-center">
        <CustomNavLink to="/cart" className="block flex">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center py-1.5 px-4 rounded-full">
            {quantity}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            height="38"
            width="38"
            className="fill-gray-800 hover:fill-blue-500"
          >
            <path d="M14.35 43.95Q12.85 43.95 11.8 42.9Q10.75 41.85 10.75 40.35Q10.75 38.85 11.8 37.8Q12.85 36.75 14.35 36.75Q15.8 36.75 16.875 37.8Q17.95 38.85 17.95 40.35Q17.95 41.85 16.9 42.9Q15.85 43.95 14.35 43.95ZM34.35 43.95Q32.85 43.95 31.8 42.9Q30.75 41.85 30.75 40.35Q30.75 38.85 31.8 37.8Q32.85 36.75 34.35 36.75Q35.8 36.75 36.875 37.8Q37.95 38.85 37.95 40.35Q37.95 41.85 36.9 42.9Q35.85 43.95 34.35 43.95ZM11.75 10.95 17.25 22.35H31.65Q31.65 22.35 31.65 22.35Q31.65 22.35 31.65 22.35L37.9 10.95Q37.9 10.95 37.9 10.95Q37.9 10.95 37.9 10.95ZM10.25 7.95H39.7Q41.3 7.95 41.725 8.925Q42.15 9.9 41.45 11.1L34.7 23.25Q34.2 24.1 33.3 24.725Q32.4 25.35 31.35 25.35H16.2L13.4 30.55Q13.4 30.55 13.4 30.55Q13.4 30.55 13.4 30.55H37.95V33.55H13.85Q11.75 33.55 10.825 32.15Q9.9 30.75 10.85 29L14.05 23.1L6.45 7H2.55V4H8.4ZM17.25 22.35H31.65Q31.65 22.35 31.65 22.35Q31.65 22.35 31.65 22.35Z" />
          </svg>
        </CustomNavLink>
        <PreviewCart />
      </div>
    </nav>
  );
};

export default Navigation;
