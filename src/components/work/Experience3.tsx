import { Link } from "react-router-dom";

const Experience3 = () => {
  return (
    <div className="flex-col font-fira-code">
      <div className="text-[20px] text-white">Frontend Developer</div>
      <span className="text-[#64ffdb]">@ Alx</span>
      <div className="text-[#939BA8]">Aug 2022 - Sept 2023</div>
      <Link to={"https://chain.link/"}>
        <div className="text-[#64ffdb] text-[12px]">https://alxafrica.com</div>
      </Link>

      <div className="mt-[40px]">
        {" "}
        <div className="flex w-10/12">
          <span className="text-[#64ffdb]">{">"}</span>
          <div className="mx-[10px] text-[#939BA8]">
            Implemented complex frontend logic and integrate connections to
            backend systems to create seamless user experiences.
          </div>
        </div>
        <div className="flex w-10/12">
          <span className="text-[#64ffdb]">{">"}</span>
          <div className="mx-[10px] text-[#939BA8]">
            Collaborate with designers, project managers, and other engineers to
            transform creative concepts into production realities for clients
            and stakeholders.
          </div>
        </div>
        <div className="flex w-10/12">
          <span className="text-[#64ffdb]">{">"}</span>
          <div className="mx-[10px] text-[#939BA8]">
            Built and delivered technical solutions according to stakeholder
            business requirements.
          </div>
        </div>
        <div className="flex w-10/12">
          <span className="text-[#64ffdb]">{">"}</span>
          <div className="mx-[10px] text-[#939BA8]">
            Collaborate with our product team to implement new features and
            functionalities.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience3;
