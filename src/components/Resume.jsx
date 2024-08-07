import { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Title from "./Title";

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillsData, setSkillsData] = useState(false);
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      <div className="flex justify-center">
        <Title title="" desc="My Resume" />
      </div>
      <div>
        <ul className="flex">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillsData(false) 
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillsData(true) 
            }
            className={`${
              skillsData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Technical skills
          </li>
         
        </ul>
      </div>
      {educationData && <Education />}
      {skillsData && <Skills />}
    </section>
  );
};

export default Resume;
