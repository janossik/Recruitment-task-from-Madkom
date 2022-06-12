import { NavLinkProps, NavLink } from "react-router-dom";

const CustomNavLink = ({ children, ...rest }: NavLinkProps) => (
  <NavLink
    {...rest}
    className={({ isActive }) =>
      `${rest.className} px-5 py-1 transition ease-in-out ${
        isActive ? "text-gray-800" : "hover:text-blue-500"
      }`
    }
  >
    {children}
  </NavLink>
);

export default CustomNavLink;
