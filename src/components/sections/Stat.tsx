import React from 'react';
import { FaUsers, FaCheckCircle, FaThumbsUp, FaAward } from 'react-icons/fa';

const StatsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#F4ECE6] font-overpass py-12">
      <div className="container mx-auto px-4 flex justify-around items-center">
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <FaUsers className="text-secondary text-4xl" />
          <h3 className="text-2xl font-bold text-primary mt-2">10,000,000+</h3>
          <p className="text-gray-600">User</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <FaCheckCircle className="text-secondary text-4xl" />
          <h3 className="text-2xl font-bold text-primary mt-2">1000+</h3>
          <p className="text-gray-600">Active Patents</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <FaThumbsUp className="text-secondary text-4xl" />
          <h3 className="text-2xl font-bold text-primary mt-2">Up to 10 years</h3>
          <p className="text-gray-600">Warranty</p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <FaAward className="text-secondary text-4xl" />
          <h3 className="text-2xl font-bold text-primary mt-2">4.7</h3>
          <p className="text-gray-600">Overall assessment</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
