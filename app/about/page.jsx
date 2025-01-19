"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import all the icons
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaJava,
  FaLinux, FaEthereum, FaGitAlt, FaGithub, FaJenkins,
} from "react-icons/fa";
import { FaNoteSticky, FaDatabase } from "react-icons/fa6";
import {
  SiCplusplus, SiC, SiScala, SiSolidity, SiJunit5, SiFlask, SiPostman,
  SiPytest, SiSpringboot, SiWeb3Dotjs, SiScikitlearn, SiOpenapiinitiative,
  SiNumpy, SiPandas, SiDocker, SiKubernetes, SiGooglecloud, SiAmazon,
  SiRedhatopenshift, SiAzuredevops, SiMysql, SiSwagger, SiApachehadoop,
  SiApachekafka, SiApachespark, SiBlockchaindotcom, SiTableau, SiJirasoftware,
  SiTailwindcss, SiPytorch, SiOpencv, SiMongodb, SiLangchain
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineRadarChart, AiFillApi, AiOutlineOpenAI } from "react-icons/ai";
import { DiScrum, DiJira } from "react-icons/di";

const about = {
  title: "About me",
  description: [
    "I'm a software engineer with a passion for applying technology and innovation to solve complex problems and make a tangible impact. Currently, I'm pursuing a Master's in Computer Science at New York University (Courant Institute of Mathematical Sciences), where I'm delving into cutting-edge topics like Artificial Intelligence and Machine Learning.",
    "My journey has taken me from developing decentralized applications at J.P. Morgan, including contributing to pioneering projects like the JPM Coin System, to building scalable data lakes for cybersecurity. I thrive on teamwork and innovation, always seeking to collaborate on projects that push technological boundaries and drive progress. Now, I'm excited to explore new opportunities where I can combine my technical expertise with my love for innovation.",
    "When I'm not coding, you'll find me experimenting with new recipes, practicing yoga, or binge-watching the latest TV shows and movies!"
  ],
  image: "/assets/about/photo.png"
};

const aboutTabs = [
  {
    title: "Education",
    items: [
      {
        institution: "New York University",
        degree: "Master of Science in Computer Science, Courant Institute of Mathematical Sciences",
        duration: "Sep 2023 - May 2025 (expected)",
        location: "New York, NY",
        coursework:
          "Fundamental Algorithms, Operating Systems, Programming Languages, DevOps, Data Science, Artificial Intelligence, Natural Language Processing, Computer Vision, GPUs, Cloud and Machine Learning",
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
    skillCategories: [
      {
        category: "Languages and Web Technologies",
        skills: [
          { icon: <FaJava />, name: "Java" },
          { icon: <SiScala />, name: "Scala" },
          { icon: <FaPython />, name: "Python" },
          { icon: <SiC />, name: "C" },
          { icon: <SiCplusplus />, name: "C++" },
          { icon: <SiSolidity />, name: "Solidity" },
          { icon: <BsFiletypeSql />, name: "SQL" },
          { icon: <FaNodeJs />, name: "Node.js" },
          { icon: <FaJs />, name: "JavaScript" },
          { icon: <FaHtml5 />, name: "HTML" },
          { icon: <FaCss3 />, name: "CSS" },
        ],
      },
      {
        category: "Frameworks",
        skills: [
          { icon: <SiSpringboot />, name: "SpringBoot" },
          { icon: <SiFlask />, name: "Flask" },
          { icon: <FaReact />, name: "React" },
          { icon: <SiTailwindcss />, name: "TailwindCSS" },
          { icon: <SiJunit5 />, name: "JUnit" },
          { icon: <SiPytest />, name: "Pytest" },
          { icon: <FaNoteSticky />, name: "Behave" },
        ],
      },
      {
        category: "Databases",
        skills: [
          { icon: <SiMysql />, name: "MySQL" },
          { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
          { icon: <SiMongodb />, name: "MongoDB" },
          { icon: <FaDatabase />, name: "Pinecone" },
        ],
      },
      {
        category: "Machine Learning",
        skills: [
          { icon: <SiPytorch />, name: "PyTorch" },
          { icon: <SiScikitlearn />, name: "Scikit-Learn" },
          { icon: <SiNumpy />, name: "NumPy" },
          { icon: <SiPandas />, name: "Pandas" },
          { icon: <AiOutlineRadarChart />, name: "Matplotlib" },
          { icon: <SiOpencv />, name: "OpenCV" },
          { icon: <SiLangchain />, name: "LangChain" },
          { icon: <AiOutlineOpenAI />, name: "OpenAI GPT" },
        ],
      },
      {
        category: "Cloud",
        skills: [
          { icon: <SiRedhatopenshift />, name: "OpenShift" },
          { icon: <SiKubernetes />, name: "Kubernetes" },
          { icon: <SiGooglecloud />, name: "GCP" },
          { icon: <SiAmazon />, name: "AWS" },
        ],
      },
      {
        category: "Dev Tools and Methodologies",
        skills: [
          { icon: <FaGitAlt />, name: "Git" },
          { icon: <FaGithub />, name: "GitHub" },
          { icon: <SiDocker />, name: "Docker" },
          { icon: <FaJenkins />, name: "Jenkins" },
          { icon: <SiPostman />, name: "Postman" },
          { icon: <DiJira />, name: "Jira" },
          { icon: <SiJirasoftware />, name: "Zenhub" },
          { icon: <DiScrum />, name: "Agile/Scrum" },
          { icon: <SiAzuredevops />, name: "DevOps" },
        ],
      },
      {
        category: "Others",
        skills: [
          { icon: <FaLinux />, name: "Linux" },
          { icon: <AiFillApi />, name: "REST API" },
          { icon: <SiOpenapiinitiative />, name: "OpenAPI" },
          { icon: <SiSwagger />, name: "Swagger" },
          { icon: <SiApachehadoop />, name: "Apache Hadoop" },
          { icon: <SiApachekafka />, name: "Apache Kafka" },
          { icon: <SiApachespark />, name: "Apache Spark" },
          { icon: <FaEthereum />, name: "Ethereum" },
          { icon: <SiBlockchaindotcom />, name: "Quorum" },
          { icon: <SiTableau />, name: "Tableau" },
          { icon: <SiWeb3Dotjs />, name: "Web3.js" },
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
              <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 xl:gap-[10px]">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex flex-col items-center justify-center text-center p-4 bg-secondary rounded-lg">
                    <div className="text-xl text-accent mb-2">{skill.icon}</div>
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
        <div className="bg-secondary p-6 rounded-lg flex flex-col xl:flex-row items-center justify-between">
          <div className="flex-shrink-0 xl:mr-8">
            <Image
              src={about.image}
              alt="Profile Image"
              width={300}
              height={300}
              //className="rounded-lg"
            />
          </div>
          <div className="flex-1 mt-8 xl:mt-0">
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

        <div className="flex flex-col xl:flex-row p-4 mt-4">
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
