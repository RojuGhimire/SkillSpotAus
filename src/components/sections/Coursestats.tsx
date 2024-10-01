import React, { useState, useEffect } from "react";
import { FaBookOpen, FaChalkboardTeacher, FaUniversity, FaAward } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const CourseStats: React.FC = () => {
  // For Stat 1
  const count1 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);
  const [stat1, setStat1] = useState(0);

  // For Stat 2
  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, Math.round);
  const [stat2, setStat2] = useState(0);

  // For Stat 3
  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, Math.round);
  const [stat3, setStat3] = useState(0);

  // For Stat 4
  const count4 = useMotionValue(0);
  const rounded4 = useTransform(count4, Math.round);
  const [stat4, setStat4] = useState(0);

  useEffect(() => {
    // Animate Stat 1
    const animation1 = animate(count1, 500, { duration: 10 });

    // Animate Stat 2
    const animation2 = animate(count2, 110, { duration: 10 });

    // Animate Stat 3
    const animation3 = animate(count3, 10, { duration: 10 });

    // Animate Stat 4
    const animation4 = animate(count4, 100, { duration: 10 });

    // Listen for changes in rounded values and update the state
    rounded1.onChange((v) => setStat1(v));
    rounded2.onChange((v) => setStat2(v));
    rounded3.onChange((v) => setStat3(v));
    rounded4.onChange((v) => setStat4(v));

    // Clean up animations
    return () => {
      animation1.stop();
      animation2.stop();
      animation3.stop();
      animation4.stop();
    };
  }, [count1, count2, count3, count4, rounded1, rounded2, rounded3, rounded4]);

  return (
    <div className="w-full lg:h-[208px] flex items-center justify-center bg-[#f9f3ef] py-20 font-overpass lg:mt-28 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <FaBookOpen className="text-secondary text-5xl mb-4" />
          <motion.h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            {stat1}<sup className="font-bold">+</sup>
          </motion.h3>
          <p className="text-primary text-lg font-bold">Courses Received</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <FaChalkboardTeacher className="text-secondary text-5xl mb-4" />
          <motion.h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            {stat2}<sup>+</sup>
          </motion.h3>
          <p className="text-primary text-lg font-bold">Courses Available</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <FaUniversity className="text-secondary text-5xl mb-4" />
          <motion.h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            {stat3}<sup>+</sup>
          </motion.h3>
          <p className="text-primary text-lg font-bold">Partner Institutes</p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <FaAward className="text-secondary text-5xl mb-4" />
          <motion.h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            {stat4}<sup>+</sup>
          </motion.h3>
          <p className="text-primary text-lg font-bold">Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default CourseStats;
