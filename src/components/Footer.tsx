import { useState } from "react";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { SiSubstack } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

import { Logo } from "../assets";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isHoveredGithub, setIsHoveredGithub] = useState(false);
  const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);
  const [isHoveredSubstack, setIsHoveredSubstack] = useState(false);

  return (
    <footer className="flex-row font-fira-code ">
      <div className="flex border-t border-[#939BA8] w-11/12 ml-[50px]">
        <NavLink to="/" onClick={() => setActiveLink("/")}>
          <div className="flex ml-[150px] items-center justify-between mt-[50px]">
            <img src={Logo} />
            <h3 className="text-white text-base text-bold mx-3">Patrick</h3>

            <p className="text-[#939BA8]">osepatrick.ehimen77@gmail.com</p>
          </div>
          <div>
            <p className="ml-[150px] text-[#939BA8] my-[10px]">
              Blockchanin Engineer{" "}
            </p>
          </div>
        </NavLink>

        <div className="flex-row mt-[50px] mx-[150px]">
          <p className="flex text-[#939BA8] pb-[10px]">You can find me here:</p>
          <div className="flex px-[10px] hover:">
            <Link
              target="_blank"
              to={"https://github.com/Patrick-Ehimen"}
              className="px-[10px] transform hover:scale-110"
              onMouseEnter={() => setIsHoveredGithub(true)}
              onMouseLeave={() => setIsHoveredGithub(false)}
            >
              <RiGithubFill
                size={24}
                color={isHoveredGithub ? "#64FFDB" : "#939BA8"}
              />
            </Link>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/patrick-ehimen/"}
              className="px-[10px] transform hover:scale-110"
              onMouseEnter={() => setIsHoveredLinkedin(true)}
              onMouseLeave={() => setIsHoveredLinkedin(false)}
            >
              <RiLinkedinFill
                size={24}
                color={isHoveredLinkedin ? "#64FFDB" : "#939BA8"}
              />
            </Link>
            <Link
              target="_blank"
              to={"#"}
              className="px-[10px] transform hover:scale-110"
              onMouseEnter={() => setIsHoveredSubstack(true)}
              onMouseLeave={() => setIsHoveredSubstack(false)}
            >
              <SiSubstack
                size={24}
                color={isHoveredSubstack ? "#64FFDB" : "#939BA8"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-[150px] p-4 text-[#939BA8]">
        <p className="pl-[120px] pt-[20px] mt-[20px] border-t border-[#939BA8]">
          Copyright © 2024 - All right reserved by Patrick-Ehimen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
