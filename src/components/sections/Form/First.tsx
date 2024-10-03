import React, { useState } from "react";

interface FirstProps {
  onNext: () => void;
}

const First: React.FC<FirstProps> = ({ onNext }) => {
  const [industry, setIndustry] = useState<string>("");
  const [qualification, setQualification] = useState<string>("");
  const [errors, setErrors] = useState<{ industry: string; qualification: string }>({
    industry: "",
    qualification: "",
  });

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setter(e.target.value);
    };

  const handleNext = () => {
    let formErrors = { industry: "", qualification: "" };

    // Validate Industry
    if (!industry) {
      formErrors.industry = "Please select an industry.";
    }

    // Validate Qualification
    if (!qualification) {
      formErrors.qualification = "Please select a qualification.";
    }

    setErrors(formErrors);

    // If no errors, proceed to the next step
    if (!formErrors.industry && !formErrors.qualification) {
      onNext();
    }
  };

  return (
    <div className="bg-[#F6ECED] p-6 md:p-10 rounded-t-3xl shadow-lg w-[90%] md:w-[60%] lg:w-[50%] mt-10 mx-auto">
      <img
        src="/logobg.png"
        alt="Skill Spot Australia Logo"
        className="mx-auto mb-4 w-[5rem] md:w-[6rem] lg:w-[7rem]"
      />

      <div className="flex flex-col items-center">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-4">
          Convert your Experience into a Nationally Recognised Qualification
        </h2>
      </div>

      <div className="flex flex-wrap justify-between mb-4 space-y-2 md:space-y-0 text-sm md:text-base">
        <span>✔ Increased career opportunities</span>
        <span>✔ Avoid repeated training</span>
        <span>✔ Save Time and Money</span>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-center mb-2">
          <span className="bg-primary text-white w-[1.5rem] h-[1.5rem] md:w-8 md:h-8 flex items-center justify-center rounded-full">1</span>
          <div className="w-[4rem] md:w-[6rem] h-1 bg-zinc-300 mx-1"></div>
          <span className="bg-gray-600 text-white w-[1.5rem] h-[1.5rem] md:w-8 md:h-8 flex items-center justify-center rounded-full">2</span>
          <div className="w-[4rem] md:w-[6rem] h-1 bg-zinc-300 mx-1"></div>
          <span className="bg-gray-600 text-white w-[1.5rem] h-[1.5rem] md:w-8 md:h-8 flex items-center justify-center rounded-full">3</span>
          <div className="w-[4rem] md:w-[6rem] h-1 bg-zinc-300 mx-1"></div>
          <span className="bg-gray-600 text-white w-[1.5rem] h-[1.5rem] md:w-8 md:h-8 flex items-center justify-center rounded-full">4</span>
          <div className="w-[4rem] md:w-[6rem] h-1 bg-zinc-300 mx-1"></div>
          <span className="bg-gray-600 text-white w-[1.5rem] h-[1.5rem] md:w-8 md:h-8 flex items-center justify-center rounded-full">5</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <label className="block mb-2 text-base md:text-lg text-zinc-700" htmlFor="industry">
          Which industry is your experience in?
        </label>
        <select
          id="industry"
          value={industry}
          onChange={handleChange(setIndustry)}
          className={`block w-full md:w-[80%] lg:w-[60%] p-2 border ${
            errors.industry ? "border-red-500" : "border-gray-400"
          } rounded-full mb-4`}
        >
          <option value="">Select Industry</option>
          <option value="Industry 1">Industry 1</option>
          <option value="Industry 2">Industry 2</option>
        </select>
        {errors.industry && <p className="text-red-500 text-sm">{errors.industry}</p>}

        <label className="block mb-2 text-base md:text-lg text-zinc-700" htmlFor="qualification">
          What qualification are you looking for?
        </label>
        <select
          id="qualification"
          value={qualification}
          onChange={handleChange(setQualification)}
          className={`block w-full md:w-[80%] lg:w-[60%] p-2 border ${
            errors.qualification ? "border-red-500" : "border-gray-400"
          } rounded-full mb-6`}
        >
          <option value="">Select Qualification</option>
          <option value="Qualification 1">Qualification 1</option>
          <option value="Qualification 2">Qualification 2</option>
        </select>
        {errors.qualification && <p className="text-red-500 text-sm">{errors.qualification}</p>}

        <button
          onClick={handleNext}
          className="bg-primary text-white font-bold w-[60%] md:w-[40%] lg:w-[25%] p-2 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default First;
