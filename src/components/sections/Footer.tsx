import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <div className="bg-slate-100 py-10 ">
      {/* Footer Links */}
      <div className="container mx-auto  grid grid-cols-1   h-[209px] top-[129.81px]  lg:grid-cols-4 gap-[235px]">
        {/* Logo and Description */}
        <div className=" items-center w-[350px] h-[209px] gap-[15px] ">
          <img
            src="/logo2.png"
            alt="Skill Spot Australia"
            className=" w-[112px] h-[105px]  items-center justify-center ml-28 "
          />
          <p className="text-[#6C757D]  ">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demon strate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold font-overpass text-secondary mb-4">
            Quick <span className="text-black">Link</span>{" "}
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>About Us</li>
            <li>RPL</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Quick Contact and Social Media */}
        <div className="w-[244px]">
          <h3 className="text-xl font-bold font-overpass text-secondary mb-4">
            Quick <span className="text-black">Contact</span>{" "}
          </h3>
          <p className="flex items-center mb-4 text-gray-600">
            <FaLocationDot className="text-secondary mr-5" /> Perth, Australia
          </p>

          <p className="flex items-center mb-4 text-gray-600">
            <IoCall className="text-secondary mr-5" /> +61 450 545 073
          </p>
          <p className="flex items-center mb-4 text-gray-600">
            <IoMail className="text-red-500 mr-5 w-5 h-5 " />{" "}
            skillspotaustralia@gmail.com
          </p>
        </div>
        <div>
        <h3 className="text-xl font-bold font-overpass text-secondary mb-4">
            Let's  <span className="text-black">Get Social</span>
          </h3>
          <div className="flex space-x-4">
            <FaFacebookF className="text-blue-600 h-6 w-8" />
            <FaInstagram className="text-pink-600 h-6 w-10" />
            <FaLinkedin className="text-blue-700 h-6 w-10" />
            <FaTwitter className="text-blue-400 h-6 w-10" />
            <FaWhatsapp className="text-green-600 h-6 w-10" />
          </div>
          <img src="/QR.png" alt="QR" className="mt-4 ml-12 mb-2" />
          <button className=" w-[108px] h-[38px] ml-8 bg-secondary rounded-lg text-white font-overpass ">Call Us Today</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
