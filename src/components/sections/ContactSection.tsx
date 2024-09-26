import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-[#F6ECED] lg:h-[657px] p-6 lg:p-10">
      {/* Contact Form */}
      <img
        src="/contact2.png"
        alt=""
        className="hidden lg:block w-[70.12px] h-[30.85px] mt-[350px] text-white"
      />
      <div className="bg-white shadow-lg p-8 w-full md:w-[500px] lg:w-[561.47px] lg:h-[474.5px] mt-6 lg:mt-0 lg:top-[60px] lg:left-[117.68px] rounded-lg">
        <h2 className="text-2xl lg:text-3xl font-semibold font-overpass mb-2">
          Get In Touch
        </h2>
        <p className="mb-4">Advance Your Career with us.</p>

        {/* Form Inputs */}
        <input
          type="text"
          placeholder="Enter Full Name"
          className="w-full lg:w-[426px] h-[43px] border border-gray-300 p-2 rounded mb-4"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full lg:w-[426px] h-[43px] border border-gray-300 p-2 rounded mb-4"
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full lg:w-[426px] h-[43px] border border-gray-300 p-2 rounded mb-4"
        />

        <div className="w-full max-w-[426px] mb-6">
          <div className="relative">
            <textarea
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm outline-none resize-none"
              placeholder="Message"
              name="description"
            ></textarea>
          </div>
        </div>

        {/* Enroll Button */}
        <button className="w-full lg:w-[110px] h-[45px] text-lg font-overpass flex items-center justify-center hover:bg-secondary bg-primary text-white rounded transition duration-500 ease-in-out transform hover:bg-secondary-dark hover:scale-105">
          Enroll Now
        </button>
      </div>

      {/* Office Information Box */}
      <div className="bg-primary text-white p-8 w-full md:w-[500px] lg:w-[365.69px] lg:h-[434.27px] mt-6 lg:mt-0 lg:top-[90.65px] lg:right-[100.31px] rounded-2xl ml-0 lg:ml-10 relative">
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
          LET'S HAVE A<br /> TALK
        </h3>
        <p className="text-white font-semibold mb-1">
          Lorem Ipsum has been the industry's standard dummy text ever since the...
        </p>

        <div className="space-y-8 mt-9">
          <div className="flex items-center">
            <FaLocationDot className="text-secondary mr-5 h-6 w-4" />
            <p className="font-semibold">Perth, Australia</p>
          </div>
          <div className="flex items-center">
            <IoCall className="text-secondary h-8 w-5 mr-5" />
            <p className="font-semibold">+61 450 545 073</p>
          </div>
          <div className="flex items-center">
            <IoMdMail className="text-secondary h-8  mr-5 w-6" />
            <p className="font-semibold">skillspotaustralia@gmail.com</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-8 items-center justify-center mt-6">
          <FaInstagram className="h-5 w-5" />
          <FaFacebookF className="h-5 w-5" />
          <FaTwitter className="h-5 w-5" />
          <IoLogoWhatsapp className="h-5 w-5" />
          <FaLinkedin className="h-5 w-5" />
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-6 lg:ml-10">
        <img
          src="/Contact.png"
          alt="Support Person"
          className="w-full lg:w-[374px] lg:h-[281px]"
        />
        <div
          className="bg-white rounded-xl shadow-lg flex items-center justify-center p-4 border-l-4 sm:w-[320px] md:w-[364px] h-[75px] sm:h-[85px] sm:top-[350px] lg:left-[35px] text-secondary hover:bg-primary hover:text-white border-secondary transition-all duration-300"
        >
          <div className="w-full">
            <h2 className="font-overpass text-sm sm:text-lg font-bold">
              Are you at Right Place?
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
