import React from "react";

const FeatureSection = ({
  title,
  description,
  points,
  isReversed,
  bgColor,
  imgSrc,
}) => {
  return (
    <div className="w-full flex flex-col items-center ">
      <h3 className="text-3xl sm:text-4xl tracking-tight font-bold text-[#f49c00] mb-4 self-start max-w-7xl w-full px-6">
        {title}
      </h3>

      <div className={`${bgColor} rounded-lg   p-6`}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center w-full`}
        >
          <div
            className={`w-full  rounded-md flex flex-col items-center justify-center bg-white/60 shadow-lg shadow-zinc-500/80 ${
              isReversed ? "md:order-2" : "md:order-1"
            }`}
          >
            {/* Icon and visual representation */}
            <img src={imgSrc} alt="panel image" />
          </div>
          <div
            className={`${
              isReversed ? "md:order-1" : "md:order-2"
            } flex flex-col justify-center`}
          >
            <p className="text-gray-700 text-md mb-4">{description}</p>
            <ul className="list-disc pl-3 space-y-2 text-gray-800">
              {points.map((point, index) => (
                <li key={index} className=" mx-4 rounded-md font-semibold">
                  <p className="text-lg tracking-tight">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
