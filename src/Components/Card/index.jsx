import { useContext, useState } from "react";
import { BWMcontext } from "../../Context";
import PropTypes from "prop-types";

import "./Styles.css";

export const Card = ({ title, imgUrl, subTitle, buttonText, content }) => {
  Card.propTypes = {
    title: PropTypes.object.isRequired,
    imgUrl: PropTypes.object.isRequired,
    subTitle: PropTypes.object.isRequired,
    buttonText: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  };

  const context = useContext(BWMcontext);

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
    console.log("el estado es  ", expanded);
  };

  return (
    <section
      onClick={toggleExpand}
      className={`bg-white ${
        context.expanded ? "flex h-52 transition-all duration-1000" : "px-4 py-10 cursor-pointer transition-all duration-1000"
      }`}
    >
      {/* item */}
      <div className={`${expanded ? "flex" : "grid"} flex text-lg`}>
        <figure className="lg:w-full">
          <img
            className={`${
              expanded ? "lg:w-full h-full w-56" : "sm:w-full lg:w-full h-full"
            } w-full`}
            src={imgUrl}
            alt="Image"
          />
        </figure>
        {/* content wrapper */}
        <div className="md:w-full lg:w-full relative">
          <div
            className={`${
              expanded ? "px-4 py-4 cursor-pointer" : "px-4 py-4 w-full"
            }`}
          >
            <h2 className="font-bold text-2xl">{title}</h2>

            <p
              className={`${
                expanded ? "py-1 font-ligth text-lg" : "py-1 font-ligth text-lg w-full"
              }`}
            >
              {subTitle}
            </p>
            <p
              className={`${expanded ? "hidden" : "py-6 text-lg font-ligth"}`}
            >
              {content}
            </p>
            <button
              className={`${
                expanded
                  ? "hidden"
                  : "bg-black py-3 h-12 items-center text-white mt-6 w-full font-extrabold text-lg hover:bg-blue-700"
              }`}
            >
              {buttonText}
            </button>
          </div>
          <div className="absolute bottom-0 justify-start items-center ml-6 mt-6">
            <button className="w-20 border bg-gray-400 h-2"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
