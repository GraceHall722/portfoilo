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
      <div className="font-fira-code flex flex-row">
        <div className="md:ml-[150px] ml-[50px] flex-col flex mt-[60px] text-[#939BA8]">
          {project1.map((project, index) => (
            <button
              key={project.id}
              className="p-[10px] w-[180px] border-l-2 border-[#64ffdb] rounded-r-lg cursor-pointer hover:bg-[#f6cb49] hover:text-black "
              onClick={() => handleClick(index)}
              style={{ textAlign: "left" }}
            >
              <div>{project.name}</div>
            </button>
          ))}
        </div>
        <div className="m-[100px] mt-[50px] lg:w-[480px]">
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
                  className="w-screen rounded border-2 border-[#64ffdb]"
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
