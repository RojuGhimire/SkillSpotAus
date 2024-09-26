import React from 'react';

const RPLSteps: React.FC = () => {
  return (
   <div className="bg-white min-h-screen w-screen flex justify-center items-center font-overpass">
   
      <div className="flex justify-center items-center border-t-4 border-b-4 border-r-4 border-primary  w-[85%] h-80 absolute">
       

        {/* Top Boxes */}

        <div className="flex justify-center items-center absolute -top-[30%] left-0">
        <div className="rounded-full p-1 h-10 w-10 font-overpass bg-primary text-white flex justify-center items-center">
            1
          </div>
          <div className="flex flex-col justify-center  items-center w-[338px] h-[185px] text-center  bg-white rounded-lg border border-gray-100 shadow-xl p-4 ml-10">
            <div className="text-2xl  font-bold text-primary">
              Free Skill Assessment
            </div>
            <div className=" text-sm font-semibold mt-2 text-start text-[#535a5f] ">
            Speak to Skill Spot Australia about your goals and allow us to guide you towards the qualification that will help you reach them.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center absolute -top-[30%] left-[35%]">
        <div className="rounded-full p-1 h-10 w-10 font-overpass bg-primary text-white flex justify-center items-center">
            2
          </div>
          <div className="flex flex-col justify-center items-center w-[338px] h-[185px] text-center  bg-white rounded-lg border border-gray-100 shadow-xl p-4 ml-10">
            <div className="text-2xl  font-bold text-primary">
            Portfolio of Experience
            </div>
            <div className="text-sm font-semibold mt-2 text-start text-[#535a5f] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, possimus molestias. Iusto deleniti animi error velit libero et quis neque!
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center absolute -top-[30%] left-[70%]">
        <div className="rounded-full p-1 h-10 w-10 font-overpass bg-primary text-white flex justify-center items-center">
            3
          </div>
          <div className="flex flex-col justify-center items-center w-[338px] h-[185px] text-center  bg-white rounded-lg border border-gray-100 shadow-xl p-4 ml-10">
            <div className="text-2xl  font-bold text-primary">
            Evidence review
            </div>
            <div className="text-sm font-semibold mt-2 text-start text-[#535a5f] ">
            Once one of our partner registered training organisations (RTOs) has assessed your portfolio, the assessor assigned to your case may be in touch if any additional evidence is required. If you have any weak areas, the RTO may assign a trainer to upskill you at no cost to you.
            </div>
          </div>
        </div>

        {/* Bottom Boxes */}

        <div className="flex justify-center items-center absolute -bottom-[30%] left-0">
        <div className="rounded-full p-1 h-10 w-10 font-overpass bg-primary text-white flex justify-center items-center">
          6
          </div>
          <div className="flex flex-col justify-center items-center w-[338px] h-[185px] text-center  bg-white rounded-lg border border-gray-100 shadow-xl p-4 ml-10">
            <div className="text-2xl  font-bold text-primary">
              Free Skill Assessment
            </div>
            <div className="text-sm font-semibold mt-2 text-start text-[#535a5f] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, possimus molestias. Iusto deleniti animi error velit libero et quis neque!
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center absolute -bottom-[30%] left-[35%]">
        <div className="rounded-full p-1 h-10 w-10 font-overpass bg-primary text-white flex justify-center items-center">
            5
          </div>
          <div className="flex flex-col justify-center items-center w-[338px] h-[185px] text-center  bg-white rounded-lg border border-gray-100 shadow-xl p-4 ml-10">
            <div className="text-2xl  font-bold text-primary">
            Portfolio of Experience
            </div>
            <div className="text-sm font-semibold mt-2 text-start text-[#535a5f] ">
            Your dedicated consultant will guide you through the process of putting together a portfolio of evidence. This can contain previous qualifications with transcripts, certificates, photos and videos, samples or work examples, letters of reference, your current resume, etc.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center absolute -bottom-[30%] left-[70%]">
          <div className="rounded-full p-1 h-10 w-10 font-overpass bg-primary text-white flex justify-center items-center">
            4
          </div>
          <div className="flex flex-col justify-center items-center w-[338px] h-[185px] text-center bg-white rounded-lg border border-gray-100 shadow-xl p-4 ml-10">
            <div className="text-2xl  font-bold text-primary">
            You're Qualified!!
            </div>
            <div className="text-sm font-semibold mt-2 text-start text-[#535a5f] ">
            Skills Certified is partnered with Registered Training Organisations whose qualifications are nationally recognised in Australia and are the same as the qualification you would receive from full time study. Qualifications can also be used for licensing applications.
            </div>
          </div>
        </div>
        
      </div>
    </div>

  );
};

export default RPLSteps;
