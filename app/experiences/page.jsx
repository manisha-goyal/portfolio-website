"use client";

import React, { useState } from "react";
import Image from "next/image";

const experiences = [
  {
    company: "Company 1",
    position: "Lead Engineer",
    duration: "May 2018 - Present",
    description: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    logo: "/assets/experiences/thumb1.png",
  },
  {
    company: "Company 2",
    position: "Software Engineer",
    duration: "July 2015 - April 2018",
    description: [
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    logo: "/assets/experiences/thumb2.png",
  },
];

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <div className="min-h-[80vh] flex items-start justify-center py-12 xl:py-10 bg-dark-gray">
      <div className="container mx-auto flex flex-col xl:flex-row">
        {/* Left Sidebar */}
        <div className="flex flex-col xl:w-[25%] p-4 border-r border-accent">
          {experiences.map((experience, index) => (
            <button
              key={index}
              className={`text-left p-4 cursor-pointer transition-all duration-300 flex items-center gap-4 rounded-lg ${
                index === selectedExperience
                  ? "text-accent bg-accent bg-opacity-20"
                  : "text-gray-400 bg-dark-gray"
              }`}
              onClick={() => setSelectedExperience(index)}
            >
              <Image
                src={experience.logo}
                alt={experience.company}
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-lg font-semibold">{experience.company}</span>
            </button>
          ))}
        </div>

        {/* Right Content Area */}
        <div className="flex flex-col xl:w-[75%] pl-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {experiences[selectedExperience].position}{" "}
            <span className="text-accent">
              @ {experiences[selectedExperience].company}
            </span>
          </h2>
          <p className="text-gray-400 mb-4">
            {experiences[selectedExperience].duration}
          </p>
          <ul className="space-y-4 text-white">
            {experiences[selectedExperience].description.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-accent">▹</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
