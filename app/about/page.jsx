"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// about data
const about = {
  title: "About me",
  description:
    "As a creative problem solver, I excel at turning ideas into efficient software solutions. With a collaborative spirit, I am dedicated to delivering impactful work and growing professionally.",
};

// education data
const education = {
  icon: "/assets/about/cap.svg",
  title: "My education",
  description:
    "Solid academic foundation in computer science.",
  items: [
    {
      institution: "New York University",
      degree: "Master of Science in Computer Science",
      duration: "Sep 2023 - May 2025 (expected)",
      location: "New York City, NY",
      coursework: "Fundamental Algorithms, Operating Systems, Programming Language, Data Science, Artificial Intelligence, Databases, DevOps",
    },
    {
      institution: "Singapore Management University",
      degree: "Bachelor of Science in Information Systems Management",
      duration: "Aug 2014 - Apr 2018",
      location: "Singapore",
      coursework: "Software Engineering, Object Oriented Application Development, Computational Thinking, Data Mining"
    },
    {
      institution: "University of Mannheim",
      degree: "Exchange Semester, School of Business Informatics & Mathematics",
      duration: "Aug 2017 - Dec 2017",
      location: "Mannheim, Germany",
      coursework: "Large-Scale Data Management, Text Analytics, German",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Adept in the React Ecosystem with proficiency in UI/UX collaboration using Figma.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto xl:h-[564px]">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[25vh]">
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <div className="relative pl-4">
                  <div className="absolute left-0 top-0 w-1 h-full bg-accent"></div>
                  <ul className="space-y-8">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="flex gap-4 items-start">
                          <div className="w-4 h-4 mt-1 rounded-full bg-accent"></div>
                          <div>
                            <h3 className="text-xl font-semibold">{item.institution}</h3>
                            <p className="text-white/60">{item.degree}</p>
                            <p className="text-white/60">
                              <span className="text-accent">Coursework:</span> {item.coursework}
                            </p>
                            <span className="text-accent">{item.duration} | {item.location}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
