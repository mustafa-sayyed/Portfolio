import { motion } from "motion/react";
import { Button } from "./components/ui/button";
import profilePic from "./assets/profile.png";
import HorizontalLine from "./components/HorizontalLine";
import Connect from "./Connect";
import { useTheme } from "./context/useTheme";
import { Moon, Sun } from "lucide-react";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div className="flex items-center justify-between w-full h-16">
        <a href="/">
          <Button variant="outline" className="rounded-full cursor-pointer">
            Mustafa Sayyed
          </Button>
        </a>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => toggleTheme()}
          >
            {theme === "light" ?
              <Sun />
            : <Moon />}
          </Button>
        </div>
      </div>
      <motion.hr
        className="h-0.5 w-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      />
      <div className="flex items-center justify-center flex-col mt-40">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src={profilePic}
            alt="Mustafa Sayyed"
            className="object-cover dark:opacity-80 w-40 h-40 rounded-full"
          />
          <div className="text-center sm:text-left flex flex-col gap-5">
            <motion.h1 className="text-3xl sm:text-5xl z-50 dark:text-gray-400">
              Mustafa Sayyed
            </motion.h1>
            <Connect />
          </div>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
}

export default Hero;
