import {motion} from"motion/react"
import HorizontalLine from "./components/HorizontalLine";

// const projects = [
//   {
//     name: "SnapShop",
//     link: "https://snapshop.mustafasayyed.dev",
//     image: "",
//     description: "An e-commerce web application built with React, Node.js, and MongoDB, featuring user authentication, product management, and a shopping cart system.",
//   }
// ]


function Projects() {
  return (
    <div>
        <div>
          <motion.h1 className="text-6xl font-semibold text-left">Projects</motion.h1>
        </div>

        <HorizontalLine />  
    </div>
  );
}

export default Projects;
