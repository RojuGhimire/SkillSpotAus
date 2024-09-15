import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Hero2: React.FC = () => {
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleExploreMoreClick =() =>{
    navigate("/About")
  }

  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start p-6  sm:p-8 lg:px-20 lg:h-auto lg:p-16">
    <div className="flex flex-col lg:flex-row lg:-mt-8">
      {/* Left Content */}
      <motion.div
        className="lg:w-1/2 space-y-4 sm:space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: leftContentInView ? 1 : 0,
          x: leftContentInView ? 0 : -50,
        }}
        transition={{ duration: 3 }}
        ref={leftContentRef}
      >
        <div className="w-full lg:w-[242px] h-auto lg:h-[92px] lg:mt-12 gap-[8px]">
          <h2 className="text-secondary leading-[22px] sm:leading-[30px] text-lg sm:text-xl font-bold">
            Skill Spot Australia
          </h2>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Who Are We?
          </h1>
        </div>
        <div className="mx-auto">
          <p className="text-[#6C757D] text-[15px] sm:text-[17px] font-semibold leading-[25px] sm:leading-[28px] text-left lg:mb-8">
            Skill Spot Australia is not just an educational consultant;
            we're your partners in success. With a focus on Recognition of
            Prior Learning (RPL), training and qualifications, we’re your
            gateway to certifications across Australia.
          </p>
          <p className="text-[#6C757D] text-[15px] sm:text-[17px] font-semibold leading-[25px] sm:leading-[28px] text-left lg:mb-8">
            We understand that each individual's journey is unique. That's
            why we're committed to providing personalized guidance and
            support every step of the way. Whether you're aiming to advance
            in your career or embark on a new educational path, we're here
            to empower you. Join us on this transformative journey and let
            Skill Spot Australia be your guide to achieving your
            aspirations.
          </p>
          <p className="text-[#6C757D] text-[15px] sm:text-[17px] font-semibold leading-[25px] sm:leading-[28px] text-left">
            We understand that each individual's journey is unique. That's
            why we're committed to providing personalized guidance and
            support every step of the way. Whether you're aiming to advance
            in your career or embark on a new educational path, we're here
            to empower you. Join us on this transformative journey and let
            Skill Spot Australia be your guide to achieving your
            aspirations.
          </p>
        </div>
        <button
        onClick={handleExploreMoreClick}
        className=" border-2 border-primary px-4 py-3 text-primary hover:text-white rounded-lg w-[175px] hover:border-white hover:bg-secondary font-extrabold  transition-colors duration-300">
          Explore More
        </button>
      </motion.div>

      {/* Right Content - Image and Call to Action */}
      <motion.div
        className="lg:w-1/2 sm:ml-5 flex flex-col items-center lg:items-end mt-12 sm:mt-16 lg:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: rightContentInView ? 1 : 0,
          x: rightContentInView ? 0 : 100,
        }}
        transition={{ duration: 4, delay: 0.5 }}
        ref={rightContentRef}
      >
        <img
          src="/he2.png"
          alt="Who Are We"
          className="w-full sm:w-[900px] lg:w-[700px] mt-0 lg:mt-20 h-auto sm:h-[400px] lg:h-[543px] object-cover"
        />
        {/* <motion.div
        className="-mt-8 sm:-mt-10 bg-white rounded-xl shadow-lg items-center justify-center p-4 border-l-4 sm:w-[320px] md:w-[364px] h-[75px] sm:h-[85px] sm:top-[350px] lg:left-[35px] text-secondary hover:bg-primary hover:text-white border-secondary transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      > */}
        {/* <div className="w-full">
          <h2 className="font-overpass text-[16px] sm:text-[18.17px] font-semibold leading-[22px] sm:leading-[23px] text-left">
            We Build for your comfort
          </h2>
          <p className="font-overpass font-bold text-base sm:text-lg">
            Call: +61 450 545 073
          </p>
        </div> */}
        {/* </motion.div> */}
      </motion.div>
    </div>
  </section>
  );
};

export default Hero2;
