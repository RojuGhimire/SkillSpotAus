import React from 'react';

interface ThirdProps {
    onNext: () => void;
    onPrevious: () => void;
}

const Third: React.FC<ThirdProps> = ({ onNext, onPrevious }) => {

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
                    <div className="w-32 h-1 bg-primary mx-1"></div>
                    <span className=" bg-primary  text-white w-8 h-8 flex items-center justify-center rounded-full"> 2</span>
                    <div className="w-32 h-1 bg-primary mx-1"></div>
                    <span className=" bg-primary   text-white w-8 h-8 flex items-center justify-center rounded-full"> 3</span>
                    <div className="w-32 h-1 bg-zinc-300 mx-1"></div>
                    <span className=" bg-gray-600   text-white w-8 h-8 flex items-center justify-center rounded-full"> 4</span>
                    <div className="w-32 h-1 bg-zinc-300 mx-1"></div>
                    <span className=" bg-gray-600   text-white w-8 h-8 flex items-center justify-center rounded-full"> 5</span>

                </div>
            </div>
            <div className='flex flex-col items-center justify-center '>
                <a className="block mb-2 text-lg text-zinc-700" >
                    Which state do you live?
                </a>
                <div className='space-x-5 mt-5 mb-5'>
                    <button className='w-[97px] h-[54px] bg-white text-black rounded-lg font-semibold  font-overpass  hover:text-white hover:bg-primary'>
                        NSW
                    </button>
                    <button className='w-[97px] h-[54px] bg-white text-black rounded-lg font-semibold  font-overpass  hover:text-white hover:bg-primary'>
                        VIC
                    </button>
                    <button className='w-[97px] h-[54px] bg-white text-black rounded-lg font-semibold  font-overpass  hover:text-white hover:bg-primary'>
                        QLD
                    </button>
                    <button className='w-[97px] h-[54px] bg-white text-black rounded-lg font-semibold  font-overpass  hover:text-white hover:bg-primary'>
                        SA
                    </button>
                </div>
                <div className='space-x-5 mt-5 mb-5'>
                    <button className='w-[97px] h-[54px] bg-white text-black rounded-lg font-semibold  font-overpass  hover:text-white hover:bg-primary'>
                        WA
                    </button>
                    <button className='w-[97px] h-[54px] bg-white text-black rounded-lg font-semibold  font-overpass  hover:text-white hover:bg-primary'>
                        ACT
                    </button>
                    <button className='w-[97px] h-[54px] bg-white text-black rounded-lg font-bold  font-overpass  hover:text-white hover:bg-primary'>
                        NT
                    </button>
                    <button className='w-[97px] h-[54px] bg-white text-black rounded-lg font-bold  font-overpass hover:text-white hover:bg-primary'>
                        TAS
                    </button>
                </div>
                <div className='space-x-6 mt-5'>
                    <button
                        onClick={onPrevious}
                        className="font-bold bg-white text-md font-overpass border border-primary hover:text-white hover:bg-primary text-black w-[175px]  p-2 rounded-full">
                        Previous
                    </button>
                    <button
                        onClick={onNext}
                        className="bg-primary text-white w-[175px] font-bold p-2 rounded-full">
                        Next
                    </button>
                </div>

            </div>
        </div>

    );
};

export default Third;
