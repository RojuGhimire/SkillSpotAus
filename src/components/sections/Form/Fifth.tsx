import React from 'react';

interface FifthProps {
    onNext: () => void;
    onPrevious: () => void;
}

const Fifth: React.FC<FifthProps> = ({  onNext, onPrevious }) => {

    return (
        <div className="bg-[#F6ECED] p-6 px-10 rounded-t-3xl shadow-lg w-[900px] mt-20 mx-auto">
            <img
                src="/logobg.png"
                alt="Skill Spot Australia Logo"
                className="mx-auto  mb-4"
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
                    <span className=" bg-primary  text-white w-8 h-8 flex items-center justify-center rounded-full"> 5</span>

                </div>
            </div>
            <div className='flex flex-col items-center justify-center  '>
                <div className=" p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Enter your details below to download our free RPL info guide on the next page.</h2>
                    <form>
                        <div className='flex space-x-8'>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-muted-foreground" htmlFor="first-name">
                                    First Name *
                                </label>
                                <input className="mt-1 block w-[352px] border border-primary rounded-full p-2 focus:ring focus:ring-ring" type="text" id="first-name" required />
                            </div>
                            <div className="">
                                <label className="block text-sm font-medium text-muted-foreground" htmlFor="last-name">
                                    Last Name *
                                </label>
                                <input className="mt-1 block w-[352px] border border-primary rounded-full p-2 focus:ring focus:ring-ring" type="text" id="last-name" required />
                            </div></div>

                        <div className='flex space-x-8'>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-muted-foreground" htmlFor="contact-number">
                                    Contact Number *
                                </label>
                                <input className="mt-1 block w-[352px] border border-primary rounded-full p-2 focus:ring focus:ring-ring" type="tel" id="contact-number" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-muted-foreground" htmlFor="email">
                                    Email *
                                </label>
                                <input className="mt-1 block w-[352px] border border-primary rounded-full p-2 focus:ring focus:ring-ring" type="email" id="email" required />
                            </div>
                        </div>


                        <div className="mb-4">
                            <label className="block text-sm font-medium text-muted-foreground" htmlFor="questions">
                                Any Questions for us?
                            </label>
                            <textarea className="mt-1 block w-[737px] h-[54px] border border-primary rounded-full p-2 focus:ring focus:ring-ring" id="questions"></textarea>
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
                    <div className='space-x-6 mt-5 flex items-center justify-center '>
                        <button
                            onClick={onPrevious}
                            className="font-bold bg-white text-md font-overpass border border-primary hover:text-white hover:bg-primary text-black w-[175px]  p-2 rounded-full">
                            Previous
                        </button>
                        <button
                            onClick={onNext}
                            className="bg-primary text-white w-[175px] font-bold p-2 rounded-full">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Fifth;
