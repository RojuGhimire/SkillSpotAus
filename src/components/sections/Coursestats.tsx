import React from "react";
import { FaBookOpen, FaChalkboardTeacher, FaUniversity, FaAward } from "react-icons/fa"; // Import relevant icons

const CourseStats: React.FC = () => {
  return (
    <div className="w-full bg-[#f9f3ef] py-20 font-overpass lg:mt-28 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <FaBookOpen className="text-primary text-6xl mb-4" /> {/* Icon */}
          <h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            8700<sup className="font-bold">+</sup>
          </h3>
          <p className="text-primary text-lg font-bold">Courses Received</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <FaChalkboardTeacher className="text-primary text-6xl mb-4" /> {/* Icon */}
          <h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            110<sup>+</sup>
          </h3>
          <p className="text-primary text-lg font-bold">Courses Available</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <FaUniversity className="text-primary text-6xl mb-4" /> {/* Icon */}
          <h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            10<sup>+</sup>
          </h3>
          <p className="text-primary text-lg font-bold">Partner Institutes</p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <FaAward className="text-primary text-6xl mb-4" /> {/* Icon */}
          <h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            100<sup>+</sup>
          </h3>
          <p className="text-primary text-lg font-bold">Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default CourseStats;
