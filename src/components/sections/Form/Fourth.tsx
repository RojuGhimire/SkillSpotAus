import React, { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';

interface FourthProps {
    onNext: () => void;
    onPrevious: () => void;
}

const Fourth: React.FC<FourthProps> = ({ onNext, onPrevious }) => {
    const [hasQualifications, setHasQualifications] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSelection = (value: boolean) => {
        setHasQualifications(value);
        setError(null); // Clear error message when a selection is made
    };

    const handleNextClick = () => {
        if (hasQualifications === null) {
            setError("Please select whether you have formal qualifications.");
            return;
        }
        onNext();
    };

    return (
        <div className="bg-[#F6ECED] p-6 px-10 rounded-t-3xl shadow-lg w-full max-w-[900px] mt-20 mx-auto">
            <img
                src="/logobg.png"
                alt="Skill Spot Australia Logo"
                className="mx-auto mb-4"
            />
            <div className='flex w-full items-center justify-center flex-col '>
                <h2 className="text-xl font-semibold text-center mb-4">
                    Convert your Experience into a Nationally Recognised Qualification
                </h2>
            </div>
            <div className="flex space-y-2 mb-4 items-center justify-between">
                <span>✔ Increased career opportunities</span>
                <span>✔ Avoid repeated training</span>
                <span>✔ Save Time and Money</span>
            </div>

            <div className="mb-6">
                <div className="flex items-center justify-center mb-2">
                    <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">1</span>
                    <div className="w-32 h-1 bg-primary mx-1"></div>
                    <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">2</span>
                    <div className="w-32 h-1 bg-primary mx-1"></div>
                    <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">3</span>
                    <div className="w-32 h-1 bg-primary mx-1"></div>
                    <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">4</span>
                    <div className="w-32 h-1 bg-zinc-300 mx-1"></div>
                    <span className="bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-full">5</span>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <a className="block mb-2 text-lg text-zinc-700">
                    How many years of relevant work experience do you have?
                </a>
                <div className="rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Do you have any formal qualifications?</h2>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => handleSelection(true)}
                            className={`flex flex-col w-[165px] h-[96px] border items-center justify-center rounded-lg p-4 text-center text-xl font-bold ${hasQualifications === true ? 'bg-primary text-white' : 'bg-white border-zinc-300 text-primary'}`}
                        >
                            <GiCheckMark className='text-3xl' /> Yes
                        </button>

                        <button
                            onClick={() => handleSelection(false)}
                            className={`flex flex-col w-[165px] h-[96px] border items-center justify-center rounded-lg p-4 text-center text-xl font-bold ${hasQualifications === false ? 'bg-primary text-white' : 'bg-white border-zinc-300 text-black'}`}
                        >
                            <span className="text-xl flex items-center justify-center">❌</span> No
                        </button>
                    </div>

                    {/* Error Message */}
                    {error && <div className="text-red-500 mt-2">{error}</div>}

                    <div className='space-x-6 mt-5'>
                        <button
                            onClick={onPrevious}
                            className="font-bold bg-white text-md font-overpass border border-primary hover:text-white hover:bg-primary text-black w-[175px] p-2 rounded-full"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNextClick}
                            className={`bg-primary text-white w-[175px] font-bold p-2 rounded-full ${hasQualifications === null ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={hasQualifications === null}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fourth;
