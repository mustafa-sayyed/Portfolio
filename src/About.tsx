import { motion } from "motion/react";

function About() {
  return (
    <div className="min-h-[90vh]">
      <div className="flex w-full h-[85vh] flex-col">
        <motion.h1 className="text-6xl font-semibold text-left">About me</motion.h1>
        <div className="flex flex-col gap-2">

          
        </div>
      </div>
       <motion.hr
          className="h-0.5 w-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1}}
        />
    </div>
  );
}

export default About;
