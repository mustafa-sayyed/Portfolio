import { Button } from "./components/ui/button";
import profilePic from "./assets/profile.png";
import HorizontalLine from "./components/HorizontalLine";
import Connect from "./Connect";
import { ThemeTogglerButton } from "./components/ThemeBtn";

function Hero() {
  return (
    <div>
      <div className="flex items-center justify-between w-full h-16">
        <a href="/">
          <Button variant="outline" className="rounded-full cursor-pointer">
            Mustafa Sayyed
          </Button>
        </a>
        <div className="flex items-center gap-2">
          <ThemeTogglerButton />
        </div>
      </div>
      <HorizontalLine className="my-0" />
      <div className="flex items-center justify-center flex-col mt-40">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src={profilePic}
            alt="Mustafa Sayyed"
            className="object-cover w-40 h-40 rounded-full"
          />
          <div className="text-center sm:text-left flex flex-col gap-2 dark:text-gray-300">
            <h1 className="text-3xl sm:text-5xl z-50">
              Mustafa Sayyed
            </h1>
            <p className="font-light mb-2">
              19 • Engineer • Full Stack Developer
            </p>
            <Connect />
          </div>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
}

export default Hero;
