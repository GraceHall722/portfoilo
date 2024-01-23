import { useState } from "react";
import { project1, webProjects } from "../../constants";

import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const PortfolioProjects1 = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isHoveredGithub, setIsHoveredGithub] = useState(false);
  const [isHoveredLink, setIsHoveredLink] = useState(false);

  const handleClick = (index: number) => {
    setSelectedProjectIndex(index);
  };

  return (
    <section className="">
      <div className="font-fira-code flex md:flex-row flex-col">
        <div className="md:ml-[150px] ml-[50px] md:flex-col flex-row flex mt-[60px] text-[#939BA8] overflow-x-auto md:overflow-x-visible md:w-[200px] w-72 ssm:w-96 whitespace-nowrap">
          {project1.map((project, index) => (
            <div className="inline-block">
              <button
                key={project.id}
                className={`p-[10px] w-[180px] md:border-l-2 border-[#64ffdb] md:rounded-r-lg cursor-pointer hover:bg-[#f6cb49] hover:text-black mx-[5px] md:mx-[0px] ${
                  index === selectedProjectIndex
                    ? "text-[black] bg-[#f6cb49]"
                    : ""
                }`}
                onClick={() => handleClick(index)}
                style={{ textAlign: "left" }}
              >
                <div
                  className={`${
                    index === 1 ? "ml-[8px]" : index === 3 ? "ml-[8px]" : ""
                  }`}
                >
                  {project.name}
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="md:m-[100px] m-[50px] mt-[50px] md:w-fit w- lg:w-[480px] md:flex">
          {selectedProjectIndex !== -1 && (
            <div className="">
              <div className="text-[12px] text-[#f6cb49]">
                {webProjects[selectedProjectIndex].tag}
              </div>
              <h2 className="text-[#B6C1E0] text-[20px] ">
                {webProjects[selectedProjectIndex].title}
              </h2>
              <div className="text-[#B6C1E0]">
                {webProjects[selectedProjectIndex].skill}
              </div>
              <div className="relative">
                <img
                  src={webProjects[selectedProjectIndex].image}
                  alt=""
                  className="md:w-screen w-[360px] rounded border-2 border-[#64ffdb]"
                />
                <div className="absolute inset-0 bg-[#122e3f] opacity-50 backdrop-blur-md hover:opacity-0 transition duration-500"></div>
                <p className="absolute text-[14px] md1:w-[360px] w-[180px] bg-[#112240] p-[20px] rounded md1:mx-[65px] text-[#B6C1E0] md1:-mt-[80px] -mt-[40px] md1:h-[150px] mx-[35px]">
                  {webProjects[selectedProjectIndex].descr}
                </p>
              </div>
              <div className="flex mt-[100px] md1:ml-[220px] ml-[100px]">
                <div className="px-[5px] cursor-pointer">
                  <Link to={webProjects[selectedProjectIndex].github}>
                    <FiGithub
                      size={24}
                      color={isHoveredGithub ? "#64FFDB" : "#CCD6F6"}
                      onMouseEnter={() => setIsHoveredGithub(true)}
                      onMouseLeave={() => setIsHoveredGithub(false)}
                    />
                  </Link>
                </div>
                <div className="px-[5px] cursor-pointer">
                  <Link to={webProjects[selectedProjectIndex].link}>
                    <FiExternalLink
                      size={24}
                      color={isHoveredLink ? "#64FFDB" : "#CCD6F6"}
                      onMouseEnter={() => setIsHoveredLink(true)}
                      onMouseLeave={() => setIsHoveredLink(false)}
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects1;
