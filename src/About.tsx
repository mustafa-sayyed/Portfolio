import { motion } from "motion/react";
import HorizontalLine from "./components/HorizontalLine";

function About() {
  return (
    <div>
      <div className="flex w-full flex-col">
        <div className="flex flex-col gap-4 font-light mt-4 ml-4">
          <p>Hey there 👋, I am Mustafa Sayyed, I love building real-world products using modern web technologies and enjoy diving deep into how things work rather than just making them work.</p>
          <p>
            I primarily work with JavaScript and TypeScript across the stack and enjoy
            designing systems that are scalable, secure, and maintainable.
          </p>
          <p>
            What sets me apart is how I learn. I don’t pke treating technologies as black
            boxes — I prefer understanding things from first principles. I pke
            experimenting, breaking things, fixing them, and then rebuilding them better.
          </p>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
}

export default About;
