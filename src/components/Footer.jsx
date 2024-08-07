import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="w-full px-8 md:pl-8 py-20 h-auto border-b-[1px] border-b-black grid md:grid-cols-4 grid-cols-2 justify-around gap-10">
      <div className="w-full h-full flex flex-col gap-6">
        <h1 className="text-2xl text-gray-300 font-bold ">Find In</h1>
        <div className="w-full flex flex-col justify-center gap-3">
                    <span className="bannerIcon"> <a href="https://www.linkedin.com/in/archana-kumari-29bb10262/"> <FaLinkedinIn/></a> </span>
                    <span className="bannerIcon"><a href="https://github.com/archanakumari1234"><FaGithub/></a> </span>
                    <span className="bannerIcon"> <a href="https://x.com/Archana98486363"><FaTwitter/> </a></span>
                </div>
      </div>
      <div className="w-full h-full ">
        <h3 className="text-xl uppercase text-designColor tracking-wider">Quick Link</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium  py-6 text-gray-300">
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">Home</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">Features</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">Projects</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">Resume</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">Contact</span></li>
        </ul>
      </div>
      <div className="w-full h-full ">
      <h3 className="text-xl uppercase text-designColor tracking-wider">Resource</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium  py-6 text-gray-300">
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">---------</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">---------</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">---------</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">---------</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">---------</span></li>
        </ul>
      </div>
      <div className="w-full h-full ">
      <h3 className="text-xl uppercase text-designColor tracking-wider ">Developers</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium  py-6 text-gray-300">
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">---------</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">---------</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">---------</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">---------</span></li>
          <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer">---------</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
