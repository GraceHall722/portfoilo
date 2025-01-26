import { useState } from "react";
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { SiSubstack } from "react-icons/si";
import { Link } from "react-router-dom";

const FixedSideSocials = () => {
  const [isHoveredGithub, setIsHoveredGithub] = useState(false);
  const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);
  const [isHoveredSubstack, setIsHoveredSubstack] = useState(false);
  const [isHoveredTwitter, setIsHoveredTwitter] = useState(false);

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
          <div
            style={{
              transform: isHoveredLinkedin ? "translateY(-5px)" : "none",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/patrick-ehimen/"}
              className="transform hover:scale-110"
              onMouseEnter={() => setIsHoveredLinkedin(true)}
              onMouseLeave={() => setIsHoveredLinkedin(false)}
            >
              <RiLinkedinFill
                size={24}
                color={isHoveredLinkedin ? "#64FFDB" : "#CCD6F6"}
              />
            </Link>
          </div>
          <div
            style={{
              transform: isHoveredSubstack ? "translateY(-5px)" : "none",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Link
              target="_blank"
              to={
                "https://0xose.substack.com/?r=392mkz&utm_campaign=pub-share-checklist"
              }
              className="transform hover:scale-110"
              onMouseEnter={() => setIsHoveredSubstack(true)}
              onMouseLeave={() => setIsHoveredSubstack(false)}
            >
              <SiSubstack
                size={24}
                color={isHoveredSubstack ? "#64FFDB" : "#CCD6F6"}
              />
            </Link>
          </div>

          <div
            style={{
              transform: isHoveredTwitter ? "translateY(-5px)" : "none",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Link
              target="_blanck"
              to={"https://x.com/0xOse_"}
              className="transform hover:scale-110"
              onMouseEnter={() => setIsHoveredTwitter(true)}
              onMouseLeave={() => setIsHoveredTwitter(false)}
            >
              <RiTwitterXFill
                size={24}
                color={isHoveredTwitter ? "#64FFDB" : "#CCD6F6"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedSideSocials;
