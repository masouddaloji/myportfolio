
//constants
import { personalAnalize, personalInfos, skills } from "../constants/constants";
//icons
import { FaBriefcase, FaDownload } from "react-icons/fa";

const About = () => {

  return (
    <div
      className=" w-full min-h-screen relative bg-white  lg:pr-14 dark:bg-dark-bg "
      // data-aos="fade-down"
      // data-aos-easing="ease-in-out"
    >
      <div className="container mx-auto">
        {/* start about header */}
        <div className=" w-full py-16 relative">
        
          <h2 className="text-6xl text-txt-gray dark:text-white flex items-center justify-center gap-2">
            درباره
            <p className="text-primary">من</p>
          </h2>
        </div>

        {/* end about header */}
        {/* start about content */}
        <section className="flex flex-col items-center">
          <div className="flex justify-between px-8 pt-3 ">
            {/* start personal info */}
            <div className="basis-1/2">
              <h3 className="text-2xl text-txt-gray dark:text-white pb-5">
                اطلاعات شخصی
              </h3>
              <ul className="flex flex-wrap max-h-50">
                {personalInfos.map((info) => (
                  <li className="max-w-1/2 basis-1/2 block mb-5" key={info.id}>
                    <p className="flex text-txt-gray dark:text-white text-[15px]">
                      <span className="opacity-75">{info.title}</span>{" "}
                      <span className="mx-2 opacity-75">:</span>
                      <span>{info.value}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <button className="mainBtn group mt-6">
                <span className="mainBtn-effect"></span>
                <span className="mainBtn-text">دانلود رزومه</span>
                <span className="mainBtn-iconbox">
                  <FaDownload className="main-icon" />
                </span>
              </button>
            </div>

            {/* end personal analize */}
            <div className="basis-1/2">
              <div className="flex flex-wrap justify-between gap-5">
                {personalAnalize.map((item) => (
                  <div
                    className="w-full flex flex-col p-5 rounded-md border border-border-light dark:border-black-05 md:w-[45%]"
                    key={item.id}
                  >
                    <h3 className="relative text-primary text-5xl mr-5">
                      <span className="absolute text-2xl top-px -right-5">
                        +
                      </span>
                      {item.value}
                    </h3>
                    <p className="dark:text-white text-txt-gray relative pr-10">
                      <span className="absolute top-3 right-0 w-7 h-px bg-[#777]"></span>
                      <span className="block">{item.title1}</span>
                      <span className="block mt-1">{item.title2}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* end about content */}
        <hr className="block border-t border-border-light dark:border-black-05 my-14 w-2/5 mx-auto" />
        {/* start skill */}
        <section className=" lg:pr-14">
          <h3 className="header-section">مهارت های من</h3>

          <div className="mt-10 flex flex-wrap justify-between gap-5 gap-y-10">
            {skills.map((skill) => (
              <div
                className="w-1/5 flex flex-col items-center justify-center gap-5"
                key={skill.id}
              >
                {/* start circle progress bar */}
                <div className="w-[120px] h-[120px] relative ">
                  <div className="w-[120px] h-[120px] bg-silver dark:bg-black-05  rounded-full p-2.5">
                    <div className="w-full h-full bg-white dark:bg-dark-bg rounded-full flex items-center justify-center">
                      <span className="text-txt-gray dark:text-white text-2xl">
                      {skill.value}<span className="text-lg ml-1">%</span>
                      </span>
                    </div>
                  </div>

                  <svg
                    width="120"
                    height="120"
                    className="absolute top-0 left-0 -rotate-90"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="55"
                      strokeLinecap="round"
                      strokeDasharray={350}
                      strokeDashoffset={350 - (350 * (skill.value/100))}
                      className="fill-none stroke-primary stroke-[10]"
                    />
                  </svg>
                </div>
                {/* end circle progress bar */}
                <h4 className="text-txt-gray dark:text-white uppercase">{skill.title}</h4>
              </div>
            ))}
          </div>

          <h4 className="text-txt-gray dark:text-white">html</h4>
        </section>
        {/* end skill */}
        {/* start EXPERIENCE & EDUCATION */}
        <section className="pt-10 pb-20 lg:pr-14">
          <h3 className="header-section">تجربه و آموزش</h3>
          <div className="flex flex-wrap gap-5 justify-between">
            <ul>
              <li className="flex flex-col items-start gap-3 pr-14 relative">
                <span className="absolute top-0 right-0 w-10 h-10 bg-primary text-white rounded-full z-10 flex items-center justify-center">
                  <FaBriefcase className="" />
                </span>
                <span className="absolute inset-y-0 right-5 border-r border-silver dark:border-[#333] "></span>
                <span className="text-txt-gray dark:text-white bg-silver dark:bg-black-05 text-xs px-2.5 py-px rounded-2xl">
                  1399
                </span>
                <h5 className="text-txt-gray dark:text-white text-lg">
                  لیسانس
                </h5>
                <p className="text-txt-gray dark:text-white text-sm">
                  لیسانس علوم کامپیوتر از دانشگاه لرستان
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* end EXPERIENCE & EDUCATION */}
      </div>
    </div>
  );
};

export default About;
