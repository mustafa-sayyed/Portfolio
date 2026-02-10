import { Dot, Link } from "lucide-react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "./components/animate-ui/components/headless/accordion";
import HorizontalLine from "./components/HorizontalLine";
import { Button } from "./components/ui/button";
import { FaGithub } from "react-icons/fa6";
import Title from "./components/Title";

const projects = [
  {
    name: "SnapShop",
    link: "https://snapshop.mustafasayyed.dev",
    githubLink: "https://github.com/mustafa-sayyed/snapshop",
    image: "",
    description:
      "A production-ready e-commerce platform built with the MERN stack, featuring secure REST APIs, Dockerized deployment on Azure, and a CI/CD pipeline with GitHub Actions.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Docker",
      "Azure App Service",
      "GitHub Actions",
      "JWT",
      "Cloudinary",
      "Razorpay",
      "Tailwind CSS",
    ],
    features: [
      "Secure REST APIs with Node.js, Express, and MongoDB",
      "Dockerized backend with multi-stage builds deployed on Azure App Service",
      "CI/CD pipeline with GitHub Actions for automated build and deployment",
      "Responsive admin dashboard with React, Shadcn UI, and TanStack Table",
      "MongoDB aggregation pipelines for analytics and chart data",
      "JWT authentication, Google OAuth, and secure forgot-password flow",
      "Email workflows using Resend and Quill.js (RTE) for admin campaigns",
      "Image uploads with Multer and Cloudinary",
      "Razorpay payment gateway with secure webhook verification",
    ],
  },
  {
    name: "WriteYourThoughts",
    link: "https://writeyourthoughts.mustafasayyed.dev",
    githubLink: "https://github.com/mustafa-sayyed/writeyourthoughts",
    image: "",
    description:
      "A full-featured blogging platform built with React.js and Appwrite for backend services, enabling users to create, edit, and share their thoughts with a community of writers.",
    techStack: ["React.js", "Appwrite", "Vite", "Tailwind CSS"],
    features: [
      "Secure user authentication and authorization with Appwrite",
      "Rich-text editor for creating and formatting blog posts",
      "Image uploads and media management",
      "Database and file storage with Appwrite backend services",
      "Responsive design for seamless access across devices",
    ],
  },
];

function Projects() {
  return (
    <div>
      <div>
        <Title title="Proof of Work" />
        <p className="mt-2 text-lg font-light">
          Here are some of the projects I've worked on. Click on each project to see more
          details, including the tech stack and features and links of Projects.
        </p>
      </div>

      <div className="my-10">
        <Accordion>
          {projects.map((project) => (
            <AccordionItem
              key={project.name}
              className="rounded-lg border p-4 my-2 border-b-4 last:border-b-4"
            >
              <AccordionButton className="cursor-pointer">
                <div className="flex flex-col gap-2">
                  <p className="text-3xl font-semibold">{project.name}</p>
                  <p className="font-light">{project.description}</p>
                </div>
              </AccordionButton>
              <AccordionPanel>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex gap-1"
                    >
                      Link <Link />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex gap-1"
                    >
                      GitHub <FaGithub />
                    </a>
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold mb-2">Tech Stack:</h1>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="rounded-md"
                        >
                          {tech}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-semibold">Features:</h1>
                    {project.features.map((feature, index) => (
                      <p key={index} className="text-sm flex">
                        <Dot /> {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <HorizontalLine />
    </div>
  );
}

export default Projects;
