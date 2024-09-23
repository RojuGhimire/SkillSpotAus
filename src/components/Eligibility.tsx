import React, { useState, useEffect } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import First from "./sections/Form/First";
import Second from "./sections/Form/Second";
import Third from "./sections/Form/Third";
import Fourth from "./sections/Form/Fourth";
import Fifth from "./sections/Form/Fifth";
import Sixth from "./sections/Form/Sixth";

const Eligibility: React.FC = () => {
  const [isLoading] = useState(false);
  const [isFirstVisible, setIsFirstVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleApplyNowClick = () => {
    setIsFirstVisible(true); 
  };

  const handleClosePopup = () => {
    setIsFirstVisible(false); 
    setCurrentStep(1); 
  };

  const handleNextClick = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 6)); 
  };

  const handlePreviousClick = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1)); 
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return <First onNext={handleNextClick} />;
      case 2: return <Second onNext={handleNextClick} onPrevious={handlePreviousClick} />;
      case 3: return <Third onNext={handleNextClick} onPrevious={handlePreviousClick} />;
      case 4: return <Fourth onNext={handleNextClick} onPrevious={handlePreviousClick} />;
      case 5: return <Fifth onNext={handleNextClick} onPrevious={handlePreviousClick} />;
      case 6: return <Sixth onPrevious={handlePreviousClick} onNext={handleFinalSubmit} />;
      default: return <First onNext={handleNextClick} />;
    }
  };

  const handleFinalSubmit = () => {
    // Implement the final submission logic
    console.log("Final Step Completed");
    handleClosePopup();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isFirstVisible) {
        handleClosePopup();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isFirstVisible]);

  return (
    <div className="relative z-50 mx-auto">
      <div className="fixed bottom-28 lg:bottom-24 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleApplyNowClick}
          type="button"
          className="font-bold w-[400px] text-white py-2 rounded-full h-[60px] sm:w-[500px] inline-flex mt-7 gap-1 animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#CB2026,45%,#f9f9f8,48%,#CB2026)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg"
        >
          {isLoading ? (
            <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} />
          ) : (
            <div className="flex gap-2 items-center">
              <span>CHECK HERE FOR YOUR FREE 60 SECOND SKILL CHECK</span>
            </div>
          )}
        </button>
      </div>

      {isFirstVisible && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="inset-0 bg-black bg-opacity-50 rounded-lg p-8 shadow-lg relative w-full h-full">
            <button
              className="absolute top-[140px] right-[500px]  text-black font-bold"
              onClick={handleClosePopup}
              aria-label="Close"
            >
              ✖
            </button>

            {renderCurrentStep()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Eligibility;
