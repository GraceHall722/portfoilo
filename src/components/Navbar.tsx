import { useState, useEffect } from "react";
import { navlinks } from "../constants";
import { NavLink, useLocation } from "react-router-dom";
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { SiSubstack } from "react-icons/si";
import { Link } from "react-router-dom";

import { Logo, Menu, closeMenu } from "../assets";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [toggle, setToggle] = useState(false);

  const [isHoveredGithub, setIsHoveredGithub] = useState(false);
  const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);
  const [isHoveredSubstack, setIsHoveredSubstack] = useState(false);
  const [isHoveredTwitter, setIsHoveredTwitter] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="flex font-fira-code md:pb-[5px] items-center justify-between border-b-2 shadow-md border-[#0A192F]">
      <NavLink to="/" onClick={() => setActiveLink("/")}>
        <div className="flex m-[20px] md:m-[0px] md:ml-[150px] items-center justify-between md:mt-[30px]">
          <img
            src={Logo}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(98%) sepia(93%) saturate(841%) hue-rotate(75deg) brightness(105%) contrast(123%)",
            }}
          />

          <h3 className="text-white text-bold text-[25px] mx-3 hover:text-[#64FFDB]">
            Patrick
          </h3>
        </div>
      </NavLink>

      <div className="sm:flex hidden items-center justify-between mr-[150px] mt-[30px]">
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
          <button className="border hidden md1:flex border-[#64FFDB] w-auto transform transition duration-500 ease-in-out hover:scale-110">
            <a href="src/constants/0xOse.pdf" target="blank">
              <div className="mx-[20px] text-white">Resume</div>
            </a>
          </button>
        </ul>
      </div>

      {/* Responsive navigation items (for smaller screens) */}
      <div className="sm:hidden flex items-center flex-1 justify-end px-[20px]">
        <div
          className={`fixed top-0 left-0 w-full h-full backdrop-blur bg-primary-2/30 bg-opacity-75 z-20 transform ${
            toggle ? "-x-0" : "translate-x-full"
          } transition-transform duration-700 ease-in-out sm:hidden`}
        >
          <div className="flex flex-col justify-center items-center h-full space-y-4 border-b-4 border-[#64ffdb]">
            {navlinks.map((link) => (
              <NavLink
                to={link.link}
                onClick={() => {
                  setToggle(false);
                }}
                key={link.id}
              >
                <div className="flex">
                  <div className="text-[#64FFDB]">#</div>
                  <span className="border-b-2 border-transparent text-white hover:border-[#64FFDB]">
                    {link.title}
                  </span>
                </div>
              </NavLink>
            ))}
            <button className="border bg-[#64FFDB] w-auto transform transition duration-500 ease-in-out hover:scale-110">
              <a href="src/constants/0x0se.pdf" download>
                <div className="mx-[20px] text-[#0A192F]">Resume</div>
              </a>
            </button>

            <div className="flex">
              <div
                style={{
                  transform: isHoveredGithub ? "translateY(-5px)" : "none",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="mt-[100px] mx-[10px]"
              >
                <Link
                  to={"https://github.com/Patrick-Ehimen"}
                  target="_blank"
                  onMouseEnter={() => setIsHoveredGithub(true)}
                  onMouseLeave={() => setIsHoveredGithub(false)}
                >
                  <RiGithubFill size={30} color={"#939BA8"} />
                </Link>
              </div>
              <div
                style={{
                  transform: isHoveredLinkedin ? "translateY(-5px)" : "none",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="mt-[100px] mx-[10px]"
              >
                <Link
                  to={"https://www.linkedin.com/in/patrick-ehimen/"}
                  target="_blank"
                  onMouseEnter={() => setIsHoveredLinkedin(true)}
                  onMouseLeave={() => setIsHoveredLinkedin(false)}
                >
                  <RiLinkedinFill size={30} color={"#939BA8"} />
                </Link>
              </div>
              <div
                style={{
                  transform: isHoveredSubstack ? "translateY(-5px)" : "none",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="mt-[100px] mx-[10px]"
              >
                <Link
                  to={
                    "https://0xose.substack.com/?r=392mkz&utm_campaign=pub-share-checklist"
                  }
                  target="_blank"
                >
                  <SiSubstack
                    size={30}
                    color={"#939BA8"}
                    onMouseEnter={() => setIsHoveredSubstack(true)}
                    onMouseLeave={() => setIsHoveredSubstack(false)}
                  />
                </Link>
              </div>
              <div
                style={{
                  transform: isHoveredTwitter ? "translateY(-5px)" : "none",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="mt-[100px] mx-[10px]"
              >
                <Link
                  target="_blanck"
                  to={"https://twitter.com/Ose_eth"}
                  onMouseEnter={() => setIsHoveredTwitter(true)}
                  onMouseLeave={() => setIsHoveredTwitter(false)}
                >
                  <RiTwitterXFill
                    size={30}
                    color={"#939ba8"}
                    // color={isHoveredTwitter ? "#64FFDB" : "#CCD6F6"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src={toggle ? closeMenu : Menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-50 "
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
    </nav>
    // https://github.com/Patrick-Ehimen/typescript_dev_portfolio/blob/main/src/constants/0x0se.pdf
  );
};

export default Navbar;
