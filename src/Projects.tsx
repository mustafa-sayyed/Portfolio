import {motion} from"motion/react"

const projects = [
  {
    name: "SnapShop",
    link: "https://snapshop.mustafasayyed.dev",
    image: "",
    description: "An e-commerce web application built with React, Node.js, and MongoDB, featuring user authentication, product management, and a shopping cart system.",
  }
]


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
