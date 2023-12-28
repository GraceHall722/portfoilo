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
    <footer className="md:flex-row flex-col font-fira-code ">
      <div className="flex flex-col md:flex-row border-t border-[#939BA8] w-11/12 ml-4 md:ml-[50px]">
        <NavLink to="/" onClick={() => setActiveLink("/")}>
          <div className="flex flex-col md:flex-row ml-4 md:ml-10 md1:ml-[150px] items-center justify-between mt-10 md:mt-[50px]">
            <div className="flex flex-col mb-2">
              <div className="flex mb-2">
                <img src={Logo} className="w-[20px] h-[30px] flex" />
                <h3 className="text-white text-base text-bold mx-3 flex">
                  Patrick
                </h3>
              </div>
              <p className="text-[#939BA8] flex-col">
                osepatrick.ehimen77@gmail.com
              </p>
            </div>
          </div>
          <div>
            <p className="ss:ml-[65px] ssm:ml-[150px] md:ml-[43px] md1:ml-[150px] text-[#939BA8] my-2 md:my-[10px]">
              Blockchanin Engineer{" "}
            </p>
          </div>
        </NavLink>

        <div className="flex flex-col md1:flex-row mt-[50px] ss:ml-[65px] ssm:ml-[150px] ml-[100px] md:ml-[35px] lg:mx-[150px]">
          <p className="flex text-[#939BA8] pb-2 md:pb-[10px]">
            You can find me here:
          </p>
          <div className="flex px-[10px]">
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
      <div className="mx-4 md1:mx-[150px] md:ml-[30px] p-4 md1:w-9/12 text-[#939BA8]">
        <p className=" pl-4 md:pl-[120px] pt-4 md:pt-[20px] mt-4 md:mt-[20px] border-t border-[#939BA8] text-center md:mx-[50px] lg:text-justify">
          Copyright © 2024 - All right reserved by Patrick-Ehimen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
