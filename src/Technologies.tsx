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
import Title from "./components/Title";
import HorizontalLine from "./components/HorizontalLine";

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
      <div className="min-h-[70vh]">
        <Title title="Technologies" />
        <p className="text-lg font-light mt-2">Here are some of the technologies I work with:</p>
        <div className="flex flex-wrap gap-2 mt-8">
          {menu.map((item, index) => (
            <Button key={index} variant={"outline"}>
              <item.icon />
              {item.name}
            </Button>
          ))}
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
}

export default Technologies;
