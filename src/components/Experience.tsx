import { useState } from "react";
import { Experience1, Experience2, Experience3 } from "../components";

// The Experience component utilizes local state to manage activated buttons
// and dynamically render the appropriate experience component.
const Experience = () => {
  // State hook for tracking the currently active button ID
  const [activeButtonId, setActiveButtonId] = useState<string | null>(null);

  // Mapping of button IDs to corresponding div identifiers
  const buttonToDivMap = {
    chainlink: "six",
    tokenminds: "seven",
    "alx-africa": "eight",
  };

  // TypeScript interface describing the props expected by the DivComponent
  interface DivComponentProps {
    id: string | null;
  }

  // Component responsible for rendering the experience div based on an ID
  const DivComponent = ({ id }: DivComponentProps) => {
    switch (id) {
      // Renders Experience1 component for 'six' ID
      case "six":
        return (
          <div className="ml-[50px] mt-[50px] sixx">
            <Experience1 />
          </div>
        );
      // Renders Experience2 component for 'seven' ID
      case "seven":
        return (
          <div className="ml-[50px] mt-[50px] md:mt-[100px] seven">
            <Experience2 />
          </div>
        );
      // Renders Experience3 component for 'eight' ID
      case "eight":
        return (
          <div className="ml-[50px] mt-[50px] md:mt-[150px] eight">
            <Experience3 />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    // Section wraps both buttons and the displayed experience component
    <section className="flex md:flex-row flex-col">
      {/* Buttons container allowing user to select different experiences */}
      <div className="flex md:flex-col flex-row mt-[50px] md:ml-[150px] ml-[20px] font-fira-code text-[#939BA8] overflow-x-scroll">
        {/* Button for the 'Chainlink' experience */}
        <button
          id="chainlink"
          onClick={() => setActiveButtonId("chainlink")}
          className={`md:my-[0px] p-[10px] w-[180px] md:border-l-2 md:rounded-r-lg border-[#FFBF00] cursor-pointer hover:bg-[#153041] ${
            activeButtonId === "chainlink" ? "bg-[#153041] text-[#64ffdb]" : ""
          }`}
        >
          <div className="">Chainlink</div>{" "}
        </button>
        {/* Button for the 'Tokenminds' experience */}
        <button
          id="tokenminds"
          onClick={() => setActiveButtonId("tokenminds")}
          className={`mx-[10px] md:mx-[0px] p-[10px] w-[180px] md:rounded-r-md md:border-l-2 border-[#FFBF00] cursor-pointer hover:bg-[#153041] ${
            activeButtonId === "tokenminds" ? "bg-[#153041] text-[#64ffdb]" : ""
          }`}
        >
          <div className="">Tokenminds</div>{" "}
        </button>
        {/* Button for the 'ALX Africa' experience */}
        <button
          id="alx-africa"
          onClick={() => setActiveButtonId("alx-africa")}
          className={`mx-[10px] md:mx-[0px] p-[10px] w-[180px] md:rounded-r-md md:border-l-2 border-[#FFBF00] cursor-pointer hover:bg-[#153041] ${
            activeButtonId === "alx-africa" ? "bg-[#153041] text-[#64ffdb]" : ""
          }`}
        >
          <div className="">ALX Africa</div>{" "}
        </button>
      </div>

      {/* Renders the selected experience component */}
      <DivComponent
        id={
          buttonToDivMap[(activeButtonId as keyof typeof buttonToDivMap) || ""]
        }
      />
    </section>
  );
};

// Export the Experience component to be used in other parts of the application
export default Experience;
