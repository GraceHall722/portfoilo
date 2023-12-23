import { navlinks } from "../constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {navlinks.map((link) => (
        <NavLink key={link.id} to={link.link}>
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
