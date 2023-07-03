import { useEffect } from "react";
//constants
import { personalAnalize, personalInfos, skills } from "../constants/constants";
//custom hook
import useTitle from "../hooks/useTitle";
//icons
import { FaBriefcase, FaDownload } from "react-icons/fa";
//persian text
import PersianTexts from "../PersianTexts";

const About = () => {
  useTitle("درباره من");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("anim-circle");
        } else {
          entry.target.classList.remove("anim-circle");
        }
      });
    }, options);

    const circlesSvg = document.querySelectorAll(".circle-svg");

    circlesSvg.forEach((circle) => {
      observer.observe(circle);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="w-full min-h-screen relative bg-white  lg:pr-20 dark:bg-dark-bg "
      data-aos="fade-down"
      data-aos-easing="linear"
    >
      <div className="container mx-auto px-[15px]">
        {/* start about header */}
        <div className=" w-full py-16 relative">
          <h2 className="page-title">
            درباره
            <p className="text-primary">من</p>
          </h2>
        </div>

        {/* end about header */}
        {/* start about content */}
        <section className="flex flex-col items-center">
          <div className="flex flex-col lg:flex-row  justify-between  pt-3">
            {/* start personal info */}
            <div className="col-12 lg:col-6">
              <div className="w-full flex flex-col items-start gap-7">
                <h3 className="text-2xl text-txt-gray dark:text-white ">
                  {PersianTexts.about.personalInfo}
                </h3>
                <ul className="flex flex-wrap">
                  {personalInfos.map((info) => (
                    <li className="w-1/2 block pb-5" key={info.id}>
                      <p className="flex flex-col mobile-lg:flex-row text-txt-gray dark:text-white text-[15px]">
                        <span className="opacity-75">
                          {info.title}
                          <span className="mx-2 opacity-75">:</span>
                        </span>

                        <span>{info.value}</span>
                      </p>
                    </li>
                  ))}
                </ul>
                <button className="mainBtn group">
                  <span className="mainBtn-effect"></span>
                  <span className="mainBtn-text">{PersianTexts.about.btn}</span>
                  <span className="mainBtn-iconbox">
                    <FaDownload className="main-icon" />
                  </span>
                </button>
              </div>
            </div>
            {/* end personal info */}
            {/* start personal analize */}

            <div className="col-12 lg:col-6 mt-6 lg:mt-0">
              <div className="w-full  mt-6 lg:mt-0">
                <div className="flex flex-wrap ">
                  {personalAnalize.map((item) => (
                    <div className="col-12 mobile-lg:col-6 mb-7" key={item.id}>
                      <div className="w-full flex flex-col p-5 rounded-md border border-border-light dark:border-black-05 ">
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end about content */}
        <hr className="block border-t border-border-light dark:border-black-05 my-14 w-2/5 mx-auto" />
        {/* start skill */}
        <section className="flex flex-col gap-y-7">
          <h3 className="header-section">{PersianTexts.about.mySkill}</h3>
          <div className="flex flex-wrap justify-between mt-3 gap-5 gap-y-10">
            {skills.map((skill) => (
              <div
                className="w-[45%] md:w-1/5 flex flex-col items-center justify-center gap-5"
                key={skill.id}
              >
                {/* start circle progress bar */}
                <div className="w-[120px] h-[120px] relative ">
                  <div className="w-[120px] h-[120px] bg-silver dark:bg-black-05  rounded-full p-2.5">
                    <div className="w-full h-full bg-white dark:bg-dark-bg rounded-full flex items-center justify-center">
                      <span className="text-txt-gray dark:text-white text-2xl">
                        {skill.value}
                        <span className="text-lg ml-1">%</span>
                      </span>
                    </div>
                  </div>
                  <svg
                    width="120"
                    height="120"
                    className="absolute top-0 left-0 -rotate-90 circle-svg"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="55"
                      strokeLinecap="round"
                      strokeDasharray={350}
                      // className="fill-none stroke-primary stroke-[10] anim-circle"
                      className="fill-none stroke-primary stroke-[10] circle-skill"
                      style={{
                        "--offset": `${350 - 350 * (skill.value / 100)}`,
                      }}
                    />
                  </svg>
                </div>
                {/* end circle progress bar */}
                <h4 className="text-txt-gray dark:text-white uppercase">
                  {skill.title}
                </h4>
              </div>
            ))}
          </div>
        </section>
        <hr className="block border-t border-border-light dark:border-black-05 my-14 w-2/5 mx-auto" />
        {/* end skill */}
        {/* start EXPERIENCE & EDUCATION */}
        <section className="pt-10 pb-20 flex flex-col gap-y-7">
          <h3 className="header-section pb-5">
            {PersianTexts.about.education}
          </h3>
          <ul className="w-full flex flex-wrap justify-between">
            <li className="w-full lg:w-1/2 mb-10 flex flex-col items-start gap-3 pr-16 relative">
              <span className="absolute top-0 right-0 w-10 h-10 bg-primary text-white rounded-full z-10 flex items-center justify-center">
                <FaBriefcase className="" />
              </span>
              <span className="absolute inset-y-0 right-5 border-r border-silver dark:border-[#333] "></span>
              <span className="text-txt-gray dark:text-white bg-silver dark:bg-black-05 text-xs px-2.5 py-px rounded-2xl">
                1399
              </span>
              <h5 className="text-txt-gray dark:text-white text-lg">لیسانس</h5>
              <p className="text-txt-gray dark:text-white text-sm">
                لیسانس علوم کامپیوتر از دانشگاه لرستان
              </p>
            </li>
          </ul>
        </section>
        {/* end EXPERIENCE & EDUCATION */}
      </div>
    </section>
  );
};

export default About;
