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
    title: "ASL Interpretation",
    description:
      "Developed a model for continuous American Sign Language (ASL) interpretation using LLaVA-NeXT-Video, fine-tuned on How2Sign dataset with parameter-efficient techniques (LoRA and QLoRA), enhancing accessibility by translating ASL gestures into coherent English text",
    technologies: "Python, PyTorch, LLVM, LLaVA-NeXT-Video, QLoRA",
    image: "/assets/projects/asl.png",
    github: "https://github.com/manisha-goyal/asl-interpreter",
  },
  {
    title: "RAG Chatbot for Research Papers",
    description:
      "Built RAG chatbot for querying research papers, enabling efficient retrieval and generation of context-aware insights to enhance accessibility; integrated LLM metrics tracking to optimize performance and cost, and deployed with a CI/CD pipeline for scalability",
    technologies: "Python, Pinecone, LangChain, OpenAI GPT-3.5-Turbo LLM, Langtrace, Kubernetes", 
    image: "/assets/projects/chatbot.png",
    github: "https://github.com/manisha-goyal/research-paper-rag-chatbot",
  },
  {
    title: "GPU Power Optimization using Frequency Scaling",
    description:
      "Researched GPU energy optimization using clock frequency scaling strategies, leveraging Accel-Sim framework to analyze workload behaviors across NVIDIA architectures; achieved insights into energy-aware configurations for diverse computational tasks",
    technologies: "Accel-Sim, AccelWattch, CUDA",
    image: "/assets/projects/gpu.png",
    github: "https://github.com/manisha-goyal/gpu-energy-optimization",
  },
  {
    title: "Transformer Model Implementation",
    description:
      "Implemented a transformer model from scratch using PyTorch; gained an understanding of its essential components, including multi-head self-attention, positional encodings, and encoder-decoder layers",
    technologies: "Python, PyTorch, Transformers",
    image: "/assets/projects/transformer.png",
    github: "https://github.com/manisha-goyal/transformer-model-implementation",
  },
  {
    title: "ResNet-18 for EMNIST Classification",
    description:
      "Implemented and trained a ResNet-18 model for classifying handwritten digits and uppercase letters using the EMNIST dataset. Evaluated model performance with precision, recall, and F1-score metrics, achieving 93.35% validation accuracy.",
    technologies: "Python, TensorFlow, Keras, EMNIST, ResNet-18, Scikit-learn, Matplotlib",
    image: "/assets/projects/resnet18.png",
    github: "https://github.com/manisha-goyal/resnet18-emnist",
  },
  {
    title: "Object Matching with Hungarian Algorithm",
    description:
      "Implemented bipartite matching of objects across surveillance frames using a custom cost matrix combining IoU and centroid distance; applied the Hungarian algorithm for optimal assignment and visualized results with color-coded bounding boxes",
    technologies: "Python, OpenCV, NumPy, SciPy, Matplotlib, Hungarian Algorithm",
    image: "/assets/projects/hungarian.png",
    github: "https://github.com/manisha-goyal/detr_bipartite_matching",
  },  
  {
    title: "Performance Analysis of Conv2d Layer in CNNs",
    description:
      "Conducted a comprehensive performance analysis of the Conv2d-2 layer in a Convolutional Neural Network (CNN) trained on the MNIST dataset; evaluated both theoretical and empirical metrics, focusing on FLOPs (Floating Point Operations) and memory usage across different batch sizes on an NVIDIA V100 GPU using PyTorch",
    technologies: "Python, PyTorch, NVIDIA Nsight Compute",
    image: "/assets/projects/cnn.png",
    github: "https://github.com/manisha-goyal/cnn-performance-analysis-mnist",
  },
  {
    title: "House Value Prediction",
    description:
      "Developed a machine learning model using XGBoost and other techniques to predict residential property prices in Ames, Iowa, achieving R² score of 0.918; provided actionable insights for real estate stakeholders to optimize investment strategies",
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
                    className="object-cover"
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
