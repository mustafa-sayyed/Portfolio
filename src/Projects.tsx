import {motion} from"motion/react"
function Projects() {
  return (
    <div className="min-h-[90vh]">
        <div className="h-[85vh] ">
          <motion.h1 className="text-6xl font-semibold text-left">Projects</motion.h1>
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

export default Projects;
