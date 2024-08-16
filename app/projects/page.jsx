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
    title: "Unix Shell Implementation",
    description:
      "Designed and developed a simplified Unix shell in C, incorporating functionalities like basic command execution, input/output redirection, pipe-based inter-process communication, and job control for process management",
    technologies: "C, Unix, Shell Scripting, Operating Systems",
    image: "/assets/projects/linux.png",
    github: "https://github.com/manisha-goyal/my-shell",
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
    title: "Multithreaded Run-Length Encoder",
    description:
      "Designed and implemented a scalable thread pool in C for a Run-Length Encoding (RLE) utility, incorporating robust synchronization mechanisms to ensure thread safety, enabling efficient parallel processing and significantly optimizing application performance",
    technologies: "C, Multithreading, Pthreads, Run-Length Encoding, Data Compression, Parallel Processing",
    image: "/assets/projects/rle.png",
    github: "https://github.com/manisha-goyal/multithreaded-run-length-encoder",
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
    title: "Hill Climbing Algorithm for Optimization Problems",
    description:
      "Implemented a Python-based hill climbing algorithm to solve the N-Queens and Knapsack problems, integrating features like random restarts and sideways moves to optimize search efficiency.",
    technologies: "Python, Algorithm Design, Combinatorial Optimization, Heuristic Search, N-Queens Problem, Knapsack Problem",
    image: "/assets/projects/hill_climbing.png",
    github: "https://github.com/manisha-goyal/hill-climbing-solver",
  },
  {
    title: "File Recovery Tool",
    description:
      "Developed a file recovery tool in C for FAT32 file systems, capable of recovering both contiguous and non-contiguous deleted files; implemented features such as SHA-1 validation for file integrity and optimized data retrieval using direct disk mapping",
    technologies: "C, Unix, Operating Systems, FAT32 File Systems, SHA-1, Disk Mapping, System Programming",
    image: "/assets/projects/fat32.png",
    github: "https://github.com/manisha-goyal/fat32-file-recovery-tool",
  },
  {
    title: "Markov Process Solver",
    description:
      "Developed a Markov Decision Process (MDP) solver in Python, implementing value iteration and policy improvement algorithms to optimize decision-making for MDPs; supported configurable discount factors, tolerance levels, and iteration limits to accommodate various scenarios in reward maximization and cost minimization",
    technologies: "Python, Markov Decision Processes, Value Iteration, Policy Improvement, Algorithm Design, Optimization",
    image: "/assets/projects/mdp.png",
    github: "https://github.com/manisha-goyal/markov-process-solver",
  },
  {
    title: "NFT Marketplace DApp",
    description:
      "Developed a decentralized application (DApp) on the Ethereum blockchain for trading, minting, buying, selling, and auctioning NFTs, utilizing Solidity for smart contract development and React for a dynamic frontend. Implemented key features including batch minting, royalty systems, and secure trading mechanisms",
    technologies: "Solidity, Ethereum, ERC-721, Web3.js, React, Node.js, Truffle, Ganache, MetaMask",
    image: "/assets/projects/nft.png",
    github: "https://github.com/manisha-goyal/nft-marketplace-dapp",
  },
  {
    title: "AI-based Logic Solver",
    description:
      "Developed an AI-driven logic solver in Python, integrating advanced algorithms for converting logical expressions into CNF and determining their satisfiability using the DPLL method. The system supporting complex decision-making and automated reasoning in AI applications",
    technologies: "Python, Logical Reasoning, SAT Solvers, BNF to CNF Conversion, DPLL Algorithm, Algorithm Design",
    image: "/assets/projects/dpll.png",
    github: "https://github.com/manisha-goyal/dpll-solver",
  },
  {
    title: "Analysis of Library Training Effectiveness",
    description:
      "Analyzed survey data from 1,000 students to assess SMU Library's training effectiveness; identified significant improvements in research skills using statistical tests and visualizations, leading to actionable training recommendations",
    technologies: "Tableau, JMP, Data Cleaning, Statistical Analysis, Hypothesis Testing, Data Visualization",
    image: "/assets/projects/library.png",
    github: "https://github.com/manisha-goyal/library-training-effectiveness-analysis",
  },
  {
    title: "Personal Developer Portfolio",
    description:
      "Designed and developed a responsive personal portfolio website using Next.js and Tailwind CSS, showcasing projects, skills, and expertise as a software engineer. Integrated Framer Motion for smooth animations and shadcn-ui for enhanced UI components.",
    technologies: "Next.js, React, Tailwind CSS, Framer Motion, Responsive Web Design, shadcn-ui, GitHub, Vercel",
    image: "/assets/demo.png",
    github: "https://github.com/manisha-goyal/portfolio-website",
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
