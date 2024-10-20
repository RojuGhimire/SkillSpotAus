import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactSection from "../components/sections/ContactSection";
import { Footer2 } from "../components/sections/Footer2";
import RPLSteps from "@/components/sections/RPLstep";
import Footer3 from "@/components/sections/Footer3";
import FAQ from "@/components/sections/FAQ";
import Affiliates from "@/components/sections/Our";
import CourseStats from "@/components/sections/Coursestats";

const About: React.FC = () => {
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="w-full">
      <Header />
      <img src="/About.png" alt="" className="w-full" />
      <section className="flex flex-col lg:flex-row items-center lg:items-start p-6 sm:p-8 lg:px-20 lg:h-auto ">
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
            {/* <div className="h flex gap-10 w-full">
<div>
  <h3>Our Mission & Vision</h3>
  <p> Lorem ipsum dolor sit amet consectetur. Nam feugiat sagittis dignissim elit. Lorem proin enim dictum aliquet pellentesque eget tincidunt posuere. Dignissim sit sed at sit ac volutpat id ac diam. Aliquam augue vitae at augue varius tincidunt egestas vulputate. Nibh a ut volutpat cursus ultrices id purus .</p>
</div>
<div>
  <h3>Our Mission & Vision</h3>
  <p> Lorem ipsum dolor sit amet consectetur. Nam feugiat sagittis dignissim elit. Lorem proin enim dictum aliquet pellentesque eget tincidunt posuere. Dignissim sit sed at sit ac volutpat id ac diam. Aliquam augue vitae at augue varius tincidunt egestas vulputate. Nibh a ut volutpat cursus ultrices id purus .</p>
</div>
</div> */}
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
      <RPLSteps />
      <CourseStats />
      {/*Popular Course */}

      <div className="  font-overpass lg:px-20 p-8">
        <div className="flex flex-col items-center justify-center gap-[100px]  md:flex-row">
          {/* Left section */}
          <div className="md:w-[480px] md:h-[700px] flex flex-col mt-10  justify-center mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-start mb-4">
              Achieve Your Dream With Skill Spot Australia
            </h1>
            <p className="text-lg text-start mb-12">
              Our commitment is to offer comprehensive services to students
              interested in various RPL certificates. Empowering your journey
              with tailored support and guidance every step of the way.
            </p>
            <div className="bg-[#F6ECED]  p-8 rounded-lg shadow-md w-[405px] mb-7  h-[490px] items-center justify-center ">
              <h2 className="text-3xl  font-extrabold font-poppins text-center text-primary mb-6">
                You're Just 60 <br /> Seconds Away <br />
                From Transforming <br />
                Your Life
              </h2>
              <p className="text-center text-gray-700 px-10 mb-6">
                Don’t wait, take the first step towards a brighter future today.
                Join thousands of successful candidates who used our FREE 60
                second skills check to kickstart their RPL journey. Discover how
                your experience can translate into a nationally recognized
                qualification, propelling your career to new heights.
              </p>
              <div className="items-center justify-center flex">
                <button className="w-[115px] bg-primary hover:bg-secondary text-white py-2 rounded-full">
                  Lets Go →
                </button>
              </div>
            </div>
          </div>
          {/* middle Section */}
          <div className="mb-6">
            <div className="flex  flex-col items-center mb-2 ">
              <span className=" bg-primary  text-white w-8 h-8 flex items-center justify-center rounded-full">1</span>
              <div className="w-2 h-[250px] bg-zinc-300 mx-1"></div>
              <span className=" bg-primary  text-white w-8 h-8 flex items-center justify-center rounded-full"> 2</span>
              <div className="w-2 h-[250px] bg-zinc-300 mx-1"></div>
              <span className=" bg-primary  text-white w-8 h-8 flex items-center justify-center rounded-full"> 3</span>

            </div>
          </div>
          {/* Right section */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div className="flex items-center  mb-8">
              <div className="bg-white border border-primary p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  Skill Spot Australia is dedicated to delivering exceptional
                  services that empower our clients to achieve success. We are
                  constantly pursuing excellence and staying abreast of the most
                  recent developments and trends in the education sector. This
                  ensures that we maintain the highest level of service and
                  assistance possible.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <div className="bg-[#F6ECED] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  Skill Spot Australia is committed to empowering individuals
                  from all walks of life to achieve their educational and career
                  goals. We believe in unlocking every person’s potential,
                  providing resources, and personalized support to fulfill
                  aspirations and lead fulfilling lives. Furthermore, we’re
                  committed to helping learners reach their full potential and
                  lead fulfilling lives.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-[#F6ECED] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Our Values</h3>
                <p className="text-gray-700">
                  Fairness, objectivity, and integrity. Transparent,
                  professional, and empathetic communication. Consideration,
                  empathy, and motivation. Confidentiality and professionalism.
                  Inclusivity, impartiality, and respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
      <FAQ />
      <Affiliates />
      <Footer3 />
      <Footer2 />
    </div>
  );
};

export default About;
