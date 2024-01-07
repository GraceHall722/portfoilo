const Experience = () => {
  return (
    <section className="">
      <div className="flex md:flex-col flex-row md:ml-[150px] ml-[50px] font-fira-code text-[#939BA8] h-30 w-64 overflow-auto overflow-y-scroll">
        <div className="md:my-[10px] p-[20px] w-[180px] rounded-md cursor-pointer hover:bg-[#153041]">
          Chainlink
        </div>
        <div className="mx-[10px] md:mx-[0px] p-[20px] w-[180px] rounded-md cursor-pointer hover:bg-[#153041]">
          ALX Africa
        </div>
      </div>
      <div className="h-32 w-64 overflow-auto overflow-y-scroll">
        <div className="p-5 m-2 cursor-pointer hover:bg-gray-200">
          Content 1
        </div>
        <div className="p-5 m-2 cursor-pointer hover:bg-gray-200">
          Content 2
        </div>
      </div>{" "}
    </section>
  );
};

export default Experience;
