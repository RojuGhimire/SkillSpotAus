import React from 'react';

const Banner3: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-10 p-6 bg-[#F4ECE6] rounded-lg shadow-lg h-auto lg:h-[377px]">
      <img
        src="/check.png"
        alt="Craftsman working"
        className="rounded-lg object-cover w-full lg:w-[445px] lg:h-[460px] mb-4 lg:mb-0 lg:ml-[84px]"
      />
      <div className="flex flex-col items-center justify-center w-full lg:w-2/3 px-4 text-center lg:text-left">
        <h2 className="text-xl md:text-3xl text-center lg:text-4xl leading-[46px] font-extrabold">
          Skill Spot Australia can help you get your experience recognised!
        </h2>
        <div className="mt-6 lg:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
          <button className="bg-primary text-white px-6 py-4 rounded-full  font-bold mb-4 sm:mb-0 sm:mr-2">
            View Qualifications
          </button>
          <button className="bg-secondary text-white px-6 py-4 rounded-full font-bold  ">
            Check Your Eligibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
