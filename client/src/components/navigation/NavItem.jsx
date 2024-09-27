/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function NavItem({ to = "/", icon, children }) {
  return (
    <NavLink
      to={`${to}`}
      className={({ isActive }) =>
        isActive ? "opacity-100 transition-all" : "opacity-50 transition-all"
      }
    >
      {icon} {children}
    </NavLink>
  );
}

export default NavItem;
