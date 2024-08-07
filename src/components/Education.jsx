import ResumeCard from "./ResumeCard";
import {motion} from 'framer-motion';

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} >
      <div className="pl-3">
        <div className="pt-12  gap-3">
          <h2 className="md:text-4xl text-3xl font-bold text-gray-300 ">Educational Qualification</h2>
        </div>
        <div className="my-14 w-full md:w-1/2 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title="B.tech in Computer Science"
            subtitle="AKTU Lucknow Utter Pradesh"
            result="7.3 CGPA"
            desc="I have completed my B.tech (Bachelor of Technology) in Computer Science in 2024 with 7.3 CGPA without any backlog"
          />
          <ResumeCard
            title="Intermediate (12th)"
            subtitle="A S B S Inter College Rasra Ballia"
            result="73%"
            desc="I have done my 12th with 73% marks in 2020 with PCM background from Goverment College Amar Sahid Bhagat Singh Inter College, Rasra Ballia (U.P)"
          />
          <ResumeCard
            title="High School (10th)"
            subtitle="Prabhunath Yadav Adarsh Inter College Ghazipur"
            result="84%"
            desc="I have done my 10th with 84% marks from Prabhunath Yadav Adarsh Inter College Ghazipur (U.P) in 2018"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
