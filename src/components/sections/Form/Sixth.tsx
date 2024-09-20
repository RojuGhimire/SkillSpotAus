import React from 'react';
interface SixthProps {

    onNext: () => void;
    onPrevious: () => void;
}

const Sixth: React.FC<SixthProps> = ( ) => {
  
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
                    <div className="w-32 h-1 bg-primary mx-1"></div>
                    <span className=" bg-primary   text-white w-8 h-8 flex items-center justify-center rounded-full"> 4</span>
                    <div className="w-32 h-1 bg-primary mx-1"></div>
                    <span className=" bg-primary   text-white w-8 h-8 flex items-center justify-center rounded-full"> 5</span>

                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <div className="bg-white p-8 rounded-3xl w-[559px] mb-5 shadow-lg">
              <h1 className="text-2xl font-bold text-primary text-center mb-4">Thank you for taking the next step to achieving a nationally recognized qualification.</h1>
              <p className="text-gray-500 mb-6">
                One of our consultants will be in contact to discuss the RPL process and provide you with a quote if you are to meet the requirements. For further information on how RPL works, feel free to
                review our eBook or if you have any questions, contact us on <span className="font-bold text-primary">+61 450 545 073</span>.
              </p>
             
            </div>
            <div className="flex space-x-4">
                <a href="#" className="w-[177px] h-[54px] bg-white text-black rounded-full font-bold text-md font-overpass border border-primary hover:text-white hover:bg-primary text-center items-center justify-center flex">
                  eBook
                </a>
                <a href="/" className="w-[177px] h-[54px] bg-white text-black rounded-full font-bold text-md font-overpass border border-primary hover:text-white hover:bg-primary text-center items-center justify-center flex">
                  Back to Homepage
                </a>
              </div>
            </div>
            
        </div>

    );
};

export default Sixth;
