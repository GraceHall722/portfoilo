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
      <div className="flex justify-end font-fira-code flex-col md:flex-row">
        <div className="flex flex-row md:flex-col md:mr-[90px] mr-[50px] mt-[60px] text-[#939BA8] overflow-x-auto md:overflow-x-visible md:w-[200px] ssm:w-96 whitespace-nowrap ml-[50px] md:ml-0 ">
          {project2.map((project, index) => (
            <div className="inline-block">
              <button
                key={project.id}
                className={`p-[10px] w-[180px] md:border-r-2 border-[#f6cb49] md:rounded-l-lg cursor-pointer hover:bg-[#153041]  mx-[5px] md:mx-[0px] ${
                  index === selectedProjectIndex
                    ? "text-[#64ffdb] bg-[#153041]"
                    : ""
                } `}
                style={{ textAlign: "right" }}
                onClick={() => handleClick(index)}
              >
                <div
                  className={`${
                    index === 1 ? "mr-[8px]" : index === 3 ? "mr-[8px]" : ""
                  }`}
                >
                  {project.name}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="md:flex justify-start md:ml-[150px] m-[50px] md:-mt-[260px] mt-[50px] ">
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
              <div className="absolute inset-0 bg-[#122e3f] opacity-50 backdrop-blur-md hover:opacity-0 transition duration-500 md1:w-96 ssm:w-72 ss:w-[288px] ssl:w-[288px] "></div>
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
