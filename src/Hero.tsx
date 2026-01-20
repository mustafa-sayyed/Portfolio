import { motion } from "motion/react";
import { Button } from "./components/ui/button";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import profilePic from "./assets/profile.png";

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
          transition={{ duration: 1 }}
        />
        <div className="flex items-center justify-center flex-col h-[85vh]">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <img
              src={profilePic}
              alt="Mustafa Sayyed"
              className="w-64 h-64 rounded-full object-cover"
            />
            <div className="text-center sm:text-left">
              <motion.h1 className="text-4xl sm:text-5xl z-50">Mustafa Sayyed</motion.h1>
              <motion.p className="mt-4 max-w-104 font-light">
                Hey there 👋, I am Mustafa Sayyed, I love building real-world products using modern web technologies and enjoy diving deep into how things work rather than just making them work.
              </motion.p>
            </div>
          </div>
        </div>
        <motion.hr
          className="h-0.5 w-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

export default Hero;
