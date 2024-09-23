import React, { useState } from 'react';
import Header from '@/components/Header';
import Banner3 from '../Banner3';
import Footer3 from '../Footer3';
import { Footer2 } from '../Footer2';
import Affiliates from '../Our';
import { FaCertificate, FaClock, FaCode, FaSchool } from 'react-icons/fa';

const ApplicationForm2: React.FC = () => {
    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        education: 'Graduation',
        experience: '',
        country: '',
        course: '',
        campus: ''
    });

    const careerList = [
        "Programmers",
        "System analysts",
        "Information analysts",
        "Database managers",
        "Network administrators",
        "Trainers, Instructors, and Salespersons"
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formState);
        // Handle form submission logic here
    };

    return (
        <div className=''>
            <Header />
            <div className="flex justify-center items-center mt-28 mb-20">
                <div className="flex flex-col  lg:flex-row bg-[#F4ECE6] justify-center items-center font-overpass shadow-lg rounded-lg w-full max-w-[1462px]">

                    {/* Left Side Image */}
                    <div className="w-full lg:w-[35%]">
                        <img
                            src="/apply.png"
                            alt="Interview Image"
                            className="h-48 w-full lg:h-full object-cover rounded-t-lg lg:rounded-l-lg"
                        />
                        
                    </div>
                   

                    {/* Form on the Right */}
                    <form onSubmit={handleSubmit} className="w-full lg:w-[65%] p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-center">Apply Now</h2>
                        <p className="text-center text-gray-600 mb-4 lg:mb-6">Let's get started with your personal information</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="fullName" className="block text-gray-700">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    value={formState.fullName}
                                    onChange={handleChange}
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
                                    value={formState.email}
                                    onChange={handleChange}
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
                                    value={formState.mobileNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="education" className="block text-gray-700">Educational Qualification *</label>
                                <select
                                    name="education"
                                    id="education"
                                    value={formState.education}
                                    onChange={handleChange}
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
                                    value={formState.experience}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="country" className="block text-gray-700">Your Physical Address *</label>
                                <select
                                    name="country"
                                    id="country"
                                    value={formState.country}
                                    onChange={handleChange}
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
                                    value={formState.course}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="campus" className="block text-gray-700">Campus Near Your State *</label>
                                <select
                                    name="campus"
                                    id="campus"
                                    value={formState.campus}
                                    onChange={handleChange}
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
                            <button type="submit" className="mt-6 font-bold bg-primary text-white h-[45px] rounded-full w-[130px]">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center px-6 font-overpass lg:px-24 py-12 lg:py-16">
                {/* Left Section (Text) */}
                <div className="w-full lg:w-3/5">
                    <h2 className="text-4xl font-bold text-primary mb-4">Course Introduction</h2>
                    <p className="text-xl font-semibold text-secondary mb-5">
                        CERTIFICATE III IN AUTOMOTIVE BODY REPAIR TECHNOLOGY - AUR32120
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        CERTIFICATE III IN AUTOMOTIVE BODY REPAIR TECHNOLOGY is a unique program
                        designed to integrate knowledge and skills in analyzing, designing,
                        developing, and maintaining systems for business houses. This course covers
                        124 credit hours.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        Students will study database design, computer coding languages, marketing,
                        e-commerce, network administration, and resource management. This program
                        equips students with the necessary skills to support businesses.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        For students aiming for the IT industry, extra effort is required to
                        be as competitive as other IT degrees.
                    </p>
                </div>

                {/* Right Section (Image) */}
                <div className="w-full lg:w-2/5">
                    <img
                        src="/cou.png"
                        alt="Course Introduction"
                        className="w-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>
            </div>

            {/* Careers Section */}
            <div className="mt-8 px-6 lg:px-24 font-overpass">
                <h2 className="text-4xl font-bold  text-primary mb-4">Careers You Can Choose After the Course:</h2>
             <div className=' flex  '>

<ul className="list-disc  list-inside text-gray-700 text-lg">
    {careerList.map((career, index) => (
        <li key={index}>{career}</li>
    ))}

</ul>
<div className='flex items-center justify-end w-3/5'>
<img src="/care.png" alt="" className='h-[200px] w-[281px]'  />

</div>

             </div>
                

            </div>

            <div className='px-6 lg:px-24 font-overpass py-12'>
                <h2 className="text-4xl font-bold text-primary mb-4">Qualification Overview</h2>
                <p className="text-gray-600 mb-8">Let's get started with Qualification overview</p>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
                    {/* Qualification Cards */}
                    <div className="bg-white items-center justify-center flex flex-col shadow-xl rounded-xl p-6 text-center">
                        <FaCertificate className="text-2xl mb-2 text-primary" />
                        <h3 className="text-xl font-overpass font-bold mb-2">Qualification Name</h3>
                        <p className="text-gray-600 font-overpass font-lg">Certificate III in Automotive Body Repair Technology</p>
                    </div>

                    <div className="bg-white shadow-xl items-center justify-center flex flex-col rounded-xl p-6 text-center">
                        <FaSchool className="text-2xl mb-2 text-primary" />
                        <h3 className="text-xl font-overpass font-bold mb-2">Offered By</h3>
                        <p className="text-gray-600 font-overpass font-lg">Certificate III in Automotive Body Repair Technology</p>
                    </div>

                    <div className="bg-white shadow-xl items-center justify-center flex flex-col rounded-xl p-6 text-center">
                        <FaCode className="text-2xl mb-2 text-primary" />
                        <h3 className="text-xl font-overpass font-bold mb-2">Code and Units of Competency</h3>
                        <p className="text-gray-600 font-overpass font-lg">AUR32120</p>
                    </div>

                    <div className="bg-white shadow-xl items-center justify-center flex flex-col rounded-xl p-6 text-center">
                        <FaClock className="text-2xl mb-2 text-primary" />
                        <h3 className="text-xl font-overpass font-bold mb-2">Duration</h3>
                        <p className="text-gray-600 font-overpass font-lg">Certificate III in Automotive Body Repair Technology</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="px-6 lg:px-24 font-overpass ">
                    {/* Evidence of Learning Section */}
                    <h2 className="text-3xl font-bold text-primary mb-6">Evidence Of Learning</h2>
                    <p className="text-gray-600 text-lg leading-7 mb-8">
                        You will need to provide a range of evidence to assist your assessor to make a decision about
                        your competence.<br /> The types of evidence you may be asked to provide can include:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Side: List of Evidence */}
                        <ul className="list-disc text-lg  pl-6 space-y-4 text-gray-700">
                            <li>ID</li>
                            <li>Resume</li>
                            <li>Payslips / work contract/ABN if self-employed</li>
                            <li>Letter of Employment</li>
                            <li>Current employment contracts</li>
                            <li>Letter of reference</li>
                            <li>Videos or photos of your work</li>
                            <li>Evidence of overseas qualifications</li>
                            <li>Transcripts from previous qualifications</li>
                            <li>Apprenticeship papers</li>
                            <li>Job safety analysis</li>
                        </ul>

                        {/* Right Side: Images */}
                        <div className="space-y-8">
                            <img
                                src="/Car.png"
                                alt="Learning Evidence 1"
                                className=" h-[200px] object-cover rounded-lg shadow-lg"
                            />
                            <img
                                src="/Car.png"
                                alt="Learning Evidence 2"
                                className=" h-[200px] object-cover ml-[200px] rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
                );
            </div>

            {/* Additional Sections */}
            <Banner3 />
            <Affiliates />
            <Footer3 />
            <Footer2 />
        </div>
    );
};

export default ApplicationForm2;
