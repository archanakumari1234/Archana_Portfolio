import contactImg from '../assets/images/contact.png'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const ContactLeft = () => {
  return (
    <div className="md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-7">
            <img className="w-full h-60 object-cover rounded-lg " src={contactImg} alt="contactImg" />
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white">Archana Kumari</h3>
                <p className="text-lg font-normal text-gray-400">Frontend Web Developer</p>
                <p className="text-base text-gray-400 tracking-wide">If you have any questions then you can contact me through this phone no. or email.</p>
                <p className="text-base text-gray-400 flex items-center gap-2">Phone: <span className="text-lightText">+91 9555361732</span></p>
                <p className="text-base text-gray-400 flex items-center gap-2">Email: {" "} <span className="text-lightText">archanak233226@gmail.com</span></p>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-base uppercase font-titleFont mb-4 text-gray-300 font-bold">Find me</h2>
                <div className="flex gap-5 w-full ">
                    <span className="bannerIcon"> <a href="https://www.linkedin.com/in/archana-kumari-29bb10262/"> <FaLinkedinIn/></a> </span>
                    <span className="bannerIcon"> <a href="https://github.com/archanakumari1234"><FaGithub/></a> </span>
                    <span className="bannerIcon">  <a href="https://x.com/Archana98486363"><FaTwitter/> </a> </span>
                </div>
            </div>
        </div>
  )
}

export default ContactLeft
