"use client";

import React from "react";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    title: "Bookstore Database & Recommendation System",
    description:
      "An advanced bookstore database system integrating Machine Learning algorithms for inventory management and personalized recommendations",
    technologies: "Html 5, CSS 3, Javascript",
    image: "/assets/projects/bookstore.png",
    github: "",
  },
  {
    title: "Shell Implementation",
    description:
      "A simplified UNIX shell in C, incorporating features like basic command execution, input/output redirection, pipe-based inter-process communication, and job control for process management",
    technologies: "Html 5, Tailwind CSS, Javascript",
    image: "/assets/projects/linux.png",
    github: "",
  },
  {
    title: "Analysis of Library Training Effectiveness",
    description:
      "Research on effectiveness of SMU Library's training efforts on students' research skills through statistical and text analysis on survey data from 1000 students",
    technologies: "Html 5, CSS 3, Javascript",
    image: "/assets/projects/library.png",
    github: "",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 sm:py-6 bg-dark-gray"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-secondary p-4 rounded-lg"
            >
              <div className="relative w-full h-[180px] sm:h-[200px] bg-pink-50/20">
                {/* overlay */}
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                {/* image */}
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white text-white/90">
                  {project.title}
                </h2>
                <p className="text-white/80 flex-1">{project.description}</p>
                <div className="border border-white/20"></div>
                <p className="text-white/70">{project.technologies}</p>
                <div className="flex justify-end">
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[30px] h-[30px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
