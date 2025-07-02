import { useState } from "react";
import { RiGithubFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const FixedSideSocials = () => {
  const [isHoveredGithub, setIsHoveredGithub] = useState(false);

  return (
    <div
      className="z-10 fixed top-0 left-0 hidden md:flex flex-row px-12 items-center justify-between"
      style={{ transform: "translateY(0%) translateZ(0px)" }}
    >
      <div className="flex flex-col space-y-8 items-center justify-center">
        <div className="flex flex-col space-y-3 items-center justify-center">
          <div className="h-36 w-0.5 bg-[#CCD6F6] mt-0"></div>
          <div
            style={{
              transform: isHoveredGithub ? "translateY(-5px)" : "none",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Link
              target="_blank"
              to={"https://github.com/Patrick-Ehimen"}
              onMouseEnter={() => setIsHoveredGithub(true)}
              onMouseLeave={() => setIsHoveredGithub(false)}
            >
              <RiGithubFill
                size={24}
                color={isHoveredGithub ? "#64FFDB" : "#CCD6F6"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedSideSocials;
