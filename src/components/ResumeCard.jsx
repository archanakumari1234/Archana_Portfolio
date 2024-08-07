const ResumeCard = ({ title, subtitle, result, desc }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="md:w-10 w-6 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute md:w-5 md:h-5 w-3 h-3 rounded-full md:-top-2 md:-left-3 -top-1 -left-2 flex justify-center items-center bg-black bg-opacity-60 ">
          <span className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg md:px-10 px-5 flex flex-col justify-center gap-10 shadow-shadowOne">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl text-gray-400 font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subtitle}
            </p>
          </div>
          <div>
            <p className="w-20 h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center text-sm font-medium shadow-shadowOne">{result}</p>
          </div>
        </div>
        <p className="text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">{desc}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
