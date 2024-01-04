import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FixedSideSocials } from "../components";

const Home = () => {
  return (
    <section className="md:flex md:my-[150px] my-[50px] flex-col bg-[#0A192F]">
      <div className="flex flex-col font-fira-code mx-[50px] md:ml-[150px]">
        <div className="md:text-[25px] text-[18px]">
          <h3 className="text-[#64FFDB]">
            Hi all, <span className="text-[#FFBF00]">I am</span>
          </h3>
        </div>
        <div className="text-white md:text-[50px] text-[35px]">
          Patrick Ehimen.
        </div>
        <div className="md:text-[30px] text-[20px] text-[#939BA8]">
          I am a{" "}
          <span className="text-[#64ffd8]">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Blockchain Engineer",
                500, // wait 1s before replacing "Mice" with "Hamsters"
                "Front-end Developer",
                500,
                "Solidity Developer",
                500,
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "20px", display: "" }}
              repeat={Infinity}
            />
          </span>{" "}
          <br />
          and <span className="text-[#FFBF00] ]">Technical Writer..</span>
        </div>
        <p className="my-[10px] text-[#939ba8]">
          Skilled blockchain developer specializing in <br />
          secure smart contract design and DApp development.
          <br />
          Proficient in Ethereum and other blockchain networks.
        </p>

        <Link to="/contact-me">
          <button className="border border-[#64FFDB] h-[50px] w-auto mt-[10px] transform transition duration-500 ease-in-out hover:scale-110">
            <div className="mx-[20px] text-white">Contact Me</div>
          </button>
        </Link>
      </div>

      <FixedSideSocials />
    </section>
  );
};

export default Home;
