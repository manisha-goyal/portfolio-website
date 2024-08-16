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
    title: "House Value Prediction",
    description:
      "Developed a machine learning model using XGBoost and other techniques to predict residential property prices in Ames, Iowa, achieving an R² score of 0.918; provided actionable insights for real estate stakeholders to optimize investment strategies",
    technologies: "Python, Scikit-learn, XGBoost, Pandas, Matplotlib, SHAP values",
    image: "/assets/projects/housing.png",
    github: "https://github.com/manisha-goyal/housing-value-predictor",
  },
  {
    title: "Dice Game Simulation",
    description:
      "Developed a dice game simulation utilizing Q-Learning to optimize dice-rolling strategies, dynamically adjusting decisions based on game state and past outcomes to maximize rewards; implemented features such as customizable game settings",
    technologies: "Python, Q-Learning, Reinforcement Learning",
    image: "/assets/projects/dice.png",
    github: "https://github.com/manisha-goyal/reinforcement-learning-dice-game",
  },
  {
    title: "Unix Shell Implementation",
    description:
      "Designed and developed a simplified Unix shell in C, incorporating functionalities like basic command execution, input/output redirection, pipe-based inter-process communication, and job control for process management",
    technologies: "C, Unix, Shell Scripting, Operating Systems",
    image: "/assets/projects/linux.png",
    github: "https://github.com/manisha-goyal/my-shell",
  },
  {
    title: "Bookstore Database & Recommendation System",
    description:
      "Designed and implemented a bookstore management system with integrated machine learning models to optimize inventory management and provide personalized customer recommendations, enhancing both operational efficiency and customer experience",
    technologies: "Python, Scikit-learn, MySQL, GCP, Flask, Pandas, SQL",
    image: "/assets/projects/bookstore.png",
    github: "https://github.com/manisha-goyal/bookstore-database-management",
  },
  {
    title: "Analysis of Library Training Effectiveness",
    description:
      "Analyzed survey data from 1,000 students to assess SMU Library's training effectiveness; identified significant improvements in research skills using statistical tests and visualizations, leading to actionable training recommendations",
    technologies: "Tableau, JMP, Data Cleaning, Statistical Analysis, Hypothesis Testing, Data Visualization",
    image: "/assets/projects/library.png",
    github: "https://github.com/manisha-goyal/library-training-effectiveness-analysis",
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
                <div className="border border-white/20"></div>
                <p className="text-white/80 flex-1">{project.description}</p>
                <div className="border border-white/20"></div>
                <p className="text-accent">{project.technologies}</p>
                <div className="flex justify-end">
                  <Link href={project.github} legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
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
                    </a>
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
