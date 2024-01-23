import { project1, webProjects } from "../../../constants";

const MobileProject1 = () => {
  return (
    <div className="font-fira-code flex flex-row">
      <div className="flex flex-col text-[#939ba8] ml-[20px]">
        {project1.map((project) => (
          <button
            key={project.id}
            className="p-[10px] w-[px] border-l-2 border-[#64ffdb] rounded-r-lg hover:bg-[#f6cb49] hover:text-black"
            style={{ textAlign: "left" }}
          >
            <div>{project.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileProject1;
