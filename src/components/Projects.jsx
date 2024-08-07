import ProjectsCard from "./ProjectsCard"
import Title from "./Title"
import projectOne from '../assets/images/projectOne.png'
import projectTwo from '../assets/images/projectTwo.png'
import projectThree from '../assets/images/projectThree.png'

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black ">
     <div className="flex justify-center">
     <Title
      desc="My Projects"
      />
     </div>
     <div className="grid md:grid-cols-3 gap-14">
        <ProjectsCard
        title="Weather App"
        desc="This weather app created using React that fetches real time weather data from API. And it displays temperature , weather condition, humidity and wind speed of any city you search for."
        src={projectOne}
        link="https://archanakumari1234.github.io/Weather_App/"
        />
        <ProjectsCard
        title="Todo App"
        desc="Todo App created using React and it has features like creating, editing, deleting, and marking tasks as complete. and all todo data is securely stored in local storage."
        src={projectTwo}
        link="https://archanakumari1234.github.io/todoApp/"
        />
        <ProjectsCard
        title="Live Code Editor"
        desc="This is live code editor using HTMl, CSS and JavaScript. and this shows live output of html, css and javascript."
        src={projectThree}
        link="https://archanakumari1234.github.io/CodeEditor/"
        />
        
     </div>
    </section>
  )
}

export default Projects
