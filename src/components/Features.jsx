import Card from "./Card"
import Title from "./Title"
import { FaLaptopCode, FaPalette} from "react-icons/fa";
import { DiNodejsSmall} from 'react-icons/di'

const Features = () => {
  return (
    <section id="features" className="w-full h-auto  py-20  border-b-[1px] border-b-black ">
   <div className="flex justify-center items-center text-center">
        <Title title="Features" desc="What I do" />
      </div>
  <div className="grid md:grid-cols-3 gap-20 grid-cols-1">
  <Card 
  title="Web Development"
  desc="Web development: creating and maintaining websites with design, functionality, security."
  icons={FaLaptopCode}
  />
  <Card 
  title="MERN Stack"
  desc="MERN stack: MongoDB, Express.js, React.js, Node.js for full-stack development."
  icons={DiNodejsSmall}
  />
  <Card 
  title="UI development"
  desc="UI development: crafting user interfaces with design, usability, and interaction."
  icons={FaPalette}
  />
  
  </div>
  </section>
  )
}

export default Features
