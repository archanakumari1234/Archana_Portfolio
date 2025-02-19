import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, desc, src ,link}) => {
  return (
    <div className="w-full px-12  h-auto py-10 rounded-lg shadow-shadowOne flex flex-col  bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:bg-gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg ">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt=""
        /> 
      </div>
      <div className="w-full text-base mt-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-designColor font-semibold">{title}</h3>

          <div className="flex gap-2 ">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-100 cursor-pointer">
              <BsGithub />
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-100 cursor-pointer">
              <a href={link}><FaGlobe /></a>
            </span>
          </div>
        </div>
        <div>
            <p className="text-gray-300">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
