import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
        Although I'm Always open for any new opportunities,{" "}
        <br className="hidden md:flex" />
        my inbox is open. Whether you have a question or just want to say hi,{" "}
        <br className="hidden md:flex" />
        I'll try my best to get back to you!
      </div>
      <button className="my-[50px] border text-[#64ffdb] border-[#64ffdb] rounded-md transform transition duration-500 ease-in-out hover:scale-110">
        <Link to="/contact-me">
          <div className="text-[18px] mx-[15px] my-[7px]">Contact Me</div>
        </Link>
      </button>

      <div
        className="z-10 fixed bottom-0 md1:hidden right-0 hidden md:flex flex-row px-12 items-center justify-between"
        style={{ transform: "translateY(0%) translateZ(0px)" }}
      >
        <div className="flex flex-col space-y-8 items-center justify-center">
          <div className="flex flex-col space-y-3 items-center justify-center">
            <a href="src/constants/0x0se.pdf" download>
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
