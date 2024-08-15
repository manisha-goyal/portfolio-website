"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Import all the icons
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaJava,
  FaLinux, FaEthereum, FaGitAlt, FaGithub, FaJenkins,
} from "react-icons/fa";
import {
  SiCplusplus, SiC, SiScala, SiSolidity, SiJunit5, SiFlask,
  SiPytest, SiSpringboot, SiCucumber, SiWeb3Dotjs, SiScikitlearn,
  SiNumpy, SiPandas, SiDocker, SiKubernetes, SiGooglecloud, SiAmazon,
  SiRedhatopenshift, SiAzuredevops, SiMysql, SiSwagger, SiApachehadoop,
  SiApachekafka, SiApachespark, SiBlockchaindotcom, SiTableau, SiJirasoftware,
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineRadarChart, AiFillApi } from "react-icons/ai";
import { DiScrum } from "react-icons/di";
import { LuBrainCircuit } from "react-icons/lu";

const about = {
  title: "About me",
  description: [
    "I'm a software engineer with a deep passion for creating innovative and scalable solutions. Currently, I'm pursuing a Master's in Computer Science at New York University, where I'm delving into cutting-edge topics like Artificial Intelligence and Machine Learning.",
    "My journey has taken me from developing decentralized applications at J.P. Morgan to building scalable data lakes for cybersecurity. Now, I'm excited to explore new opportunities where I can combine my technical expertise with my love for innovation.",
    "When I'm not coding, you'll find me experimenting with new recipes, practicing yoga, or binge-watching the latest TV shows and movies."
  ],
};

const aboutTabs = [
  {
    title: "Education",
    description: "Solid academic foundation in computer science.",
    items: [
      {
        institution: "New York University",
        degree: "Master of Science in Computer Science, Courant Institute of Mathematical Sciences",
        duration: "Sep 2023 - May 2025 (expected)",
        location: "New York City, NY",
        coursework:
          "Fundamental Algorithms, Operating Systems, Programming Language, Data Science, Artificial Intelligence, Databases, DevOps",
      },
      {
        institution: "Singapore Management University",
        degree: "Bachelor of Science in Information Systems Management",
        duration: "Aug 2014 - Apr 2018",
        location: "Singapore",
        coursework:
          "Software Engineering, Object Oriented Application Development, Computational Thinking, Data Mining",
      },
      {
        institution: "University of Mannheim",
        degree:
          "Exchange Semester, School of Business Informatics & Mathematics",
        duration: "Aug 2017 - Dec 2017",
        location: "Mannheim, Germany",
        coursework:
          "Large-Scale Data Management, Text Analytics, German",
      },
    ],
  },
  {
    title: "Skills",
    description:
      "Adept in the React Ecosystem with proficiency in UI/UX collaboration using Figma.",
    skillCategories: [
      {
        category: "Languages",
        skills: [
          { icon: <FaJava />, name: "java" },
          { icon: <FaPython />, name: "python" },
          { icon: <SiCplusplus />, name: "C++" },
          { icon: <SiC />, name: "C" },
          { icon: <SiScala />, name: "scala" },
          { icon: <SiSolidity />, name: "solidity" },
          { icon: <FaNodeJs />, name: "node.js" },
          { icon: <BsFiletypeSql />, name: "sql" },
          { icon: <FaHtml5 />, name: "html 5" },
          { icon: <FaCss3 />, name: "css 3" },
          { icon: <FaJs />, name: "javascript" },
        ],
      },
      {
        category: "Frameworks and Libraries",
        skills: [
          { icon: <SiSpringboot />, name: "sprintboot" },
          { icon: <SiFlask />, name: "flask" },
          { icon: <FaReact />, name: "react.js" },
          { icon: <SiPandas />, name: "pandas" },
          { icon: <SiJunit5 />, name: "jUnit" },
          { icon: <SiPytest />, name: "pytest" },
          { icon: <SiCucumber />, name: "cucumber" },
          { icon: <SiWeb3Dotjs />, name: "web3.js" },
        ],
      },
      {
        category: "Machine Learning",
        skills: [
          { icon: <SiScikitlearn />, name: "scikit-learn" },
          { icon: <SiNumpy />, name: "numpy" },
          { icon: <AiOutlineRadarChart />, name: "matPlotLib" },
        ],
      },
      {
        category: "Cloud and DevOps",
        skills: [
          { icon: <SiDocker />, name: "docker" },
          { icon: <SiKubernetes />, name: "kubernetes" },
          { icon: <SiGooglecloud />, name: "gcp" },
          { icon: <SiAmazon />, name: "aws" },
          { icon: <SiRedhatopenshift />, name: "redhat openshift" },
          { icon: <FaJenkins />, name: "jenkins" },
          { icon: <FaGitAlt />, name: "git" },
          { icon: <FaGithub />, name: "github" },
        ],
      },
      {
        category: "Databases",
        skills: [
          { icon: <SiMysql />, name: "mySql" },
          { icon: <BiLogoPostgresql />, name: "postgresql" },
        ],
      },
      {
        category: "SDLC and Practices",
        skills: [
          { icon: <DiScrum />, name: "agile/scrum" },
          { icon: <SiAzuredevops />, name: "devOps" },
          { icon: <LuBrainCircuit />, name: "design-thinking" },
          { icon: <SiJirasoftware />, name: "jira" },
        ],
      },
      {
        category: "Tools and Others",
        skills: [
          { icon: <FaLinux />, name: "linux" },
          { icon: <AiFillApi />, name: "rest apis" },
          { icon: <SiSwagger />, name: "swagger" },
          { icon: <SiApachehadoop />, name: "hadoop" },
          { icon: <SiApachekafka />, name: "kafka" },
          { icon: <SiApachespark />, name: "spark" },
          { icon: <FaEthereum />, name: "ethereum" },
          { icon: <SiBlockchaindotcom />, name: "quorum" },
          { icon: <SiTableau />, name: "tableau" },
        ],
      },
    ],
  },
];

const About = () => {
  const [selectedAbout, setSelectedAbout] = useState(0); // Default to "Education"

  const renderContent = () => {
    if (aboutTabs[selectedAbout].items) {
      return (
        <ul className="space-y-8 text-white">
          {aboutTabs[selectedAbout].items.map((item, index) => (
            <li key={index} className="flex flex-col bg-secondary p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <span className="text-accent">▹</span>
                <h2 className="text-2xl font-bold text-white mb-2 text-white/90">
                  {item.institution}
                </h2>
              </div>
              <p className="text-accent">{item.degree}</p>
              <p className="text-white/80">{"Coursework: "}{item.coursework}</p>
              <span className="text-white/70">{item.duration} | {item.location}</span>
            </li>
          ))}
        </ul>
      );
    } else if (aboutTabs[selectedAbout].skillCategories) {
      return (
        <div className="space-y-8">
          {aboutTabs[selectedAbout].skillCategories.map((category, index) => (
            <div key={index}>
              <div className="flex items-start space-x-2 mb-4">
                <span className="text-accent">▹</span>
                <h3 className="text-2xl font-semibold text-white text-white/90">
                  {category.category}
                </h3>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-[30px]">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex flex-col items-center justify-center text-center p-4 bg-secondary rounded-lg">
                    <div className="text-4xl text-accent mb-2">{skill.icon}</div>
                    <p className="text-white/60">{skill.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else {
      return <p className="text-white">{aboutTabs[selectedAbout].description}</p>;
    }
  };

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-start justify-start py-12 xl:py-0 bg-dark-gray"
    >
      <div className="container mx-auto pb-16">
        {/* About */}
        <div className="mb-16 flex flex-col items-start xl:items-center text-left xl:text-center">
          <h3 className="text-4xl font-bold text-white/90">{about.title}</h3>
          <div className="bg-secondary p-4 mt-4 rounded-lg text-justify">
            {about.description.map((paragraph, index) => (
              <p
                key={index}
                className={`max-w-[850px] text-white/60 text-justify ${index === 0 ? 'mt-0' : 'mt-4'}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col xl:flex-row">
          {/* Left Sidebar */}
          <div className="flex flex-col xl:w-[20%] p-4 border-r border-accent">
            {aboutTabs.map((aboutTab, index) => (
              <button
                key={index}
                className={`text-left p-4 cursor-pointer transition-all duration-300 flex items-center gap-4 rounded-lg ${index === selectedAbout
                  ? "text-accent bg-accent bg-opacity-20"
                  : "text-gray-400 bg-dark-gray"
                  }`}
                onClick={() => setSelectedAbout(index)}
              >
                <span className="text-lg font-semibold">{aboutTab.title}</span>
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="flex flex-col xl:w-[80%] pl-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
