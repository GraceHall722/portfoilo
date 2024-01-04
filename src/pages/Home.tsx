import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FixedSideSocials } from "../components";
import { Dots, Img1, Image } from "../assets";

const Home = () => {
  return (
    <section className="lg:flex-row md:my-[150px] my-[50px] flex flex-col bg-[#0A192F]">
      <div className="md:flex-row flex-col happy">
        <div className="flex flex-col font-fira-code mx-[50px] md:ml-[150px] md:w-[500px]">
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
            Skilled blockchain developer specializing in{" "}
            <br className="hidden md:flex" />
            secure smart contract design and DApp development.
            <br className="" />
            Proficient in Ethereum and other blockchain networks.
          </p>

          <Link to="/contact-me">
            <button className="border border-[#64FFDB] h-[50px] w-auto mt-[10px] transform transition duration-500 ease-in-out hover:scale-110">
              <div className="mx-[20px] text-white">Contact Me</div>
            </button>
          </Link>
        </div>
      </div>

      <div className="relative cool lg:flex-row flex-col mt-[20px] md:mt-[30px] md1:mt-[30px] md:mx-[100px] md1:mx-auto">
        <div className="absolute top-12 left-8 lg:left-0">
          <img src={Img1} />
        </div>
        <div className="absolute bottom-16 right-12 z-[10] lg:bottom-20 xl:bottom-12">
          <img src={Dots} />
        </div>
        <div className="relative flex-grow xl:right-0 lg:right-12">
          <img src={Image} className="md:w-3/4 md1:w-full" />
        </div>

        <div className="font-fira-code flex text-[#939ba8] ml-[5px] border my-2 mx-[20px]">
          <div className="w-8 h-8 bg-[#64ffdb] m-2 lg:m-[15px] xl:m-2"></div>
          <div className="my-3 ml-2">
            Currently Working on{" "}
            <Link to={"#"}>
              <span className="font-bold text-[#ffbf00]">Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      <FixedSideSocials />
    </section>
  );
};

export default Home;
