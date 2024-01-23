import { useState } from "react";
import { project1, webProjects } from "../../../constants";
import { Modal } from "../..";

type ProjectType = {
  id: number;
  image: string;
  tag?: string;
  skill: string;
  title: string;
  descr: string;
  link: string;
  github: string;
};

const MobileProject1 = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="font-fira-code flex flex-row">
      <div className="flex flex-col text-[#939ba8] ml-[20px]">
        {project1.map((project, index) => (
          <button
            key={project.id}
            className="p-[10px] w-[px] border-l-2 border-[#64ffdb] rounded-r-lg hover:bg-[#f6cb49] hover:text-black"
            style={{ textAlign: "left" }}
            onClick={() => setSelectedProject(project)}
          >
            <div>{project.name}</div>
          </button>
        ))}
      </div>
      {selectedProject && (
        <Modal onClose={handleClose}>
          <h2>{selectedProject.title}</h2>
          <img src={selectedProject.image} alt={selectedProject.title} />
          <p>{selectedProject.descr}</p>
          <a href={selectedProject.link}>View Project</a>
        </Modal>
      )}{" "}
    </div>
  );
};

export default MobileProject1;
