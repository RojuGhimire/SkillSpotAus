import React from 'react';

interface SixthProps {
    onNext: () => void;
    onPrevious: () => void;
}

const Sixth: React.FC<SixthProps> = () => {
    return (
        <div className="bg-[#F6ECED] p-6 px-4 md:px-10 rounded-t-3xl shadow-lg max-w-[900px] mt-20 mx-auto">
            <img
                src="/logobg.png"
                alt="Skill Spot Australia Logo"
                className="mx-auto mb-4 w-[4rem] md:w-[5rem] lg:w-[6rem]"
            />

            <div className="flex flex-col items-center justify-center">
                <div className="bg-white p-6 md:p-8 rounded-3xl w-full md:w-[559px] mb-5 shadow-lg">
                    <h1 className="text-lg md:text-2xl font-bold text-primary text-center mb-4">
                        Thank you for taking the next step to achieving a nationally recognized qualification.
                    </h1>
                    <p className="text-gray-500 mb-6 text-sm md:text-base text-center">
                        One of our consultants will be in contact to discuss the RPL process and provide you with a quote if you are to meet the requirements. For further information on how RPL works, feel free to
                        review our eBook or if you have any questions, contact us on <span className="font-bold text-primary">+61 450 545 073</span>.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <a href="#" className="w-full md:w-[177px] h-[54px] bg-white text-black rounded-full font-bold text-md font-overpass border border-primary hover:text-white hover:bg-primary text-center flex items-center justify-center">
                        eBook
                    </a>
                    <a href="/" className="w-full md:w-[177px] h-[54px] bg-white text-black rounded-full font-bold text-md font-overpass border border-primary hover:text-white hover:bg-primary text-center flex items-center justify-center">
                        Back to Homepage
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sixth;
