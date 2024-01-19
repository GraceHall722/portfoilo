import { FixedSideSocials, Experience, SmallerProjects } from "../components";
import { homeProjects, smallProjects, smallProjects2 } from "../constants";

import { Link } from "react-router-dom";

import { Frame29, Square } from "../assets";

const Portfolio = () => {
  return (
    <div>
      <section className="md:mx-[150px] mx-[30px] mt-[100px] flex flex-col mb-[15px] md:flex-row">
        <div className="font-fira-code text-white text-[32px] flex">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row">
              <span className="text-[#64ffdb] flex flex-row">#</span>
              Experience
            </div>
            <div className="md1:w-96 md:w-48 h-1 ml-2 mt-[25px] bg-[#FFBF00]"></div>
          </div>
        </div>
      </section>
      <div className="md:ml-[150px] ml-[50px] font-fira-code text-[#939BA8] w-6/12">
        // Click on the work experiences to see more details
      </div>

      <Experience />

      <section className="lg:flex-row md:my-[150px] my-[50px] flex flex-col bg-[#0A192F]">
        <div className="md:flex-row flex-col">
          <div className="flex flex-col font-fira-code mx-[50px] md:ml-[150px] md:w-[500px]">
            <div className="md:text-[25px] text-[18px] flex">
              <span className="text-[#64FFDB]">/</span>
              <h3 className="text-white">projects</h3>
            </div>
            <div className="text-white md:text-[20px] mb-[100px] text-[35px]">
              List of my projects
            </div>
          </div>

          <div className="md:ml-[150px] ml-[50px]">
            <div className="md:text-[25px] text-[18px] flex">
              <span className="text-[#FFBF00]">#</span>
              <h3 className="text-white">complete-dapps</h3>
            </div>
          </div>

          <div className="md:flex-row flex-col flex space-x-4 justify-between items-center md:mx-[100px] mx-[50px] font-fira-code md1:mx-[150px] mt-[20px] mb-[50px]">
            {homeProjects.map((project, index) => (
              <div
                key={project.id}
                className={`border mt-[20px] w-9/12 transform transition duration-500 ease-in-out hover:scale-95 ${
                  index === 0 ? "ml-[10px]" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full"
                />
                <div className="border text-[#939BA8]">
                  <p className="mx-[20px]">{project.skill}</p>
                </div>
                <h2 className="text-white m-[20px] text-[25px]">
                  {project.title}
                </h2>
                <p className="text-[#939ba8] mx-[20px]">{project.descr}</p>
                <Link to={project.link}>
                  <button className="border border-[#64FFDB] text-white text-[18px] font-bold m-[20px] p-[10px] transform transition duration-500 ease-in-out hover:scale-110 hover:border-[#FFBF00]">
                    View Project
                  </button>{" "}
                </Link>
              </div>
            ))}
          </div>

          <div className="md:flex-row flex-col flex space-x-4 justify-between items-center md:mx-[100px] mx-[50px] font-fira-code md1:mx-[150px] mt-[20px] mb-[50px]">
            {homeProjects.map((project, index) => (
              <div
                key={project.id}
                className={`border mt-[20px] w-9/12 transform transition duration-500 ease-in-out hover:scale-95 ${
                  index === 0 ? "ml-[10px]" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full"
                />
                <div className="border text-[#939BA8]">
                  <p className="mx-[20px]">{project.skill}</p>
                </div>
                <h2 className="text-white m-[20px] text-[25px]">
                  {project.title}
                </h2>
                <p className="text-[#939ba8] mx-[20px]">{project.descr}</p>
                <Link to={project.link}>
                  <button className="border border-[#64FFDB] text-white text-[18px] font-bold m-[20px] p-[10px] transform transition duration-500 ease-in-out hover:scale-110 hover:border-[#FFBF00]">
                    View Project
                  </button>{" "}
                </Link>
              </div>
            ))}
          </div>

          <div className="md:ml-[150px] ml-[50px] mt-[50px]">
            <SmallerProjects />
          </div>

          <div className="md:ml-[150px] ml-[50px] mt-[100px]">
            <div className="md:text-[25px] text-[18px] flex">
              <span className="text-[#FFBF00]">#</span>
              <h3 className="text-white">smart-contracts</h3>
            </div>
          </div>

          <div className="md:flex-row flex-col flex space-x-4 justify-between items-center md:mx-[100px] mx-[50px] font-fira-code md1:mx-[150px] mt-[20px] mb-[50px]">
            {smallProjects.map((project, index) => (
              <div
                key={project.id}
                className={`border mt-[20px] w-9/12 transform transition duration-500 ease-in-out hover:scale-95 ${
                  index === 0 ? "ml-[10px]" : ""
                }`}
              >
                <div className="border text-[#939BA8]">
                  <p className="mx-[20px]">{project.skill}</p>
                </div>
                <h2 className="text-white m-[20px] text-[25px]">
                  {project.title}
                </h2>
                <p className="text-[#939ba8] mx-[20px]">{project.descr}</p>
                <Link to={project.link}>
                  <button className="border border-[#64FFDB] text-white text-[18px] font-bold m-[20px] p-[10px] transform transition duration-500 ease-in-out hover:scale-110 hover:border-[#FFBF00]">
                    View Project
                  </button>{" "}
                </Link>
              </div>
            ))}
          </div>

          <div className="md:flex-row flex-col flex space-x-4 justify-between items-center md:mx-[100px] mx-[50px] font-fira-code md1:mx-[150px] mt-[20px] mb-[50px]">
            {smallProjects2.map((project, index) => (
              <div
                key={project.id}
                className={`border mt-[20px] w-9/12 transform transition duration-500 ease-in-out hover:scale-95 ${
                  index === 0 ? "ml-[10px]" : ""
                }`}
              >
                <div className="border text-[#939BA8]">
                  <p className="mx-[20px]">{project.skill}</p>
                </div>
                <h2 className="text-white m-[20px] text-[25px]">
                  {project.title}
                </h2>
                <p className="text-[#939ba8] mx-[20px]">{project.descr}</p>
                <Link to={project.link}>
                  <button className="border border-[#64FFDB] text-white text-[18px] font-bold m-[20px] p-[10px] transform transition duration-500 ease-in-out hover:scale-110 hover:border-[#FFBF00]">
                    View Project
                  </button>{" "}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <img
          src={Frame29}
          className="absolute md:bottom-10 md:flex hidden left-0"
        />
        <img src={Square} className="absolute md:bottom-10 top-36 right-0" />
        {/* <img
          src={Square}
          className="absolute md:hidden md:bottom-10 bottom-0 right-0"
        /> */}

        <FixedSideSocials />
      </section>
    </div>
  );
};

export default Portfolio;
