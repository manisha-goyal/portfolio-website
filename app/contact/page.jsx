"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 929 695 7468",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "manisha.goyal@nyu.edu",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Brooklyn, NY",
  },
];

const Contact = () => {
  const handleGetInTouchClick = () => {
    window.open('mailto:manisha.goyal@nyu.edu');
  };

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Get in Touch Button */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <div className="flex flex-col gap-6 p-10 bg-secondary rounded-xl">
              <h3 className="text-4xl text-accent">Let's connect!</h3>
              <p className="text-white/60">
                Reach out to discuss opportunities, projects, or simply to start
                a conversation.
              </p>
              {/* Flex container for button and social icons */}
              <div className="flex items-center gap-6">
                {/* Get in Touch Button */}
                <Button size="md" className="max-w-40" onClick={handleGetInTouchClick}>
                  Get in Touch
                </Button>
                {/* Social Media Icons */}
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg xl:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
