import { motion } from "motion/react";
import { BiLogoJavascript, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaDocker, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { Button } from "./components/ui/button";
import { DiMongodb } from "react-icons/di";
import {
  SiExpress,
  SiGit,
  SiGithubactions,
  SiMongoose,
  SiNginx,
  SiPrisma,
  SiReactquery,
  SiRedux,
  SiShadcnui,
} from "react-icons/si";

const menu = [
  {
    icon: FaNodeJs,
    name: "Node.js",
  },
  {
    icon: FaReact,
    name: "React",
  },
  {
    icon: BiLogoTailwindCss,
    name: "Tailwind CSS",
  },
  {
    icon: BiLogoJavascript,
    name: "JavaScript",
  },
  {
    icon: BiLogoTypescript,
    name: "TypeScript",
  },
  {
    icon: FaHtml5,
    name: "HTML",
  },
  {
    icon: FaCss3,
    name: "CSS",
  },
  {
    icon: DiMongodb,
    name: "MongoDB",
  },
  {
    icon: SiMongoose,
    name: "Mongoose",
  },
  {
    icon: SiRedux,
    name: "React Redux",
  },
  {
    icon: SiShadcnui,
    name: "Shadcn UI",
  },
  {
    icon: FaGithub,
    name: "GitHub",
  },
  {
    icon: SiGit,
    name: "Git",
  },
  {
    icon: SiExpress,
    name: "Express.js",
  },
  {
    icon: SiNginx,
    name: "Nginx",
  },
  {
    icon: SiGithubactions,
    name: "GitHub Actions",
  },
  {
    icon: SiPrisma,
    name: "Prisma",
  },
  {
    icon: FaDocker,
    name: "Docker",
  },
  {
    icon: SiReactquery,
    name: "React Query",
  },
];

function Technologies() {
  return (
    <div>
      <div className="h-[85vh] ">
        <motion.h1 className="text-6xl font-semibold text-left">Tech Stack</motion.h1>
        <div className="flex flex-wrap gap-2 mt-10">
          {menu.map((item, index) => (
            <Button key={index} variant={"outline"}>
              <item.icon />
              {item.name}
            </Button>
          ))}
        </div>
      </div>

      <motion.hr
        className="h-0.5 w-full"
        initial={{ width: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ width: "100%" }}
      />
    </div>
  );
}

export default Technologies;
