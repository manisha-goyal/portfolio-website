"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 500px"
            className="object-contain"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
