import React from 'react';

const CourseStats: React.FC = () => {
  return (
    <div className="w-full bg-[#f9f3ef] py-20 mt-auto font-overpass lg:mt-28">
      <div className="container mx-auto px-4 flex justify-around items-center">
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-rose  font-extrabold leading-[45.09px] text-center">8700<sup className='font-bold'>+</sup></h3>
          <p className="text-primary text-lg font-bold">Courses Received</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-rose  font-extrabold leading-[45.09px] text-center">110<sup>+</sup></h3>
          <p className="text-primary text-lg font-bold">Courses Available</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-rose  font-extrabold leading-[45.09px] text-center">10<sup>+</sup></h3>
          <p className="text-primary text-lg font-bold">Partner Institutes</p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-rose  font-extrabold leading-[45.09px] text-center">100<sup>+</sup></h3>
          <p className="text-primary text-lg font-bold">Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default CourseStats;
