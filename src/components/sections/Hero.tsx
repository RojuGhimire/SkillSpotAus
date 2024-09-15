import React , {useState}from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiLoaderCircle } from "react-icons/bi";

const Hero: React.FC = () => {
  const [isLoading] = useState(false);

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative h-[800px] lg:h-[650px] px-5 lg:px-20 mt-10 md:mt-20 lg:mt-24 w-full text-white font-overpass flex items-center justify-center">
      {/* Background Image and Gradient */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/BG.jpeg"
          alt="Background Image"
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#203180] via-[#18255c66] to-[#12121366] opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row h-full w-full lg:max-w-[1440px] gap-8 lg:gap-[95px] items-center justify-center">
        {/* Left Content */}
        <motion.div
          className="flex flex-col items-center lg:items-start justify-center gap-6 lg:gap-[42px] text-center lg:text-left w-full lg:w-[60%] px-4 lg:px-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: textInView ? 0 : -100, opacity: textInView ? 1 : 0 }}
          transition={{ duration: 3.5 }}
          ref={textRef}
        >
          <h1 className="text-2xl sm:text-3xl items-center justify-center font-poppins lg:text-4xl leading-snug lg:leading-[53.17px] font-extrabold">
            Welcome to Skill Spot
            <br />
            <span className="  lg:ml-32 ">Australia</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-xl font-bold leading-normal lg:leading-[30px]">
            Welcome to Skill Spot Australia Pty Ltd, your RPL destination
            nationwide.
            <br />
            Celebrating your unique journey, we recognize and honor your skills.
            <br />
            Unlocking potential, we help you achieve formal qualifications
            effortlessly.
          </p>
          {/* <motion.button
            className="bg-secondary hover:bg-primary font-bold text-white px-4 py-2 rounded-lg h-[50px] w-full sm:w-[300px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 3.3 }}
          >
            Free 60 second Skill Assessment
          </motion.button> */}
          <button
              type="submit"
              className="font-bold text-white  py-2 rounded-full h-[60px] w-full sm:w-[500px] inline-flex mt-7   gap-1 animate-shimmer items-center justify-center  bg-[linear-gradient(110deg,#CB2026,45%,#f9f9f8,48%,#CB2026)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg"
            >
              {isLoading ? (
                <BiLoaderCircle
                  className="animate-spin"
                  color="#ffffff"
                  size={25}
                />
              ) : (
                <div className="flex gap-2 items-center ">
                  <span>Free 60 second Skill Assessment</span>
                </div>
              )}
            </button>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          className="relative flex justify-center items-center w-full lg:w-[40%] mt-8 lg:mt-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: imageInView ? 1 : 0.9,
            opacity: imageInView ? 1 : 0,
          }}
          transition={{ duration: 2.5 }}
          ref={imageRef}
        >
          <motion.img
            src="/small.jpeg"
            alt="Small Image"
            className="hidden lg:block shadow-lg rounded-tl-[146.72px] rounded-br-[146.72px] w-[350px] sm:w-[450px] lg:w-[590px] h-[350px] sm:h-[300px] lg:h-[334px] object-cover"
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

          <button className="hidden lg:block absolute -top-2 -right-2 sm:-top-8 sm:right-36 lg:-top-10 lg:-right-10 text-md w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[85px] lg:h-[85px] bg-[linear-gradient(270deg,_#C2114C_31.5%,_#001B6A_78.5%)] rounded-full flex-col justify-center items-center text-white font-extrabold">
            Apply <br /> Now!
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
