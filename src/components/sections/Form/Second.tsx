import React, { useState } from "react";

interface SecondProps {
    onNext: () => void;
    onPrevious: () => void;
}

const Second: React.FC<SecondProps> = ({ onNext, onPrevious }) => {
  const [experienceYears, setExperienceYears] = useState<string>("");
  const [workLocation, setWorkLocation] = useState<string>("");
  const [errors, setErrors] = useState<{ experienceYears: string; workLocation: string }>({
    experienceYears: "",
    workLocation: "",
  });

  const handleExperienceClick = (years: string) => {
    setExperienceYears(years);
    setErrors((prev) => ({ ...prev, experienceYears: "" })); // Clear the error when an option is selected
  };

  const handleLocationClick = (location: string) => {
    setWorkLocation(location);
    setErrors((prev) => ({ ...prev, workLocation: "" })); // Clear the error when an option is selected
  };

  const handleNext = () => {
    let formErrors = { experienceYears: "", workLocation: "" };

    // Validate Years of Experience
    if (!experienceYears) {
      formErrors.experienceYears = "Please select your years of experience.";
    }

    // Validate Work Location
    if (!workLocation) {
      formErrors.workLocation = "Please select where your work experience is.";
    }

    setErrors(formErrors);

    // If no errors, proceed to the next step
    if (!formErrors.experienceYears && !formErrors.workLocation) {
      onNext();
    }
  };

  return (
    <div className="bg-[#F6ECED] p-6 px-4 md:px-10 rounded-t-3xl shadow-lg w-[90%] md:w-[60%] lg:w-[50%] mt-10 mx-auto">
      <img
        src="/logobg.png"
        alt="Skill Spot Australia Logo"
        className="mx-auto mb-4 w-[4rem] md:w-[5rem] lg:w-[6rem]"
      />

      <div className="flex flex-col items-center">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold text-center mb-4">
          Convert your Experience into a Nationally Recognised Qualification
        </h2>
      </div>

      <div className="flex flex-wrap justify-between mb-4 space-y-2 md:space-y-0 text-xs md:text-sm lg:text-base">
        <span>✔ Increased career opportunities</span>
        <span>✔ Avoid repeated training</span>
        <span>✔ Save Time and Money</span>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-center mb-2">
          <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">
            1
          </span>
          <div className="w-16 md:w-32 h-1 bg-primary mx-1"></div>
          <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">
            2
          </span>
          <div className="w-16 md:w-32 h-1 bg-zinc-300 mx-1"></div>
          <span className="bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
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


      <div className="flex flex-col items-center justify-center">
        <p className="block mb-2 text-sm md:text-lg text-zinc-700 text-center">
          How many years of relevant work experience do you have?
        </p>

        {/* Single-row layout for experience buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-2 mb-3">
          <button
            onClick={() => handleExperienceClick("1-2 Years")}
            className={`w-[130px] md:w-[140px] lg:w-[130px] h-[48px] md:h-[54px] rounded-full font-bold text-sm md:text-md font-overpass border ${
              experienceYears === "1-2 Years" ? "bg-primary text-white" : "bg-white text-black"
            } hover:text-white hover:bg-primary`}
          >
            1-2 <br className="hidden md:block" /> Years
          </button>
          <button
            onClick={() => handleExperienceClick("3-5 Years")}
            className={`w-[130px] md:w-[140px] lg:w-[130px] h-[48px] md:h-[54px] rounded-full font-bold text-sm md:text-md font-overpass border ${
              experienceYears === "3-5 Years" ? "bg-primary text-white" : "bg-white text-black"
            } hover:text-white hover:bg-primary`}
          >
            3-5 <br className="hidden md:block" /> Years
          </button>
          <button
            onClick={() => handleExperienceClick("6-10 Years")}
            className={`w-[130px] md:w-[140px] lg:w-[130px] h-[48px] md:h-[54px] rounded-full font-bold text-sm md:text-md font-overpass border ${
              experienceYears === "6-10 Years" ? "bg-primary text-white" : "bg-white text-black"
            } hover:text-white hover:bg-primary`}
          >
            6-10 <br className="hidden md:block" /> Years
          </button>
          <button
            onClick={() => handleExperienceClick("10+ Years")}
            className={`w-[130px] md:w-[140px] lg:w-[130px] h-[48px] md:h-[54px] rounded-full font-bold text-sm md:text-md font-overpass border ${
              experienceYears === "10+ Years" ? "bg-primary text-white" : "bg-white text-black"
            } hover:text-white hover:bg-primary`}
          >
            10+ <br className="hidden md:block" /> Years
          </button>
        </div>

        {errors.experienceYears && <p className="text-red-500 text-sm">{errors.experienceYears}</p>}

        <p className="block mb-2 text-sm md:text-lg text-zinc-700 text-center">
          Where is your work experience?
        </p>

        {/* Single-row layout for location buttons */}
        <div className="flex flex-nowrap justify-center gap-2 md:gap-4 mt-2 mb-5 overflow-x-auto">
          <button
            onClick={() => handleLocationClick("Australia")}
            className={`w-[130px] md:w-[140px] lg:w-[130px] h-[48px] md:h-[54px] rounded-full font-bold text-sm md:text-md font-overpass border ${
              workLocation === "Australia" ? "bg-primary text-white" : "bg-white text-black"
            } hover:text-white hover:bg-primary`}
          >
            Australia
          </button>
          <button
            onClick={() => handleLocationClick("Overseas")}
            className={`w-[130px] md:w-[140px] lg:w-[130px] h-[48px] md:h-[54px] rounded-full font-bold text-sm md:text-md font-overpass border ${
              workLocation === "Overseas" ? "bg-primary text-white" : "bg-white text-black"
            } hover:text-white hover:bg-primary`}
          >
            Overseas
          </button>
          <button
            onClick={() => handleLocationClick("Both")}
            className={`w-[130px] md:w-[140px] lg:w-[130px] h-[48px] md:h-[54px] rounded-full font-bold text-sm md:text-md font-overpass border ${
              workLocation === "Both" ? "bg-primary text-white" : "bg-white text-black"
            } hover:text-white hover:bg-primary`}
          >
            Both
          </button>
        </div>

        {errors.workLocation && <p className="text-red-500 text-sm">{errors.workLocation}</p>}

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-5">
          <button
            onClick={onPrevious}
            className="bg-primary text-white font-bold text-sm md:text-md font-overpass hover:bg-primary-dark w-[150px] md:w-[175px] p-2 rounded-full"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-primary text-white font-bold text-sm md:text-md font-overpass hover:bg-primary-dark w-[150px] md:w-[175px] p-2 rounded-full"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;
