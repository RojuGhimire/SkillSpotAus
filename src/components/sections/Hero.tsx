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
    <div className="relative h-auto lg:h-[577px] px-10 lg:px-40 mt-12 lg:mt-24 w-full text-white  font-overpass">
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/BG.jpeg"
          alt="Background Image"
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#203180] via-[#18255c66] to-[#12121366] opacity-85"></div>
      </div>
      <div className="absolute flex flex-row h-[334px]  lg:w-[1440px] gap-[95px] top-[146px] left-[200px] ">
        {/* Left Content */}
        <motion.div
          className="flex flex-col  lg:items-start justify-center gap-6 lg:gap-[42px] h-auto lg:h-[297px] w-full lg:w-[70%]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: textInView ? 0 : -100, opacity: textInView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          ref={textRef}
        >
          <h1 className="text-xl font-overpass sm:text-3xl lg:text-4xl leading-snug lg:leading-[53.17px] font-extrabold text-center lg:text-left w-full ">
            Welcome to Skill Spot
            <br />
            <span className="block text-center lg:text-center lg:justify-center lg:w-[60%]">
              Australia
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg font-bold leading-normal lg:leading-[30px] text-center lg:text-left w-full">
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
              className="bg-secondary hover:bg-primary font-bold text-white px-4 py-2 rounded-lg h-[45px] w-[300px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Free 60 second Skill Assesment
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

          <button className="hidden lg:block text-md absolute transform translate-x-[300%] -translate-y-1/2 w-[85.45px] h-[86.45px] bg-[linear-gradient(270deg,_#C2114C_31.5%,_#001B6A_78.5%)] rounded-full flex-col justify-center items-center text-white font-extrabold">
            Apply <br /> Now!
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
