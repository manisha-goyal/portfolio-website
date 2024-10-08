"use client";

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 sm:py-6 bg-dark-gray"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-4">
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-[50%]">
            <h4 className="h4 mb-2 text-white/70">Hi, my name is</h4>
            <h2 className="h2 mb-6 text-white/90">Manisha Goyal.</h2>
            <h3 className="h3 mb-6 text-white/80 mb-12">
              I'm a <span className="text-accent">Software Engineer.</span>
            </h3>
            {/* btn and socials */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a href="/assets/Manisha_Goyal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;