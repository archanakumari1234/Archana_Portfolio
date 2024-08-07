import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaGithub,FaInstagram, FaTwitter, FaLinkedinIn, FaReact} from 'react-icons/fa';
import { SiTailwindcss, SiHtml5, SiJavascript, SiCss3} from 'react-icons/si'

const LeftBanner = () => {
    const [text] = useTypewriter({
        words:['Frontend Developer.', 'Web Designer.', 'Mern-Stack Developer.'],
        loop:true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000
    })
  return (
    <div className="md:w-1/2 mx-6 flex flex-col gap-16">
    <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal text-gray-200">WELCOME TO MY PORTFOLIO </h4>
        <h1 className="md:text-6xl text-3xl font-bold text-white">
            {" "}
            Hi, I&apos;m
            <span className="text-[#ff014f] capitalize"> Archana Kumari</span>
        </h1>
        <h2 className="md:text-3xl text-2xl font-bold text-white">a <span>{text}
            </span><Cursor cursorBlinking='false' cursorStyle="|" cursorColor='#ff014f' /></h2>
        <p className="text-base text-[#c4cfde] leading-6 tracki">I am a recent graduate passionate about web development, eager to start my career in this exciting field. I have a strong foundation in HTML, CSS, and JavaScript, and framework or library like React.js and some backend technologies like Node.Js , Express.Js and MongoDB in database.  I have worked on projects that taught me how to create responsive and user-friendly websites. I love solving problems and learning new things, and I am excited to continue growing my skills. I am ready to contribute to projects and create great digital experiences.</p>
    </div>
    <div>
        <h1 className='text-base uppercase text-[#c4cfde] mb-4 font-semibold'>FIND ME </h1>
        <div className='flex gap-4'>
         <span className='bannerIcon'>
            <a href="https://github.com/archanakumari1234"><FaGithub/></a>
         </span>
         <span className='bannerIcon'>
            <a href="https://www.linkedin.com/in/archana-kumari-29bb10262/"><FaLinkedinIn/></a>
         </span>
         <span className='bannerIcon'>
            <a href="https://x.com/Archana98486363"><FaTwitter/></a>
         </span>
         <span className='bannerIcon'>
            <FaInstagram/>
         </span>
        </div>
    </div>
    <div>
        <h1 className='text-base uppercase text-[#c4cfde] mb-4 font-semibold'>best skill on</h1>
        <div className='flex gap-4'>
         <span className='bannerIcon'>
            <FaReact/>
         </span>
         <span className='bannerIcon'>
            <SiJavascript/>
         </span>
         <span className='bannerIcon'>
            <SiTailwindcss/>
         </span>
         <span className='bannerIcon'>
            <SiHtml5/>
         </span>
         <span className='bannerIcon'>
            <SiCss3/>
         </span>
        </div>
    </div>
  </div>
  )
}

export default LeftBanner
