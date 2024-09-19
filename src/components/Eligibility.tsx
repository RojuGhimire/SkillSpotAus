import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Eligibility: React.FC = () => {
  const [isLoading] = useState(false);

  return (
    <div className="fixed bottom-28  lg:bottom-24 left-1/2 w-full items-center justify-center flex transform -translate-x-1/2 z-50 mx-auto">
      <button
        type="submit"
        className="font-bold w-[400px]  text-white py-2 rounded-full h-[60px] sm:w-[500px] inline-flex mt-7 gap-1 animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#CB2026,45%,#f9f9f8,48%,#CB2026)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg"
      >
        {isLoading ? (
          <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} />
        ) : (
          <div className="flex gap-2 items-center ">
            <span>CHECK HERE FOR YOUR FREE 60 SECOND SKILL CHECK</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default Eligibility;
