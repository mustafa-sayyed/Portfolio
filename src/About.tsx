import { motion } from "motion/react";

function About() {
  return (
    <div className="min-h-[90vh]">
      <div className="flex w-full h-[85vh] flex-col">
        <motion.h1 className="text-6xl font-semibold text-left">About me</motion.h1>
        <div className="flex flex-col gap-4 font-light mt-4 ml-4">
          <li>
            I primarily work with JavaScript and TypeScript across the stack and enjoy
            designing systems that are scalable, secure, and maintainable. My comfort zone
            spans from crafting clean, responsive UIs to building robust backend
            architectures, APIs, and databases.
          </li>
          <li>
            What sets me apart is how I learn. I don’t like treating technologies as black
            boxes — I prefer understanding things from first principles. I like
            experimenting, breaking things, fixing them, and then rebuilding them better.
          </li>
          <li>
            I’ve built and explored projects using the MERN stack, worked deeply with
            authentication flows, payment gateways, email systems, databases, and backend
            architecture, and I’m constantly pushing myself toward more production-grade
            engineering practices like caching, queues, background jobs, and system
            design.
          </li>
          <li>
            I believe great software comes from strong fundamentals, thoughtful design,
            and continuous learning. I’m always excited to collaborate, learn from others,
            and build things that actually make an impact.
          </li>
          <li>
            When I’m not coding, you’ll find me reading tech blogs, exploring new
            frameworks, or contributing to open-source projects. I’m passionate about
            continuous learning and growth in the ever-evolving world of software
            development.
          </li>
        </div>
      </div>
      <motion.hr
        className="h-0.5 w-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}

export default About;
