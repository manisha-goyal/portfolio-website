"use client";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "manisha.goyal@nyu.edu",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "New York, NY",
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
      className="min-h-[80vh] flex items-center justify-center py-12 sm:py-6 bg-dark-gray"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-[20px] sm:gap-[30px] xl:flex-row">
          {/* Get in Touch Button */}
          <div className="w-full xl:w-[54%] order-2 xl:order-none">
            <div className="flex flex-col gap-6 p-6 sm:p-10 bg-secondary rounded-xl">
              <h3 className="text-3xl sm:text-4xl text-accent">Let's connect!</h3>
              <p className="text-white/80">
                Reach out to discuss opportunities, projects, or simply to start
                a conversation.
              </p>
              {/* Flex container for button and social icons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Get in Touch Button */}
                <Button size="md" className="max-w-[180px]" onClick={handleGetInTouchClick}>
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
            <ul className="flex flex-col gap-8 sm:gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4 sm:gap-6">
                    <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center">
                      <div className="text-[24px] sm:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/70 text-sm sm:text-base">{item.title}</p>
                      <h3 className="text-lg sm:text-xlinfo text-white/90">{item.description}</h3>
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
