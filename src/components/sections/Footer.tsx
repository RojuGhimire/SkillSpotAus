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

const currentYear: number = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <div className="bg-slate-100 font-overpass">
      {/* Footer Links */}
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
        {/* Logo and Description */}
        <div className="flex flex-col  items-start lg:w-[250px] gap-4">
          <img
            src="/logo2.png"
            alt="Skill Spot Australia"
            className="w-[112px] h-[105px] lg:ml-12 "
          />
          <p className="text-[#6C757D] text-sm lg:text-base">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold font-overpass text-secondary mb-4">
            Quick <span className="text-black">Link</span>
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm lg:text-base">
            <li>About Us</li>
            <li>RPL</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold font-overpass text-secondary mb-4">
            Quick <span className="text-black">Contact</span>
          </h3>
          <p className="flex items-center mb-4 text-gray-600 text-sm lg:text-base">
            <FaLocationDot className="text-secondary mr-3" /> Perth, Australia
          </p>
          <p className="flex items-center mb-4 text-gray-600 text-sm lg:text-base">
            <IoCall className="text-secondary mr-3" /> +61 450 545 073
          </p>
          <p className="flex items-center mb-4 text-gray-600 text-sm lg:text-base">
            <IoMail className="text-red-500 mr-3 w-5 h-5" />{" "}
            skillspotaus@gmail.com
          </p>
        </div>

        {/* Social Media and QR Code */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold font-overpass text-secondary mb-4">
            Let's <span className="text-black">Get Social</span>
          </h3>
          <div className="flex space-x-4 mb-4 text-2xl">
            <FaFacebookF className="text-blue-700" />
            <FaInstagram className="text-orange-700" />
            <FaLinkedin className="text-blue-700" />
            <FaTwitter className="text-blue-500" />
            <FaWhatsapp className="text-green-800" />
          </div>
          <img src="/QR.png" alt="QR" className="mb-4 lg:ml-12" />
          <button className="w-[115px] h-[38px] bg-secondary hover:bg-primary rounded-lg text-white font-overpass text-sm lg:text-base lg:ml-6">
            Call Us Today
          </button>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="bg-primary text-white font-poppins py-4 mx-auto flex flex-wrap justify-center space-x-4 text-sm lg:text-base">
        <a
          href="#"
          aria-label="Terms and Conditions"
          className="hover:underline"
        >
          Terms and Conditions
        </a>
        <span>|</span>
        <a href="#" aria-label="Privacy" className="hover:underline">
          Privacy
        </a>
        <span>|</span>
        <a href="#" aria-label="Disclaimer" className="hover:underline">
          Disclaimer
        </a>
        <span>|</span>
        <a href="#" aria-label="UWE Blackboard" className="hover:underline">
          UWE Blackboard
        </a>
        <span>|</span>
        <a href="#" aria-label="Turnitin" className="hover:underline">
          Turnitin
        </a>
        <span>|</span>
        <a href="#" aria-label="Press Archive" className="hover:underline">
          Press Archive
        </a>
        <span>|</span>
        <a href="#" aria-label="UWE+TBC" className="hover:underline">
          UWE+TBC
        </a>
        <span>|</span>
        <a href="#" aria-label="Downloads" className="hover:underline">
          Downloads
        </a>
        <span>|</span>
        <a href="#" aria-label="Vacancies" className="hover:underline">
          Vacancies
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="text-center bg-primary text-white font-overpass text-sm lg:text-base py-2">
        © {currentYear} Skill Spot Australia, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
