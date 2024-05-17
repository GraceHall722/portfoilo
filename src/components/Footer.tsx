import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Figma } from "../assets";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/contact-me") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <section className="justify-center flex items-center mt-[100px] font-fira-code flex-col">
      <div className="text-[#64FFDB] text-[20px]">
        <span className="text-[18px]">#</span>What's Next?
      </div>
      <div className="text-[#CCD6F6] md:text-[50px] text-[30px] text-bold">
        Get In Touch
      </div>
      <div className="text-[#636E8A] text-center mx-[40px]">
        I'm always open for any new opportunities,{" "}
        <br className="hidden md:flex" />
        my inbox is a click away. Whether you have a question or just want to
        say hi, <br className="hidden md:flex" />
        I'll get back to you!
      </div>
      <button className="my-[50px] border text-[#64ffdb] border-[#64ffdb] rounded-md transform transition duration-500 ease-in-out hover:scale-110">
        <Link to="/contact-me">
          <div className="text-[18px] mx-[15px] my-[7px]">Contact Me</div>
        </Link>
      </button>

      <div className="font-fira-code text-[#596580] mt-[150px] mb-[20px] text-[12px] flex hover:text-[#64ffdb]">
        Design inspired by
        <Link
          to={
            "https://www.figma.com/file/frqV7JVaKstQF3IRy7LjXm/Portfolio-(Community)?node-id=158%3A1351&mode=dev"
          }
          className="flex mx-[5px]"
          target="_blank"
        >
          Elias <img src={Figma} className="mx-[5px]" />
        </Link>
      </div>

      <div
        className="z-10 fixed bottom-0 md1:hidden right-0 hidden md:flex flex-row px-12 items-center justify-between"
        style={{ transform: "translateY(0%) translateZ(0px)" }}
      >
        <div className="flex flex-col space-y-8 items-center justify-center">
          <div className="flex flex-col space-y-3 items-center justify-center">
            <a href={import.meta.env.VITE_APP_RESUME_LINK} target="blank">
              <div
                style={{ writingMode: "vertical-rl" }}
                className="font-fira-code text-[20px] text-[#CCD6F6] hover:text-[#64ffdb] transform transition duration-500 ease-in-out hover:scale-110"
              >
                My Resume
              </div>
            </a>
            <div className="h-36 w-0.5 bg-gray-400 mt-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
