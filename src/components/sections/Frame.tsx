import React from "react";
import { motion } from "framer-motion";

const frameVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Frame: React.FC = () => {
  return (
    <div className="w-full flex flex-col mb-3 md:flex-row font-overpass">
      <motion.div
        className="flex-1 h-[120px] md:h-[140px] lg:h-[110px] p-4  bg-[#001B6A] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h3 className="text-sm md:text-lg lg:text-xl font-bold">
          ODL mode of study
        </h3>
        <p className="text-xs md:text-base lg:text-lg">
          Study in your own place and time
        </p>
      </motion.div>
      <motion.div
        className="flex-1 h-[120px] md:h-[140px] lg:h-[110px] p-4  bg-[#CB2026] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
      >
        <h3 className="text-sm md:text-lg lg:text-xl font-bold">Flexibility</h3>
        <p className="text-xs md:text-base lg:text-lg">
          Self-Individualized Learning
        </p>
      </motion.div>
      <motion.div
        className="flex-1 h-[120px] md:h-[140px] lg:h-[110px] p-4  bg-[#001B6A] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 3 }}
      >
        <h3 className="text-sm md:text-lg lg:text-xl font-bold">
          Certificate valid all over the world
        </h3>
        <p className="text-xs md:text-base lg:text-lg">International Skill</p>
      </motion.div>
      <motion.div
        className="flex-1 h-[120px] md:h-[140px] lg:h-[110px] p-4  bg-[#CB2026] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 4 }}
      >
        <h3 className="text-sm md:text-lg lg:text-xl font-bold">
          Blended Learning
        </h3>
        <p className="text-xs md:text-base lg:text-lg">
          Effective Student support system
        </p>
      </motion.div>
    </div>
  );
};

export default Frame;
