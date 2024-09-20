import React, { useState } from 'react';

interface FirstProps { }

const First: React.FC<FirstProps> = () => {
  const [industry, setIndustry] = useState<string>('');
  const [qualification, setQualification] = useState<string>('');

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setter(e.target.value);
  };

  return (
    <div className="bg-[#F6ECED] p-6 px-10 rounded-t-3xl shadow-lg w-[900px] mt-20 mx-auto">
      <img
        src="/logo2.png"
        alt="Skill Spot Australia Logo"
        className="mx-auto mb-4"
      />
      <div className='flex w-full items-center justify-center flex-col '>
        <h2 className="text-xl  font-semibold text-center mb-4">
          Convert your Experience into a Nationally Recognised Qualification
        </h2>

      </div>
      <div className="flex space-y-2 mb-4 items-center  justify-between ">
        <span>✔ Increased career opportunities</span>
        <span>✔ Avoid repeated training</span>
        <span>✔ Save Time and Money</span>
      </div>

      <div className="mb-6">
        <div className="flex  items-center justify-center mb-2 ">
          <span className=" bg-primary  text-white w-8 h-8 flex items-center justify-center rounded-full">1</span>
          <div className="w-32 h-1 bg-zinc-300 mx-1"></div>
          <span className=" bg-primary  text-white w-8 h-8 flex items-center justify-center rounded-full"> 2</span>
          <div className="w-32 h-1 bg-zinc-300 mx-1"></div>
          <span className=" bg-primary  text-white w-8 h-8 flex items-center justify-center rounded-full"> 3</span>
          <div className="w-32 h-1 bg-zinc-300 mx-1"></div>
          <span className=" bg-primary  text-white w-8 h-8 flex items-center justify-center rounded-full"> 4</span>
          <div className="w-32 h-1 bg-zinc-300 mx-1"></div>
          <span className=" bg-primary  text-white w-8 h-8 flex items-center justify-center rounded-full"> 5</span>

        </div>
      </div>
      <div className='flex flex-col items-center justify-center '>
        <label className="block mb-2 text-lg text-zinc-700" htmlFor="industry">
          Which industry is your experience in?
        </label>
        <select
          id="industry"
          value={industry}
          onChange={handleChange(setIndustry)}
          className="block w-[439px] p-2 border border-gray-400 rounded-full mb-4"
        >
          <option value="">Select Industry</option>
          <option value="Industry 1">Industry 1</option>
          <option value="Industry 2">Industry 2</option>
        </select>

        <label className="block mb-2 text-lg text-zinc-700" htmlFor="qualification">
          What qualification are you looking for?
        </label>
        <select
          id="qualification"
          value={qualification}
          onChange={handleChange(setQualification)}
          className="block w-[439px] p-2 border border-gray-400 rounded-full mb-6"
        >
          <option value="">Select Qualification</option>
          <option value="Qualification 1">Qualification 1</option>
          <option value="Qualification 2">Qualification 2</option>
        </select>

        <button className="bg-primary text-white w-[175px] font-bold
         p-2 rounded-full">
          Next
        </button>
      </div>
    </div>

  );
};

export default First;
