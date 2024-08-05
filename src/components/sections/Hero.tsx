import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="relative h-[577px] w-full text-white p-8 font-overpass">
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/BG.jpeg"
          alt="Background Image"
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}  // Slower fade-in
        />
        <div className="absolute inset-0 bg-gradient-to-r  from-[#203174] via-[#20317466] to-[#B5BBD2] opacity-90"></div>
      </div>
      <div className="relative z-10 lg-w[1284px] mt-24 container mx-auto flex flex-col md:flex-row items-center justify-center px-10">
        <motion.div
          className="flex-1 h-[297px] w-[603px] flex flex-col justify-center items-start gap-[42px]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}  // Slower slide-in and fade-in
        >
          <h1 className="text-4xl font-bold w-[424px] h-[106px] text-center mb-4">
            Welcome to Skill Spot Australia
          </h1>
          <p className="text-base md:text-base lg:text-base mb-6 w-full md:w-[603px]">
            Welcome to Skill Spot Australia Pty Ltd, your RPL destination
            nationwide.
            <br /> Celebrating your unique journey, we recognize and honor your
            skills.
            <br /> Unlocking potential, we help you achieve formal
            qualifications effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              className="bg-[#001B6A] text-white px-4 py-2 rounded h-[38px] w-[117px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}  // Button hover effects
            >
              Contact
            </motion.button>
            <motion.button
              className="bg-[#CB2026] text-white px-4 py-2 rounded h-[38px] w-[109px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}  // Button hover effects
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 mt-8 md:mt-0 flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}  // Slower scale and fade-in
        >
          <motion.img
            src="/small.jpeg"
            alt="Small Image"
            className="shadow-lg w-[550px] h-[334px] rounded-tl-[146.72px] rounded-br-[146.72px]"
            style={{
              borderTop: "none",
              borderRight: "5.14px solid #FFFFFF",
              borderBottom: "none",
              borderLeft: "5.14px solid #FFFFFF",
            }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}  // Slower slide-in and fade-in
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
