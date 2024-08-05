import React from "react";
import { motion } from "framer-motion";

const frameVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Frame: React.FC = () => {
  return (
    <div className="w-full h-[89px] font-overpass flex mb-24">
      <motion.div
        className="w-full h-[99px] bg-[#001B6A] p-[25px_89px_25px_20px] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h3 className="text-lg font-bold">ODL mode of study</h3>
        <p className="text-sm">Study in your own place and time</p>
      </motion.div>
      <motion.div
        className="w-full h-[99px] p-[25px_89px_25px_20px] bg-[#CB2026] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h3 className="text-lg font-bold">Flexibility</h3>
        <p className="text-sm">Self-Individualized Learning</p>
      </motion.div>
      <motion.div
        className="w-full h-[99px] p-[25px_89px_25px_20px] text-white bg-[#001B6A]"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h3 className="text-lg font-bold">
          Certificate valid all over the world
        </h3>
        <p className="text-sm">International Skill</p>
      </motion.div>
      <motion.div
        className="w-full h-[99px] p-[25px_89px_25px_20px] bg-[#CB2026] text-white"
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h3 className="text-lg font-bold">Blended Learning</h3>
        <p className="text-sm">Effective Student support system</p>
      </motion.div>
    </div>
  );
};

export default Frame;
