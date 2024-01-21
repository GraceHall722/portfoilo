import { useState } from "react";
import { project1, webProjects } from "../constants";

const PortfolioProjects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

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
              className="p-[10px] w-[180px] border-l-2 border-[#64ffdb] rounded-r-md cursor-pointer hover:bg-[#ffbf00] hover:text-black "
              onClick={() => handleClick(index)}
              style={{ textAlign: "left" }}
            >
              <div>{project.name}</div>
            </button>
          ))}
        </div>
        <div className="m-[100px]">
          {selectedProjectIndex !== -1 && (
            <div>
              <img src={webProjects[selectedProjectIndex].image} alt="" />
              <h2>{webProjects[selectedProjectIndex].title}</h2>
              <p>{webProjects[selectedProjectIndex].descr}</p>
              {/* Display other properties of the selected project as needed */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
