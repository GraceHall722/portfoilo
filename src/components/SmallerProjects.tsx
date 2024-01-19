import { webProjects } from "../constants";
import { Container } from "../assets";
import { Link } from "react-router-dom";

const SmallerProjects = () => {
  return (
    <div className="font-fira-code mt-[100px]">
      <div className="flex">
        <div className="flex text-[20px]">
          <span className="text-[#FFBF00]">##</span>
          <div className="text-white w-60 md:w-auto">
            Explore a variety of smaller web3 projects
          </div>
        </div>
      </div>

      <div className="overflow-x-auto flex m-[20px] md:-ml-[25px] md1:-ml-[0px] lg:hidden mr-[80px] text-white">
        {webProjects.map((project) => (
          <div key={project.id} className="mx-[10px] border">
            <div className="border">
              <img src={Container} className="w-screen" />
            </div>
            <div className="m-[10px] mr-[50px]">{project.skill}</div>
            <div className="border border-[#FFBF00] m-[10px] md:mr-[150px] mr-[80px] p-[10px]">
              {project.title}
            </div>
            <div className="border">
              <div className=" m-[10px] mr-[50px]">{project.descr}</div>
            </div>
            <Link to={project.link}>
              <button className="cursor-pointer m-[10px] text-[#64FFDB]">
                View Project
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto w-[720px] xl:w-[850px] bcd">
        <div className="hidden lg:flex m-[20px] text-white">
          {webProjects.map((project) => (
            <div key={project.id} className="mx-[10px] border">
              <div className="border">
                <img src={Container} className="w-screen" />
              </div>
              <div className="m-[10px] mr-[50px]">{project.skill}</div>
              <div className="border border-[#FFBF00] m-[10px] md:mr-[150px] mr-[80px] p-[10px]">
                {project.title}
              </div>
              <div className="border">
                <div className=" m-[10px] mr-[50px]">{project.descr}</div>
              </div>
              <Link to={project.link}>
                <button className="cursor-pointer m-[10px] text-[#64FFDB]">
                  View Project
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallerProjects;
