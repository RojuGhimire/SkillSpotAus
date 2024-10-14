import React from 'react';

interface FifthProps {
    onNext: () => void;
    onPrevious: () => void;
}

const Fifth: React.FC<FifthProps> = ({ onNext, onPrevious }) => {
    return (
        <div className="bg-[#F6ECED] p-6 px-4 md:px-10 rounded-t-3xl shadow-lg max-w-[900px] mt-20 mx-auto overflow-y-auto max-h-[80vh]">
            <img
                src="/logobg.png"
                alt="Skill Spot Australia Logo"
                className="mx-auto mb-4 w-[4rem] md:w-[5rem] lg:w-[6rem]"
            />
            <div className='flex w-full items-center justify-center flex-col'>
                <h2 className="text-xl font-semibold text-center mb-4">
                    Convert your Experience into a Nationally Recognised Qualification
                </h2>
            </div>
            <div className="flex flex-col space-y-2 mb-4 items-center md:flex-row md:space-y-0 md:space-x-4 justify-center">
                <span>✔ Increased career opportunities</span>
                <span>✔ Avoid repeated training</span>
                <span>✔ Save Time and Money</span>
            </div>
            <div className="mb-6">
                <div className="flex items-center justify-center mb-2">
                    <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">1</span>
                    <div className="w-20 md:w-32 h-1 bg-primary mx-1"></div>
                    <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">2</span>
                    <div className="w-20 md:w-32 h-1 bg-primary mx-1"></div>
                    <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">3</span>
                    <div className="w-20 md:w-32 h-1 bg-primary mx-1"></div>
                    <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">4</span>
                    <div className="w-20 md:w-32 h-1 bg-primary mx-1"></div>
                    <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">5</span>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className="p-4 md:p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Enter your details below to download our free RPL info guide on the next page.</h2>
                    <form>
                        <div className='flex flex-col md:flex-row md:space-x-4'>
                            <div className="mb-2 md:w-1/2">
                                <label className="block text-sm font-medium text-muted-foreground" htmlFor="first-name">
                                    First Name *
                                </label>
                                <input className="mt-1 block w-full border border-primary rounded-full p-2 focus:ring focus:ring-ring" type="text" id="first-name" required />
                            </div>
                            <div className="mb-2 md:w-1/2">
                                <label className="block text-sm font-medium text-muted-foreground" htmlFor="last-name">
                                    Last Name *
                                </label>
                                <input className="mt-1 block w-full border border-primary rounded-full p-2 focus:ring focus:ring-ring" type="text" id="last-name" required />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row md:space-x-4'>
                            <div className="mb-2 md:w-1/2">
                                <label className="block text-sm font-medium text-muted-foreground" htmlFor="contact-number">
                                    Contact Number *
                                </label>
                                <input className="mt-1 block w-full border border-primary rounded-full p-2 focus:ring focus:ring-ring" type="tel" id="contact-number" required />
                            </div>
                            <div className="mb-2 md:w-1/2">
                                <label className="block text-sm font-medium text-muted-foreground" htmlFor="email">
                                    Email *
                                </label>
                                <input className="mt-1 block w-full border border-primary rounded-full p-2 focus:ring focus:ring-ring" type="email" id="email" required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-muted-foreground" htmlFor="questions">
                                Any Questions for us?
                            </label>
                            <textarea className="mt-1 block w-full h-[54px] border border-primary rounded-full p-2 focus:ring focus:ring-ring" id="questions"></textarea>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" id="terms" className="mr-2" required />
                            <label className="text-sm text-muted-foreground" htmlFor="terms">
                                I agree with the{' '}
                                <a href="#" className="text-primary font-bold">
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                    </form>
                    <div className='space-x-6 mt-5 flex items-center justify-center'>
                        <button
                            onClick={onPrevious}
                            className="font-bold bg-white text-md border border-primary hover:text-white hover:bg-primary text-black w-[150px] p-2 rounded-full">
                            Previous
                        </button>
                        <button
                            onClick={onNext}
                            className="bg-primary text-white w-[150px] font-bold p-2 rounded-full">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fifth;
