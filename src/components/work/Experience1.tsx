import { Link } from "react-router-dom";

const Experience1 = () => {
  return (
    <div className="flex-col font-fira-code">
      <div className="text-[20px] text-white">Smart Contract Developer</div>
      <span className="text-[#64ffdb]">@ Chainlink</span>
      <div className="text-[#939BA8]">Jan 2023 - Present</div>
      <Link to={"https://chain.link/"}>
        <div className="text-[#64ffdb] text-[12px]">https://chain.link/</div>
      </Link>

      <div className="mt-[40px]">
        {" "}
        <div className="flex w-10/12">
          <span className="text-[#64ffdb]">{">"}</span>
          <div className="mx-[10px] text-[#939BA8]">
            Design, develop, test, and deploy smart contracts on the Ethereum
            blockchain.
          </div>
        </div>
        <div className="flex w-10/12">
          <span className="text-[#64ffdb]">{">"}</span>
          <div className="mx-[10px] text-[#939BA8]">
            Contribute to the overall architecture and design of the protocol.
          </div>
        </div>
        <div className="flex w-10/12">
          <span className="text-[#64ffdb]">{">"}</span>
          <div className="mx-[10px] text-[#939BA8]">
            Collaborate with the frontend team to integrate smart contracts with
            web interfaces.
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

export default Experience1;
