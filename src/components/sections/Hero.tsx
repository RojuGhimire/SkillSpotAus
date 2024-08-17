import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero: React.FC = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative h-auto lg:h-[577px] px-5 sm:px-10 lg:px-20 mt-12 lg:mt-24 w-full text-white p-8 font-overpass">
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/BG.jpeg"
          alt="Background Image"
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#203174] via-[#20317466] to-[#B5BBD2] opacity-90"></div>
      </div>
      <div className="relative z-10 container flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-24">
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-start gap-6 lg:gap-[42px] h-auto lg:h-[297px] w-full lg:w-[603px]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: textInView ? 0 : -100, opacity: textInView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          ref={textRef}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-snug lg:leading-[53.17px] font-bold text-center lg:text-left w-full lg:w-[424px]">
            Welcome to Skill Spot Australia
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-medium leading-normal lg:leading-[22.79px] text-center lg:text-left w-full">
            Welcome to Skill Spot Australia Pty Ltd, your RPL destination nationwide.
            <br />
            Celebrating your unique journey, we recognize and honor your skills.
            <br />
            Unlocking potential, we help you achieve formal qualifications effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              className="bg-[#001B6A] text-white px-4 py-2 rounded h-[38px] w-[117px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Contact
            </motion.button>
            <motion.button
              className="bg-[#CB2026] text-white px-4 py-2 rounded h-[38px] w-[109px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          className="flex-1 mt-8 lg:mt-0 flex justify-center lg:justify-end relative w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: imageInView ? 1 : 0.9,
            opacity: imageInView ? 1 : 0,
          }}
          transition={{ duration: 1.5 }}
          ref={imageRef}
        >
          <motion.img
            src="/small.jpeg"
            alt="Small Image"
            className="shadow-lg rounded-tl-[146.72px] rounded-br-[146.72px] w-[300px] sm:w-[400px] lg:w-[550px] h-auto lg:h-[334px]"
            style={{
              borderTop: "none",
              borderRight: "5.14px solid #FFFFFF",
              borderBottom: "none",
              borderLeft: "5.14px solid #FFFFFF",
            }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: imageInView ? 0 : 100, opacity: imageInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
