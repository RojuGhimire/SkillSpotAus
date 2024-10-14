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
    setErrors((prev) => ({ ...prev, experienceYears: "" }));
  };

  const handleLocationClick = (location: string) => {
    setWorkLocation(location);
    setErrors((prev) => ({ ...prev, workLocation: "" }));
  };

  const handleNext = () => {
    let formErrors = { experienceYears: "", workLocation: "" };

    if (!experienceYears) {
      formErrors.experienceYears = "Please select your years of experience.";
    }
    if (!workLocation) {
      formErrors.workLocation = "Please select where your work experience is.";
    }

    setErrors(formErrors);

    if (!formErrors.experienceYears && !formErrors.workLocation) {
      onNext();
    }
  };

  return (
    <div className="bg-[#F6ECED] p-6 px-4 md:px-10 rounded-t-3xl shadow-lg w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mt-10 mx-auto">
      <img
        src="/logobg.png"
        alt="Skill Spot Australia Logo"
        className="mx-auto mb-4 w-16 md:w-20 lg:w-24"
      />

      <div className="flex flex-col items-center">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold text-center mb-4">
          Convert your Experience into a Nationally Recognised Qualification
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-y-0 text-xs md:text-sm lg:text-base mb-4">
        <span>✔ Increased career opportunities</span>
        <span>✔ Avoid repeated training</span>
        <span>✔ Save Time and Money</span>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-center mb-2">
          <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">
            1
          </span>
          <div className="w-16 md:w-24 lg:w-32 h-1 bg-primary mx-1"></div>
          <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">
            2
          </span>
          <div className="w-16 md:w-24 lg:w-32 h-1 bg-zinc-300 mx-1"></div>
          <span className="bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
            3
          </span>
          <div className="w-16 md:w-24 lg:w-32 h-1 bg-zinc-300 mx-1"></div>
          <span className="bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
            4
          </span>
          <div className="w-16 md:w-24 lg:w-32 h-1 bg-zinc-300 mx-1"></div>
          <span className="bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
            5
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="mb-2 text-sm md:text-lg text-zinc-700 text-center">
          How many years of relevant work experience do you have?
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-2 mb-3">
          {["1-2 Years", "3-5 Years", "6-10 Years", "10+ Years"].map((years) => (
            <button
              key={years}
              onClick={() => handleExperienceClick(years)}
              className={`w-[130px] md:w-[150px] lg:w-[140px] h-[48px] md:h-[54px] rounded-full font-bold text-sm md:text-md font-overpass border ${
                experienceYears === years ? "bg-primary text-white" : "bg-white text-black"
              } hover:text-white hover:bg-primary`}
            >
              {years.split(" ")[0]} <br className="hidden md:block" /> {years.split(" ")[1]}
            </button>
          ))}
        </div>

        {errors.experienceYears && <p className="text-red-500 text-sm">{errors.experienceYears}</p>}

        <p className="mb-2 text-sm md:text-lg text-zinc-700 text-center">
          Where is your work experience?
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-2 mb-5">
          {["Australia", "Overseas", "Both"].map((location) => (
            <button
              key={location}
              onClick={() => handleLocationClick(location)}
              className={`w-[130px] md:w-[150px] lg:w-[140px] h-[48px] md:h-[54px] rounded-full font-bold text-sm md:text-md font-overpass border ${
                workLocation === location ? "bg-primary text-white" : "bg-white text-black"
              } hover:text-white hover:bg-primary`}
            >
              {location}
            </button>
          ))}
        </div>

        {errors.workLocation && <p className="text-red-500 text-sm">{errors.workLocation}</p>}

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-5">
          <button
            onClick={onPrevious}
            className="font-bold bg-white text-md font-overpass border border-primary hover:text-white hover:bg-primary text-black w-full sm:w-[175px] p-2 rounded-full"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-primary text-white font-bold w-full sm:w-[175px] p-2 rounded-full"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;
