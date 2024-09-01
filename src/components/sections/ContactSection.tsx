import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
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
      <div className="bg-white shadow-lg p-8 w-full lg:w-[561.47px] lg:h-[524.5px] mt-6 lg:mt-0 lg:top-[60px] lg:left-[117.68px] rounded-lg">
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
        <select className="w-full lg:w-[426px] h-[43px] border border-gray-300 p-2 rounded mb-4">
          <option>Select course applying for*</option>
          <option>Automobile</option>
          <option>TAE*</option>
          <option>RPL</option>
          {/* Add more options here */}
        </select>
        <input
          type="text"
          placeholder="Leave your message"
          className="w-full lg:w-[426px] h-[88px] border border-gray-300 p-2 rounded mb-4"
        />

        {/* Enroll Button */}
        <button className="w-full lg:w-[102px] h-[35px] flex items-center justify-center bg-secondary text-white rounded">
          Enroll Now
        </button>
      </div>

      {/* Office Information Box */}
      <div className="bg-primary text-white p-8 w-full lg:w-[365.69px] lg:h-[434.27px] mt-6 lg:mt-0 lg:top-[90.65px] lg:right-[100.31px] rounded-2xl ml-0 lg:ml-10 relative">
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
          LET'S HAVE A<br /> TALK
        </h3>
        <p className="text-white font-semibold mb-1">
          Lorem Ipsum has been the industry's standard dummy text ever since
          the...
        </p>

        <div className="space-y-8 mt-9">
          <div className="flex items-center ">
            <FaLocationDot className="text-secondary mr-5 h-6 w-4" />
            <p className="font-semibold ">Perth, Australia</p>
          </div>
          <div className="flex items-center ">
            <IoCall className="text-secondary h-8 w-5 mr-5 " />
            <p className="font-semibold ">+61 450 545 073</p>
          </div>
          <div className="flex items-center ">
            <IoMdMail className="text-secondary h-8  mr-5 w-6" />
            <p className="font-semibold ">skillspotaustralia@gmail.com</p>
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
          className=" w-full lg:w-[374px] lg:h-[281px] "
        />
      </div>
    </div>
  );
};

export default ContactSection;
