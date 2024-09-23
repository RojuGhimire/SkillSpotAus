import Header from '@/components/Header';
import React, { useState } from 'react';
import Banner3 from '../Banner3';
import Footer3 from '../Footer3';
import { Footer2 } from '../Footer2';
import Affiliates from '../Our';

const ApplicationForm2: React.FC = () => {
    const [] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        education: 'Graduation',
        experience: '1-2 year',
        country: '',
        course: '',
        campus: ''
    });

  

    return (
        <div className=''>
            <Header />
            <div className="flex font-overpass justify-center items-center mt-28 mb-20 h-auto lg:h-[535px]">
                <div className="flex flex-col lg:flex-row bg-[#F4ECE6] h-auto lg:h-[535px] shadow-lg rounded-lg w-full max-w-[1462px] overflow-hidden">

                    {/* Left Side Image */}
                    <div className="w-full lg:w-[35%] relative">
                        <img
                            src="/apply.png"
                            alt="Interview Image"
                            className="h-48 w-full lg:h-full object-cover lg:w-[419px] rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                        />
                    </div>

                    {/* Form on the Right */}
                    <form  className="w-full lg:w-[65%] p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-center">Apply Now</h2>
                        <p className="text-center text-gray-600 mb-4 lg:mb-6">Let's get started with your personal information</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="fullName" className="block text-gray-700">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700">Your E-mail *</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="mobileNumber" className="block text-gray-700">Enter Mobile Number *</label>
                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    id="mobileNumber"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="education" className="block text-gray-700">Educational Qualification *</label>
                                <select
                                    name="education"
                                    id="education"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                >
                                    <option value="Graduation">Graduation</option>
                                    <option value="Post-Graduation">Post-Graduation</option>
                                    <option value="Doctorate">Doctorate</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="experience" className="block text-gray-700">Experience *</label>
                                <input
                                    type="text"
                                    name="experience"
                                    id="experience"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="country" className="block text-gray-700">Your Physical Address *</label>
                                <select
                                    name="country"
                                    id="country"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                >
                                    <option value="">--Select Country--</option>
                                    <option value="US">United States</option>
                                    <option value="AU">Australia</option>
                                    <option value="IN">India</option>
                                    <option value="NP">Nepal</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="course" className="block text-gray-700">Which Course You Want to Apply For *</label>
                                <input
                                    type="text"
                                    name="course"
                                    id="course"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="campus" className="block text-gray-700">Campus Near Your State *</label>
                                <select
                                    name="campus"
                                    id="campus"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                >
                                    <option value="">--Select Campus--</option>
                                    <option value="Campus 1">Campus 1</option>
                                    <option value="Campus 2">Campus 2</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button type="submit" className="mt-6 text-center font-bold bg-primary text-white h-[45px] rounded-full w-[130px]">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Banner3 />
            <Affiliates />
            <Footer3 />
            <Footer2 />
        </div>
    );
};

export default ApplicationForm2;
