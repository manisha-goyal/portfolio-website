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
import React, { useState } from "react";

const about = {
  title: "About me",
  description:
    "As a creative problem solver, I excel at turning ideas into efficient software solutions. With a collaborative spirit, I am dedicated to delivering impactful work and growing professionally.",
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
  },
];

const About = () => {
  const [selectedAbout, setSelectedAbout] = useState(0); // Default to "My education"

  const renderContent = () => {
    if (aboutTabs[selectedAbout].items) {
      return (
        <ul className="space-y-8 text-white">
          {aboutTabs[selectedAbout].items.map((item, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex items-start space-x-2">
                <span className="text-accent">▹</span>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {item.institution}
                </h2>
              </div>
              <p className="text-white/90">{item.degree}</p>
              <p className="text-white/70">
                <span className="text-accent">Coursework:</span> {item.coursework}
              </p>
              <span className="text-accent">{item.duration} | {item.location}</span>
            </li>
          ))}
        </ul>
      );
    } else if (aboutTabs[selectedAbout].skillList) {
      return (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
          {aboutTabs[selectedAbout].skillList.map((skill, index) => (
            <li key={index} className="flex flex-col items-center">
              <div className="text-6xl text-accent mb-2">{skill.icon}</div>
              <p className="text-white/60">{skill.name}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p className="text-white">{aboutTabs[selectedAbout].description}</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-start justify-start py-12 xl:py-0 bg-dark-gray">
      <div className="container mx-auto">
        {/* About */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold">{about.title}</h3>
          <p className="max-w-[600px] text-white/60 mt-4">
            {about.description}
          </p>
        </div>

        <div className="flex flex-col xl:flex-row">
          {/* Left Sidebar */}
          <div className="flex flex-col xl:w-[25%] p-4 border-r border-accent">
            {aboutTabs.map((aboutTab, index) => (
              <button
                key={index}
                className={`text-left p-4 cursor-pointer transition-all duration-300 flex items-center gap-4 rounded-lg ${
                  index === selectedAbout
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
          <div className="flex flex-col xl:w-[75%] pl-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
