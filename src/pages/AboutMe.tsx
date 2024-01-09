import { FixedSideSocials } from "../components";
import { Dots, Image2 } from "../assets";
import { skills } from "../constants";
import { Frame29, Square } from "../assets";

const Home = () => {
  return (
    <div>
      <section className="lg:flex-row md:my-[150px] my-[50px] flex flex-col bg-[#0A192F]">
        <div className="md:flex-row flex-col">
          <div className="flex flex-col font-fira-code mx-[50px] md:ml-[150px] md:w-[500px]">
            <div className="md:text-[25px] text-[18px] flex">
              <span className="text-[#64FFDB]">/</span>
              <h3 className="text-white">about-me</h3>
            </div>
            <div className="text-white md:text-[20px] mb-[100px] text-[35px]">
              Who am i?
            </div>

            <p className="my-[10px] text-[#939ba8]">
              Skilled blockchain developer specializing in{" "}
              <br className="hidden md:flex" />
              secure smart contract design and DApp development.
              <br className="" />
              Proficient in Ethereum and other blockchain networks.
            </p>
            <br />
            <p className="my-[10px] text-[#939ba8]">
              Skilled blockchain developer specializing in{" "}
              <br className="hidden md:flex" />
              secure smart contract design and DApp development.
              <br className="" />
              Proficient in Ethereum and other blockchain networks.
            </p>
          </div>
        </div>

        <div className="relative lg:flex-row flex-col mt-[20px] md:mt-[30px] md1:mt-[30px] md:mx-[100px] md1:mx-auto">
          <div className="absolute top-8 left-8 lg:left-4 z-[10]">
            <img src={Dots} />
          </div>
          <div className="absolute bottom-16 right-12 z-[10] lg:bottom-20 xl:bottom-12">
            <img src={Dots} />
          </div>
          <div className="relative flex-grow xl:right-0 lg:right-12">
            <img src={Image2} className="md:w-3/4 md1:w-full" />
          </div>
        </div>

        <FixedSideSocials />
      </section>
      <div className="md:ml-[150px] md:-mt-[50px] mt-5 md:hidden lg:flex">
        <div className="font-fira-code flex text-[30px] ml-[50px] md:ml-[00px] ">
          <span className="text-[#64FFDB]">#</span>
          <div className="text-white">skills</div>
        </div>

        <div className="md:flex-row md:w-[500px] flex-col flex space-x-4 justify-between items-center md:mx-[100px] mx-[50px] font-fira-code lg:-ml-[165px] xl:-ml-[50px] mt-[20px] mb-[50px]">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`border border-[#64FFDB] mt-[20px] w-9/12 transform transition duration-500 ease-in-out hover:scale-95
                 ${index === 0 ? "ml-[10px]" : ""}`}
            >
              <div className="border border--[#64FFDB]">
                <h2 className="text-white m-[20px] text-[25px]">
                  {skill.title}
                </h2>
              </div>
              <p className="text-[#939ba8] m-[20px]">{skill.skillBody}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-2 md:ml-[65px] ss:hidden lg:hidden md1:ml-[150px] font-fira-code mt-[20px] mb-[50px] w-[700px]">
        {skills.slice(0, 3).map((skill, index) => (
          <div
            key={skill.id}
            className={`border border-[#64FFDB] mt-[20px] w-9/12 transform transition duration-500 ease-in-out hover:scale-95
       ${index === 0 ? "ml-[10px]" : ""}`}
          >
            <div className="border border-b-[#64FFDB]">
              <h2 className="text-white m-[20px] text-[25px]">{skill.title}</h2>
            </div>
            <p className="text-[#939ba8] m-[20px]">{skill.skillBody}</p>
          </div>
        ))}
        <div className="md:grid  md:grid-cols-2 md:gap-4 md:ml-[70px] mx-[50px] font-fira-code lg:-ml-[15px] xl:ml-[50px] mt-[20px] mb-[50px] w-[550px]">
          {skills.slice(3, 5).map((skill, index) => (
            <div
              key={skill.id}
              className={`border border-[#64FFDB] mt-[20px] w-9/12 transform transition duration-500 ease-in-out hover:scale-95
         ${index === 0 ? "ml-[10px]" : ""}`}
            >
              <div className="border border-b-[#64FFDB]">
                <h2 className="text-white m-[20px] text-[25px]">
                  {skill.title}
                </h2>
              </div>
              <p className="text-[#939ba8] m-[20px]">{skill.skillBody}</p>
            </div>
          ))}
        </div>
      </div>

      <img
        src={Frame29}
        className="absolute md:bottom-10 hidden md:flex bottom-48 md:left-0 right-4"
      />
      <img src={Square} className="absolute md:bottom-10 top-36 right-0" />
    </div>
  );
};

export default Home;
