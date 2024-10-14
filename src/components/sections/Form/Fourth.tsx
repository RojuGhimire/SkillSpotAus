import React, { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';

interface FourthProps {
  onNext: () => void;
  onPrevious: () => void;
}

const Fourth: React.FC<FourthProps> = ({ onNext, onPrevious }) => {
  const [hasQualifications, setHasQualifications] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSelection = (value: boolean) => {
    setHasQualifications(value);
    setError(null); // Clear error message when a selection is made
  };

  const handleNextClick = () => {
    if (hasQualifications === null) {
      setError("Please select whether you have formal qualifications.");
      return;
    }
    onNext();
  };

  return (
    <div className="bg-[#F6ECED] p-6 md:px-10 px-4 rounded-t-3xl shadow-lg w-full max-w-[900px] mt-10 mx-auto">
      <img
        src="/logobg.png"
        alt="Skill Spot Australia Logo"
        className="mx-auto mb-4 w-[4rem] sm:w-[5rem] md:w-[6rem]"
      />

      {/* Heading */}
      <div className="flex w-full items-center justify-center flex-col">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-center mb-4">
          Convert your Experience into a Nationally Recognised Qualification
        </h2>
      </div>

      {/* Benefits */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center justify-between mb-4 text-center md:text-left">
        <span className="text-sm sm:text-base">✔ Increased career opportunities</span>
        <span className="text-sm sm:text-base">✔ Avoid repeated training</span>
        <span className="text-sm sm:text-base">✔ Save Time and Money</span>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-center mb-2">
          <span className="bg-primary text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full">1</span>
          <div className="w-12 sm:w-16 md:w-32 h-1 bg-primary mx-1"></div>
          <span className="bg-primary text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full">2</span>
          <div className="w-12 sm:w-16 md:w-32 h-1 bg-primary mx-1"></div>
          <span className="bg-primary text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full">3</span>
          <div className="w-12 sm:w-16 md:w-32 h-1 bg-primary mx-1"></div>
          <span className="bg-primary text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full">4</span>
          <div className="w-12 sm:w-16 md:w-32 h-1 bg-zinc-300 mx-1"></div>
          <span className="bg-gray-600 text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full">5</span>
        </div>
      </div>

      {/* Qualification Selection */}
      <div className="flex flex-col items-center justify-center">
        <p className="block mb-2 text-base sm:text-lg text-zinc-700 text-center">
          How many years of relevant work experience do you have?
        </p>

        <div className="rounded-lg shadow-md w-full max-w-[400px] mx-auto">
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-center">
            Do you have any formal qualifications?
          </h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center">
            <button
              onClick={() => handleSelection(true)}
              className={`flex flex-col w-full sm:w-[165px] h-[96px] border items-center justify-center rounded-lg p-4 text-center text-lg font-bold ${
                hasQualifications === true
                  ? 'bg-primary text-white'
                  : 'bg-white border-zinc-300 text-primary'
              }`}
            >
              <GiCheckMark className="text-3xl" /> Yes
            </button>

            <button
              onClick={() => handleSelection(false)}
              className={`flex flex-col w-full sm:w-[165px] h-[96px] border items-center justify-center rounded-lg p-4 text-center text-lg font-bold ${
                hasQualifications === false
                  ? 'bg-primary text-white'
                  : 'bg-white border-zinc-300 text-black'
              }`}
            >
              <span className="text-3xl">❌</span> No
            </button>
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm sm:text-base mt-2">{error}</div>}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-5 justify-center">
            <button
              onClick={onPrevious}
              className="font-bold bg-white text-sm sm:text-md font-overpass border border-primary hover:text-white hover:bg-primary text-black w-full sm:w-[175px] p-2 rounded-full"
            >
              Previous
            </button>
            <button
              onClick={handleNextClick}
              className={`bg-primary text-white font-bold text-sm sm:text-md w-full sm:w-[175px] p-2 rounded-full ${
                hasQualifications === null ? ' cursor-not-allowed' : ''
              }`}
              disabled={hasQualifications === null}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
