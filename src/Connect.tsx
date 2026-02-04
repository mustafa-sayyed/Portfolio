import { MdEmail } from "react-icons/md";
import { Button } from "./components/ui/button";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/animate-ui/components/animate/tooltip";

const connectMenus = [
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1l9UAORrPx9grfxk51OBsKPqR9F2MLSjy/view?usp=sharing",
    icon: IoDocumentTextOutline,
  },
  { 
    name: "LinkedIn",
    link: "https://linkedin.com/in/mustafa-sayyed",
    icon: GrLinkedin,
  },
  {
    name: "X / Twitter",
    link: "https://x.com/_sayyed_mustafa",
    icon: BsTwitterX,
  },
  {
    name: "GitHub",
    link: "https://github.com/sayyed-mustafa",
    icon: GrGithub,
  },
  {
    name: "Email",
    link: "mailto:mustafasayyed2429@gmail.com",
    icon: MdEmail,
  },
];

function Connect() {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <TooltipProvider>
          {connectMenus.map((menu) => (
            <Tooltip side="bottom" key={menu.name}  >
              <TooltipTrigger>
                <Button variant="outline" className="cursor-pointer" key={menu.link}>
                  <a href={menu.link} target="_blank" className="flex items-center gap-2">
                    <menu.icon />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>{menu.name}</p></TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
}

export default Connect;
