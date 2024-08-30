import React from "react";
import { motion } from "framer-motion";

const frameVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Frame: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  font-overpass">
      <motion.div
        className="flex-1 h-[120px]  md:h-[140px] lg:h-[100px] p-4 md:p-6 lg:p-[25px_20px_25px_89px] bg-[#001B6A] text-white"
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
        className="flex-1 h-[120px] md:h-[140px] lg:h-[100px] p-4 md:p-6 lg:p-[25px_20px_25px_89px] bg-[#CB2026] text-white"
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
        className="flex-1 h-[120px] md:h-[140px] lg:h-[100px] p-4 md:p-6 lg:p-[25px_20px_25px_89px] bg-[#001B6A] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 3 }}
      >
        <h3 className="text-sm md:text-lg lg:text-xl font-bold">
          All over the world Certified
        </h3>
        <p className="text-xs md:text-base lg:text-lg">International Skill</p>
      </motion.div>
      <motion.div
        className="flex-1 h-[120px] md:h-[140px] lg:h-[100px] p-4 md:p-6 lg:p-[25px_20px_25px_89px] bg-[#CB2026] text-white"
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
