//packages
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';
//custome hooks
import useTitle from "../hooks/useTitle";
//icons
import { FaArrowLeft } from "react-icons/fa";
//persian text
import PersianTexts from "../PersianTexts";

const Home = () => {
  useTitle("مسعود دلوجی");
  const navigate = useNavigate();
  return (
    <section
      className=" w-full min-h-screen relative bg-white lg:pr-20 dark:bg-dark-bg"
      data-aos="fade-down"
      data-aos-easing="linear"
    >
      {/* bg yellow */}
      <div className="hidden lg:block fixed top-0 left-0 w-80 min-h-screen z-10 clip-path-left bg-primary"></div>
      {/* end bg yellow */}
      <div className=" max-w-lg mx-auto p-2.5 flex flex-col items-center justify-between lg:p-0 lg:max-w-none lg:flex-row  lg:absolute lg:inset-y-20 lg:left-20 lg:right-40 lg:z-20">
        {/* text box */}
        <div className="px-2.5 pb-20 flex flex-col items-center  gap-6  lg:basis-3/5 lg:items-start lg:p-5 max-w-lg mx-auto order-2 lg:order-1">
          <h1 className="text-primary text-2xl md:text-3xl lg:text-4xl ">

            <Typewriter
              options={{
                strings: [PersianTexts.home.myName, PersianTexts.home.myWork],
                autoStart: true,
                loop: true,
                pauseFor:2000,
                
              }}
            />
          </h1>
          <p className="text-gray-600 text-sm md:text-base  text-justify leading-6 dark:text-white">
            {PersianTexts.home.mySolgan}
          </p>
          <button className="mainBtn group" onClick={() => navigate("/about")}>
            <span className="mainBtn-effect"></span>
            <span className="mainBtn-text">{PersianTexts.home.btn}</span>
            <span className="mainBtn-iconbox">
              <FaArrowLeft className="main-icon" />
            </span>
          </button>
        </div>
        {/* image */}
        <div className="w-72 h-72 mt-2.5 mb-5 rounded-full lg:mt-0 lg:mb-0 lg:basis-2/5 lg:h-full lg:rounded-3xl bg-me order-1 lg:order-2"></div>
      </div>
    </section>
  );
};

export default Home;
