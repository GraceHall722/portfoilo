import { useState } from "react";
import { navlinks } from "../constants";
import { NavLink, useLocation } from "react-router-dom";

import { Logo } from "../assets";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <nav className="flex font-fira-code items-center justify-between">
      <NavLink to="/" onClick={() => setActiveLink("/")}>
        <div className="flex ml-[150px] items-center justify-between mt-[50px]">
          <img src={Logo} />
          <h3 className="text-white text text-bold text-[25px] mx-3 hover:text-[#64FFDB]">
            Patrick
          </h3>
        </div>
      </NavLink>

      <div className="flex items-center justify-between mr-[150px] mt-[50px]">
        <ul className="flex text-textColor-1">
          {navlinks.map((link) => (
            <li
              key={link.id}
              className="flex mx-[20px]"
              style={activeLink === link.link ? { color: "white" } : {}}
            >
              <NavLink to={link.link} onClick={() => setActiveLink(link.link)}>
                <div className="flex">
                  <div className="text-[#64FFDB]">#</div>
                  <span className="border-b-2 border-transparent hover:border-[#64FFDB]">
                    {link.title}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
          <button className="border border-[#64FFDB] w-auto transform transition duration-500 ease-in-out hover:scale-110">
            <a href="src/constants/0x0se.pdf" download>
              <div className="mx-[20px] text-white">Resume</div>
            </a>
          </button>
        </ul>
      </div>
    </nav>
    // https://github.com/Patrick-Ehimen/typescript_dev_portfolio/blob/main/src/constants/0x0se.pdf
  );
};

export default Navbar;
