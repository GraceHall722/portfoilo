import { Link } from "react-router-dom";
import { homeProjects } from "../constants";
import { useState, useEffect } from "react";

const HomeProject = () => {
  const [displayProjects, setDisplayProjects] = useState(homeProjects);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        // MD to MD1 screen sizes
        setDisplayProjects(homeProjects.slice(0, 2));
      } else {
        setDisplayProjects(homeProjects);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <section className="md:mx-[150px] mx-[30px] mt-[100px] flex flex-col mb-[15px] md:flex-row">
        <div className="font-fira-code text-white text-[32px] flex">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row">
              <span className="text-[#64ffdb] flex flex-row">#</span>projects
            </div>
            <div className="md1:w-96 md:w-48 h-1 ml-2 mt-[25px] bg-[#FFBF00]"></div>
            <div className="text-[15px] flex mt-[18px] ml-[150px] md:ml-[50px] xl:ml-[150px]">
              <Link to="/portfolio">
                <div className="md:flex-row flex">
                  More <span className="ml-2">~~~{">"}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="md:flex-row flex-col flex space-x-4 justify-between items-center md:mx-[100px] mx-[50px] font-fira-code md1:mx-[150px] mt-[20px] mb-[50px]">
        {displayProjects.map((project, index) => (
          <div
            key={project.id}
            className={`border mt-[20px] w-9/12 ${
              index === 0 ? "ml-[10px]" : ""
            }`}
          >
            <img src={project.image} alt={project.title} className="w-full" />
            <div className="border text-[#939BA8]">
              <p className="mx-[20px]">{project.skill}</p>
            </div>
            <h2 className="text-white m-[20px] text-[25px]">{project.title}</h2>
            <p className="text-[#939ba8] mx-[20px]">{project.descr}</p>
            <Link to={project.link}>
              <button className="border border-[#64FFDB] text-white text-[18px] font-bold m-[20px] p-[10px] transform transition duration-500 ease-in-out hover:scale-110">
                View Project
              </button>{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProject;
