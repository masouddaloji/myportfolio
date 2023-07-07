import { useRef, useState } from "react";
//packages
import { Link } from "react-router-dom";
//constants
import { allCategory, allPortfolio } from "../constants/constants";
//custome hook
import useClickOutSide from "../hooks/useClickOutSide";
import useTitle from "../hooks/useTitle";
//icons
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Portfolio = () => {
  useTitle("نمونه کار های من")
  const maskRef=useRef()
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [IsShowPortfolioDetails, setIsShowPortfolioDetails] = useState(false);
  const [portfolioDetails, setPortfolioDetails] = useState({});
  const filteredPortfolio = allPortfolio.filter((portfolio) => {
    if (selectedCategory === "all") {
      return portfolio;
    } else {
      return portfolio.category === selectedCategory;
    }
  });
  useClickOutSide({ ref:maskRef,setStateHandler:setIsShowPortfolioDetails })
  return (
    <section
      className="w-full min-h-screen relative bg-white  lg:pr-20 dark:bg-dark-bg "
      data-aos="fade-down"
      data-aos-easing="linear"
    >
      <div className="container mx-auto px-[15px]">
        {/* start header */}
        <div className=" w-full py-16 relative">
          <h2 className="page-title">
            نمونه کارهای
            <p className="text-primary">من</p>
          </h2>
        </div>
        {/* end header */}

        {/* start gallery */}
        <section className="gallery flex flex-col gap-10 px-2.5 pb-20">
          <ul className="category w-full flex items-center mobile-lg:justify-center gap-5 overflow-x-scroll">
            {allCategory.map((category) => (
              <li
                className={` ${
                  selectedCategory === category.value && "active-category"
                } text-txt-gray dark:text-silver cursor-pointer whitespace-nowrap`}
                key={category.id}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.title}
              </li>
            ))}
          </ul>

          {/* start gallery images */}
          <div className="grid grid-cols-1 mobile-lg:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* item */}
            {filteredPortfolio?.length
              ? filteredPortfolio.map((item) => (
                  <div
                    className="w-full h-56 relative rounded-lg overflow-hidden group"
                    key={item.id}
                    data-aos="fade-right"
                    data-aos-easing="linear"
                  >
                    <img
                      className="w-full h-full block"
                      src={`./images/${item.img[0]}`}
                      alt="portfolio image"
                    />
                    <div className="absolute -bottom-full left-0 w-full h-full flex items-center justify-center overlay transition-all duration-500 group-hover:bottom-0">
                      <span
                        className="text-white text-lg cursor-pointer"
                        onClick={() => {
                          setIsShowPortfolioDetails(true);
                          setPortfolioDetails({ ...item });
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))
              : null}

            {/* item */}
          </div>
          {/* end gallery images */}
        </section>
        {/* end gallery */}
      </div>
      {IsShowPortfolioDetails && (
        <div className="fixed inset-0 mask z-40" ref={maskRef}>
          <div className="modal" >
            <AiOutlineCloseCircle
              className="w-8 h-8 lg:w-12 lg:h-12 absolute text-white -top-10 right-0 md:-top-8 md:-right-6 lg:-right-14 cursor-pointer"
              onClick={() => setIsShowPortfolioDetails(false)}
            />
            <h3 className="text-primary py-2.5 lg:py-5 text-center mb-2.5 text-2xl">
              {portfolioDetails?.title}
            </h3>
            <div className="flex flex-wrap md:gap-y-5 mb-5 lg:mb-10">
              <div className="col-12 md:col-6">
                <div className="flex flex-col lg:flex-row gap-2.5 text-txt-gray dark:text-white text-[15px]">
                  <p className="flex items-center gap-2 ">
                    <FaCode className="inline-block" />
                    <span>تکنولوژی ها : </span>
                  </p>
                  <p className="uppercase">{portfolioDetails?.language}</p>
                </div>
              </div>
              <div className="col-12 mt-2.5 mobile-lg:mt-0 md:col-6">
                <div className="flex flex-col lg:flex-row gap-2.5 text-txt-gray dark:text-white text-[15px]">
                  <p className="flex items-center gap-2 ">
                    <FaExternalLinkAlt className="inline-block" />
                    <span> مشاهده : </span>
                  </p>
                  <Link
                    to={portfolioDetails?.link}
                    className="text-primary underline text-base"
                  >
                    {portfolioDetails?.link}
                  </Link>
                </div>
              </div>
            </div>
            {/* imgbox */}
            <div className="my-2.5rem w-full h-auto lg:h-80 rounded-2xl overflow-hidden">
              <img
                src={`./images/${portfolioDetails?.img[0]}`}
                alt="portfolio larg image"
                className="w-full h-full block"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
