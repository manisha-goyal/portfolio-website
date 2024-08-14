"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "J.P. Morgan Chase",
    position: "Software Engineer (Associate)",
    duration: "May 2020 - June 2023",
    location: "Singapore",
    description: [
      "Worked closely with a global team of 55 developers to develop pioneer blockchain-based payment platforms",
      "Developed decentralized application from the ground up (Java, Web3) for JPM Coin System, a first-of-its-kind permissioned blockchain network that allows near-instant cross-border liquidity funding for institutional clients",
      "Led development and live deployment of blockchain ledger (Smart Contracts, Solidity) for Partior, an inter-bank blockchain network enabling multi-currency atomic settlements across major global banks in under 2 minutes",
      "Built proof-of-concept using Solidity Diamond Standard to make Partior's blockchain ledger scalable and upgradable, contributing to successful transaction of tokenized Singapore government securities on the Polygon network",
    ],
    logo: "/assets/experiences/jpmorganchase_logo.png",
  },
  {
    company: "J.P. Morgan Chase",
    position: "Software Engineer (Analyst)",
    duration: "Aug 2018 - Apr 2020",
    location: "Singapore",
    description: [
      "Developed Cybersecurity Data Lake using Apache Hadoop Ecosystem utilities, enhancing the firm's real-time cybersecurity incident monitoring capabilities by 75% and reducing incident response times by 30%",
      "Led deployment and production management as global Application Owner of JPMC Cybersecurity Log Collector, that processes and distributes syslog messages, and liaised with global stakeholders to manage critical cyber incidents",
    ],
    logo: "/assets/experiences/jpmorganchase_logo.png",
  },
  {
    company: "J.P. Morgan Chase",
    position: "Software Engineer Intern",
    duration: "May 2017 - Jul 2017",
    location: "Singapore",
    description: [
      "Built an automation tool to parse and analyze static security scanning results, boosting efficiency in the firm's application security assessments by over 90% and reducing the evaluation times by 80%",
    ],
    logo: "/assets/experiences/jpmorganchase_logo.png",
  },
  {
    company: "Li Ka Shing Library",
    position: "Data Analyst",
    duration: "Nov 2016 - April 2017",
    location: "Singapore",
    description: [
      "Analyzed and visualized library's data (Excel, SQL, SAS, and Tableau) to study the correlation between usage of the library's resources and students' academic performance, informing strategic planning for resource allocation",
    ],
    logo: "/assets/experiences/singapore_management_university_logo.png",
  },
  {
    company: "Fujitsu-SMU Urban Computing and Engineering Lab",
    position: "Software Engineering Intern",
    duration: "Apr 2016 - Jul 2016",
    location: "Singapore",
    description: [
      "Researched data-driven optimization techniques for maritime-port-urban logistics, and developed an e-Market Platform application that reduced operational costs by 20% and increased logistical efficiency by 40%",
    ],
    logo: "/assets/experiences/fujitsu_logo.png",
  },
  {
    company: "CESC Limited",
    position: "Information Technology Intern",
    duration: "Jun 2015 - Jul 2015",
    location: "Kolkata, India",
    description: [
      "Developed a database for the company to record customer information and monitor the services it provides",
      "Created an application to support the database with reporting capabilities for productivity tracking and strategy planning",
    ],
    logo: "/assets/experiences/cesc_ltd_logo.png",
  },
];

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-start justify-center py-12 xl:py-10 bg-dark-gray">
      <div className="container mx-auto flex flex-col xl:flex-row">
        {/* Left Sidebar */}
        <div className="flex flex-col xl:w-[35%] p-4 border-r border-accent">
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
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-lg font-semibold">{experience.company}</span>
            </button>
          ))}
        </div>

        {/* Right Content Area */}
        <div className="flex flex-col xl:w-[65%] pl-8 mt-8 xl:mt-0">
          <h2 className="text-2xl font-bold text-white mb-2">
            {experiences[selectedExperience].position}{" "}
            <span className="text-accent">
              {" @ "}{experiences[selectedExperience].company}
            </span>
          </h2>
          <p className="text-white/70 mb-4">
            {experiences[selectedExperience].duration}{" | "}{experiences[selectedExperience].location}
          </p>
          <ul className="space-y-4 text-white/80">
            {experiences[selectedExperience].description.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-accent">▹</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Experiences;
