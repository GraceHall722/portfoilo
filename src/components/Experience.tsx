import { useState } from "react";

const Experience = () => {
  const [activeButtonId, setActiveButtonId] = useState<string | null>(null);

  return (
    <section className="flex md:flex-row flex-col">
      <div className="flex md:flex-col flex-row mt-[50px] md:ml-[150px] ml-[20px] font-fira-code text-[#939BA8] overflow-x-scroll">
        <button
          id="chainlink"
          onClick={() => setActiveButtonId("chainlink")}
          className={`md:my-[0px] p-[10px] w-[180px] md:border-l-2 md:rounded-r-md border-[#939BA8] cursor-pointer hover:bg-[#153041] ${
            activeButtonId === "chainlink" ? "bg-[#153041] text-[#64ffdb]" : ""
          }`}
        >
          <div className="">Chainlink</div>{" "}
        </button>
        <button
          id="tokenminds"
          onClick={() => setActiveButtonId("tokenminds")}
          className={`mx-[10px] md:mx-[0px] p-[10px] w-[180px] md:rounded-r-md md:border-l-2 border-[#939BA8] cursor-pointer hover:bg-[#153041] ${
            activeButtonId === "tokenminds" ? "bg-[#153041] text-[#64ffdb]" : ""
          }`}
        >
          <div className="">Tokenminds</div>{" "}
        </button>
        <button
          id="alx-africa"
          onClick={() => setActiveButtonId("alx-africa")}
          className={`mx-[10px] md:mx-[0px] p-[10px] w-[180px] md:rounded-r-md md:border-l-2 border-[#939BA8] cursor-pointer hover:bg-[#153041] ${
            activeButtonId === "alx-africa" ? "bg-[#153041] text-[#64ffdb]" : ""
          }`}
        >
          <div className="">ALX Africa</div>{" "}
        </button>
      </div>
      <div className="ml-[50px] mt-[100px] sixx">ABC</div>
    </section>
  );
};

export default Experience;
