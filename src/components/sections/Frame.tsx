import React from "react";
import { motion } from "framer-motion";

const frameVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Frame: React.FC = () => {
  return (
    <div className="w-full  flex flex-col md:flex-row font-overpass">
      <motion.div
        className="flex-1 h-[120px]  md:h-[99px] bg-[#001B6A] p-4 md:p-[25px_89px_25px_20px] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h3 className="text-base md:text-lg font-bold">ODL mode of study</h3>
        <p className="text-xs md:text-sm">Study in your own place and time</p>
      </motion.div>
      <motion.div
        className="flex-1 h-[120px] md:h-[99px] p-4 md:p-[25px_89px_25px_20px] bg-[#CB2026] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h3 className="text-base md:text-lg font-bold">Flexibility</h3>
        <p className="text-xs md:text-sm">Self-Individualized Learning</p>
      </motion.div>
      <motion.div
        className="flex-1 h-[120px] md:h-[99px] p-4 md:p-[25px_89px_25px_20px] bg-[#001B6A] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h3 className="text-base md:text-lg font-bold">
          Certificate valid all over the world
        </h3>
        <p className="text-xs md:text-sm">International Skill</p>
      </motion.div>
      <motion.div
        className="flex-1 h-[120px] md:h-[99px] p-4 md:p-[25px_89px_25px_20px] bg-[#CB2026] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h3 className="text-base md:text-lg font-bold">Blended Learning</h3>
        <p className="text-xs md:text-sm">Effective Student support system</p>
      </motion.div>
    </div>
  );
};

export default Frame;
