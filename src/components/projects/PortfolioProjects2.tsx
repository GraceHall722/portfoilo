import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

import { project2, webProjects } from "../../constants";

const PortfolioProjects2 = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isHoveredGithub, setIsHoveredGithub] = useState(false);
  const [isHoveredLink, setIsHoveredLink] = useState(false);

  const handleClick = (index: number) => {
    setSelectedProjectIndex(index);
  };

  return (
    <section className="mb-[10px]">
      <div className="md:flex hidden justify-end font-fira-code flex-row">
        <div className="flex flex-col mr-[120px] mt-[60px] text-[#939BA8]">
          {project2.map((project, index) => (
            <button
              key={project.id}
              className="p-[10px] w-[180px] border-r-2 border-[#f6cb49] rounded-l-lg cursor-pointer hover:bg-[#153041]  "
              style={{ textAlign: "right" }}
              onClick={() => handleClick(index)}
            >
              <div>{project.name}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-start ml-[150px] -mt-[260px] ">
        {selectedProjectIndex !== -1 && (
          <div>
            <div className="text-[12px] text-[#64ffdb]">
              {webProjects[selectedProjectIndex].tag}
            </div>
            <h2 className="text-[#b6c1e0] text-[20px]">
              {webProjects[selectedProjectIndex].title}
            </h2>
            <div className="text-[#B6C1E0]">
              {webProjects[selectedProjectIndex].skill}
            </div>
            <div className="relative">
              <img
                src={webProjects[selectedProjectIndex].image}
                alt=""
                className="md1:w-96 w-72 rounded border-2 border-[#f6cb49]"
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
                    color={isHoveredGithub ? "#f6cb49" : "#CCD6F6"}
                    onMouseEnter={() => setIsHoveredGithub(true)}
                    onMouseLeave={() => setIsHoveredGithub(false)}
                  />
                </Link>
              </div>
              <div className="px-[5px] cursor-pointer">
                <Link to={webProjects[selectedProjectIndex].link}>
                  <FiExternalLink
                    size={24}
                    color={isHoveredLink ? "#f6cb49" : "#CCD6F6"}
                    onMouseEnter={() => setIsHoveredLink(true)}
                    onMouseLeave={() => setIsHoveredLink(false)}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioProjects2;
