import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavItem({ to, children, activeStyle }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? activeStyle
          : "hover:underline underline-offset-4 hover:bg-gray-200 rounded-sm"
      }
    >
      {children}
    </NavLink>
  );
}

NavItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  activeStyle: PropTypes.string,
};
