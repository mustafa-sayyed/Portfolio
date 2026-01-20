import { motion } from "motion/react";
import { Button } from "./components/ui/button";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
  const iconMenu = [
    {
      link: "https://github.com/mustafa-sayyed",
      icon: FaGithub,
    },
    {
      link: "https://linkedin.com/in/mustafa-sayyed",
      icon: FaLinkedin,
    },
    {
      link: "https://x.com/_sayyed_mustafa",
      icon: FaXTwitter,
    },
  ];

  return (
    <div className="min-h-screen">
      <div>
        <div className="flex items-center justify-between w-full h-16">
          <a href="/" target="_blank">
            <Button variant="outline" className="rounded-full cursor-pointer">
              Mustafa Sayyed
            </Button>
          </a>

          <div className="flex items-center gap-2">
            {iconMenu.map((menu) => (
              <Button
                variant="outline"
                className="cursor-pointer rounded-full p-3 py-5"
                key={menu.link}
              >
                <a href={menu.link} target="_blank">
                  <menu.icon />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <motion.hr
          className="h-0.5 w-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1}}
        />
        <div className="flex items-center justify-center flex-col h-[85vh]">
          <motion.h1
            className="text-6xl sm:text-8xl lg:text-9xl z-50 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Mustafa Sayyed
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-center font-light"
          >
            Hey there 👋, I am Sayyed Mustafa, Full Stack Dev and A curious programmer who loves building and shipping projects / products.
          </motion.p>
        </div>
        <motion.hr
          className="h-0.5 w-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1}}
        />
      </div>
    </div>
  );
}

export default Hero;
