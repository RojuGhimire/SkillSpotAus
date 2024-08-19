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
        <div className="absolute inset-0 bg-gradient-to-r from-[#203180] via-[#18255c66] to-[#18255c66] opacity-85"></div>
      </div>
      <div className="relative flex flex-col lg:flex-row items-center justify-center  gap-[1px] mt-12 lg:mt-24">
        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-center lg:px-20  items-center lg:items-start gap-6 lg:gap-[42px] h-auto lg:h-[297px] w-full lg:w-[70%]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: textInView ? 0 : -100, opacity: textInView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          ref={textRef}
        >
          <h1 className="text-2xl font-overpass sm:text-3xl lg:text-4xl leading-snug lg:leading-[53.17px] font-extrabold text-center lg:text-left w-full ">
            Welcome to Skill Spot
            <br />
            <span className="block text-center lg:text-center lg:w-[60%]">
              Australia
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg font-medium leading-normal lg:leading-[29px] text-center lg:text-left w-full">
            Welcome to Skill Spot Australia Pty Ltd, your RPL destination
            nationwide.
            <br />
            Celebrating your unique journey, we recognize and honor your skills.
            <br />
            Unlocking potential, we help you achieve formal qualifications
            effortlessly.
          </p>
          <div className="flex flex-row md:px-44 lg:px-0 gap-4 items-center justify-center lg:justify-start">
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
          className="relative lg:px-20 mt-8 lg:mt-0 flex justify-center w-full lg:w-[70%] "
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
            className="hidden lg:flex shadow-lg rounded-tl-[146.72px]  rounded-br-[146.72px] w-[300px] sm:w-[400px] lg:w-[550px] h-auto lg:h-[334px]"
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

          <button className="hidden lg:block absolute transform translate-x-[300%] -translate-y-1/2 w-[85.45px] h-[86.45px] bg-[linear-gradient(270deg,_#C2114C_31.5%,_#001B6A_78.5%)] rounded-full flex-col justify-center text-sm items-center text-white font-extrabold">
            Apply  Now!
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
