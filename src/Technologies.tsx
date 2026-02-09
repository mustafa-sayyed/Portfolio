import { Button } from "./components/ui/button";
import { SiExpress } from "react-icons/si";
import Title from "./components/Title";
import HorizontalLine from "./components/HorizontalLine";
import {
  JavascriptIcon,
  CssIcon,
  DockerIcon,
  GitIcon,
  NodejsIconIcon,
  PrismaIcon,
  TypescriptIcon,
  ShadcnuiIcon,
  TailwindcssIcon,
  ReactQueryIcon,
  ReactIcon,
  GithubActionsIcon,
  GithubTwoIcon,
  MongodbIcon,
  NextjsIcon,
  HtmlIcon,
  ReduxIcon,
  RedisIcon,
  NginxIcon,
  MongooseIcon,
} from "./components/CustomIcons";

const menuWithCustomIcons = [
  {
    icon: NodejsIconIcon,
    name: "Node.js",
  },
  {
    icon: ReactIcon,
    name: "React",
  },
  {
    icon: TailwindcssIcon,
    name: "Tailwind CSS",
  },
  {
    icon: JavascriptIcon,
    name: "JavaScript",
  },
  {
    icon: TypescriptIcon,
    name: "TypeScript",
  },
  {
    icon: CssIcon,
    name: "CSS",
  },
  {
    icon: HtmlIcon,
    name: "HTML",
  },
  {
    icon: MongodbIcon,
    name: "MongoDB",
  },
  {
    icon: ShadcnuiIcon,
    name: "Shadcn UI",
  },
  {
    icon: GithubTwoIcon,
    name: "GitHub",
  },
  {
    icon: GitIcon,
    name: "Git",
  },
  {
    icon: GithubActionsIcon,
    name: "GitHub Actions",
  },
  {
    icon: PrismaIcon,
    name: "Prisma",
  },
  {
    icon: DockerIcon,
    name: "Docker",
  },
  {
    icon: ReactQueryIcon,
    name: "React Query",
  },
  {
    icon: NextjsIcon,
    name: "Next.js",
  },
  {
    icon: RedisIcon,
    name: "Redis",
  },
  {
    icon: ReduxIcon,
    name: "Redux",
  },
  {
    icon: SiExpress,
    name: "Express.js",
  },
  {
    icon: NginxIcon,
    name: "Nginx",
  },
  {
    icon: MongooseIcon,
    name: "Mongoose",
  },
];

function Technologies() {
  return (
    <div>
      <div className="min-h-[70vh]">
        <Title title="Technologies" />
        <p className="text-lg font-light mt-2">
          Here are some of the technologies I work with:
        </p>
        <div className="flex flex-wrap gap-2 mt-8 ">
          {menuWithCustomIcons.map((item, index) => (
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
