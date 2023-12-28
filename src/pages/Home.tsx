import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FixedSideSocials } from "../components";

const Home = () => {
  return (
    <section className="sm:flex hidden my-[150px] sm:flex-row flex-col bg-[#0A192F]">
      <div className="flex flex-col font-fira-code ml-[150px]">
        <div className="text-[25px]">
          <h3 className="text-[#64FFDB]">
            Hi all, <span className="text-[#FFBF00]">I am</span>
          </h3>
        </div>
        <div className="text-white text-[50px]">Patrick Ehimen.</div>
        <div className="text-[30px] text-[#939BA8]">
          I am a{" "}
          <span className="text-[#64ffd8]">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Blockchain Engineer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front-end Developer",
                2000,
                "Solidity Developer",
                2000,
              ]}
              wrapper="span"
              // speed={40}
              style={{ fontSize: "30px", display: "" }}
              repeat={Infinity}
            />
          </span>{" "}
          <br />
          and <span className="text-[#FFBF00]">Technical Writer..</span>
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
