import { useState } from "react";
import { FixedSideSocials } from "../components";
import { Square, Discord, Twitter } from "../assets";
import { contact } from "../constants";

import { Link } from "react-router-dom";

const ContactMe = () => {
  const [isHoveredTwitter, setIsHoveredTwitter] = useState(false);
  const [isHoveredDiscord, setIsHoveredDiscord] = useState(false);
  return (
    <div>
      <section className="md:flex-row md:my-[150px] my-[50px] flex flex-col bg-[#0A192F]">
        <div className="md:flex-row flex-col">
          <div className="flex flex-col font-fira-code mx-[50px] md:ml-[150px] md:w-[500px]">
            <div className="md:text-[25px] text-[18px] flex">
              <span className="text-[#64FFDB]">/</span>
              <h3 className="text-white">contacts</h3>
            </div>
            <div className="text-white md:text-[20px] mb-[100px] text-[35px]">
              Reach out to me!
            </div>

            <p className="my-[10px] text-[#939ba8]">
              I’m not currently looking for any new opportunities, my inbox is
              always open.
              {/* <br className="hidden md:flex" /> */}
              I’m also interested in freelance opportunities.
              <br className="" />
              <p className="my-[20px]">
                {" "}
                However, if you have other request or question, don’t hesitate
                to contact me.
              </p>
            </p>
          </div>

          <div className="relative ml-[150px] lg:hidden hidden md:flex flex-col md:mt-[30px] md1:mt-[30px]  border h-[150px] px-5 w-max border-[#FFBF00]">
            {contact.map((item) => (
              <div key={item.id} className="font-fira-code">
                <h3 className="text-white text-[20px] mb-[20px] py-[10px]">
                  {item.title}
                </h3>
                <Link to={"#"} className="flex ml-[5px]">
                  <img src={item.icon1} alt="Icon 1" />
                  <h3 className="px-[5px] text-white">OxOseeth</h3>
                </Link>
                <a
                  href="mailto:0xosepatrick@gmail.com"
                  className="flex mt-[5px]"
                >
                  <img src={item.icon2} alt="Icon 2" />
                  <h3 className="px-[5px] text-white">
                    0xosepatrick@gmail.com
                  </h3>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex lg:flex-row md:hidden lg:flex flex-col mt-[20px] md:mt-[30px] md1:mt-[30px]  border h-[150px] px-5 xl:-ml-[30px] lg:-ml-[85px] w-max ml-[50px] border-[#FFBF00]">
          {contact.map((item) => (
            <div key={item.id} className="font-fira-code">
              <h3 className="text-white text-[20px] mb-[20px] py-[10px]">
                {item.title}
              </h3>
              <Link to={"#"} className="flex ml-[5px]">
                <img src={item.icon1} alt="Icon 1" />
                <h3 className="px-[5px] text-white">OxOseeth</h3>
              </Link>
              <a
                href="mailto:0xosepatrick.@gmail.com"
                className="flex mt-[5px]"
              >
                <img src={item.icon2} alt="Icon 2" />
                <h3 className="px-[5px] text-white">0xosepatrick.@gmail.com</h3>
              </a>
            </div>
          ))}
        </div>
        <FixedSideSocials />
        <img src={Square} className="absolute md:bottom-10 top-36 right-0" />
      </section>

      <div className="flex flex-col font-fira-code mx-[50px] md:ml-[150px] md:w-[500px] mt-[30px] md:-mt-[50px] mb-[50px] border-[#FFBF00]">
        <div className="md:text-[25px] text-[18px] flex">
          <span className="text-[#64FFDB]">#</span>
          <h3 className="text-white">all-media</h3>
        </div>
        <div className="flex md:flex-row flex-col text-white  font-fira-code mt-2">
          <Link to={"https://twitter.com/0xOse_eth"} className="flex">
            <img
              src={Twitter}
              onMouseEnter={() => setIsHoveredTwitter(true)}
              onMouseLeave={() => setIsHoveredTwitter(false)}
              style={{
                transform: isHoveredTwitter ? "translateY(-5px)" : "none",
                transition: "transform 0.3s ease-in-out",
              }}
            />
            <h3 className="mx-[10px] pt-1 hover:text-[#64FFDB]">0xOse_eth</h3>
          </Link>
          <Link to={"#"} className="flex">
            <img
              src={Discord}
              className={`${
                isHoveredDiscord ? "#64FFDB" : "#939BA8"
              } hover:text-[#64FFDB]`}
              onMouseEnter={() => setIsHoveredDiscord(true)}
              onMouseLeave={() => setIsHoveredDiscord(false)}
              style={{
                transform: isHoveredDiscord ? "translateY(-5px)" : "none",
                transition: "transform 0.3s ease-in-out",
              }}
            />
            <h3 className="mx-[10px] pt-1 hover:text-[#64FFDB]">0xOse</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
