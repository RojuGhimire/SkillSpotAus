import React, { useState } from 'react';

interface ThirdProps {
  onNext: () => void;
  onPrevious: () => void;
}

const Third: React.FC<ThirdProps> = ({ onNext, onPrevious }) => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const handleNext = () => {
    if (!selectedState) {
      setError("Please select your state before proceeding.");
    } else {
      setError("");
      onNext();
    }
  };

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    setError("");
  };

  return (
    <div className="bg-[#F6ECED] p-6 md:px-10 px-4 rounded-t-3xl shadow-lg w-full max-w-[900px] mt-10 mx-auto">
      {/* Logo */}
      <img
        src="/logo2.png"
        alt="Skill Spot Australia Logo"
        className="mx-auto mb-4 w-[4rem] md:w-[5rem] lg:w-[6rem]"
      />

      {/* Heading */}
      <div className="flex w-full items-center justify-center flex-col">
        <h2 className="text-lg md:text-xl font-semibold text-center mb-4">
          Convert your Experience into a Nationally Recognised Qualification
        </h2>
      </div>

      {/* Benefits */}
      <div className="space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row items-center justify-between mb-4 text-center md:text-left">
        <span>✔ Increased career opportunities</span>
        <span>✔ Avoid repeated training</span>
        <span>✔ Save Time and Money</span>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-center mb-2">
          <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">
            1
          </span>
          <div className="w-16 md:w-32 h-1 bg-primary mx-1"></div>
          <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">
            2
          </span>
          <div className="w-16 md:w-32 h-1 bg-primary mx-1"></div>
          <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">
            3
          </span>
          <div className="w-16 md:w-32 h-1 bg-zinc-300 mx-1"></div>
          <span className="bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
            4
          </span>
          <div className="w-16 md:w-32 h-1 bg-zinc-300 mx-1"></div>
          <span className="bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
            5
          </span>
        </div>
      </div>

      {/* State Selection */}
      <div className="flex flex-col items-center justify-center">
        <span className="block mb-4 text-lg text-zinc-700 text-center">
          Which state do you live?
        </span>

        {/* State Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          {['NSW', 'VIC', 'QLD', 'SA', 'WA', 'ACT', 'NT', 'TAS'].map((state) => (
            <button
              key={state}
              onClick={() => handleStateSelect(state)}
              className={`w-[97px] h-[54px] rounded-lg font-semibold font-overpass ${
                selectedState === state
                  ? 'bg-primary text-white'
                  : 'bg-white text-black hover:text-white hover:bg-primary'
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Navigation Buttons */}
        <div className="flex space-x-4 mt-5">
          <button
            onClick={onPrevious}
            className="font-bold bg-white text-md font-overpass border border-primary hover:text-white hover:bg-primary text-black w-[175px] p-2 rounded-full"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-primary text-white font-bold w-[175px] p-2 rounded-full"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Third;
