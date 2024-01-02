import { FixedSideSocials } from "../components";

const AboutMe = () => {
  return (
    <section className="flex-col">
      <FixedSideSocials />
      <div className="ml-[150px]">
        <div className="font-fira-code flex mt-[50px] text-[30px] my-[10px]">
          <span className="text-[#64FFDB]">/</span>
          <div className="text-white">about-me</div>
        </div>
        <div className="text-[#939BA8] text-[16px]">Who am i?</div>

        <div className="mt-[70px] flex-col font-fira-code">
          <span className="text-[#FFBF00] text-[50px]">"</span>
          <div className="ml-[8px] mt-[20px] text-[#939ba8] mb-[20px]">
            Hello, I'm Patrick!
          </div>
          <div className="flex flex-col w-6/12 text-[#939ba8] ml-[8px]">
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. Transforming my creativity and
            knowledge into a websites has been my passion for over a year. I
            have been helping various clients to establish their presence
            online. I always strive to learn about the newest technologies and
            frameworks.<span className="text-[#FFBF00] text-[50px]">"</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
