import React from "react";

const Frame: React.FC = () => {
  return (
    <div className="w-full h-[99px] font-overpass flex ">
      <div className="w-full h-[99px] bg-[#001B6A] p-[25px_89px_25px_20px] text-white">
        <h3 className="text-lg font-bold">ODL mode of study</h3>
        <p className="text-sm">Study in your own place and time</p>
      </div>
      <div
        className="w-full h-[99px] p-[25px_89px_25px_20px]  bg-[#CB2026] text-white"
      >
        <h3 className="text-lg font-bold">Flexibility</h3>
        <p className="text-sm">Self-Individualized Learning</p>
      </div>
      <div className="w-full h-[99px] p-[25px_89px_25px_20px] text-white bg-[#001B6A] ">
        <h3 className="text-lg font-bold">
          Certificate valid all over the world
        </h3>
        <p className="text-sm">International Skill</p>
      </div>
      <div className="w-full h-[99px] p-[25px_89px_25px_20px] bg-[#CB2026] text-white ">
        <h3 className="text-lg font-bold">Blended Learning</h3>
        <p className="text-sm">Effective Student support system</p>
      </div>
    </div>
  );
};

export default Frame;
