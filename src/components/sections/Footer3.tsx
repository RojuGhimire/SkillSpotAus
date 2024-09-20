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

const Footer3: React.FC = () => {
  return ( 
    <div className="font-overpass">
      {/* Subscribe Section */}
      <div className="relative mb-5  ">
        <div className="relative top-[100px]  bg-primary text-white p-6 rounded-3xl lg:h-[155px] h-auto lg:w-[1005px] lg:mb-16 mx-auto max-w-7xl shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between lg:px-10 items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold">
                Enroll for our various courses <br /> anywhere from Australia
              </h2>
              <p className="text-sm mt-2">
                Read the articles related to Open and Distance Learning (ODL)
                mode of education and Blended mode of Learning.
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter Email"
                className="p-3 rounded-l-full text-black w-full lg:w-[390px] shadow-custom-light"
                style={{
                  boxShadow: "0px 0px 0px 5.93px rgba(255, 255, 255, 0.25)",
                }}
              />
              <button
                className="bg-secondary text-white p-3 w-[99px] rounded-r-full shadow-custom-light"
                style={{
                  boxShadow: "0px 0px 0px 5.93px rgba(255, 255, 255, 0.25)",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-[#F4ECE6]   mt-10 lg:mt-0 px-6 lg:px-20 py-20 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4  gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:mt-7 lg:mt-0 justify-center ">
            <img
              src="/logo2.png"
              alt="Skill Spot Australia"
              className="w-[112px] h-[105px] mb-4"
            />
            <p className="text-gray-600 text-center lg:text-left text-sm lg:text-base w-full lg:w-[300px]">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center justify-center  ">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Quick <span className="text-black">Link</span>
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm lg:text-base">
              <li>
                <a href="about">About us</a>
              </li>
              <li>
                <a href="rpl">RPL</a>
              </li>
              <li>
                <a href="blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col items-center  justify-center">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Quick <span className="text-black">Contact</span>
            </h3>
            <p className="flex items-center mb-4 text-gray-600 text-sm lg:text-base">
              <FaLocationDot className="text-secondary mr-3" /> Sydney,
              Australia
            </p>
            <p className="flex items-center mb-4 text-gray-600 text-sm lg:text-base">
              <IoCall className="text-secondary mr-3" /> +61 450 545 073
            </p>
            <p className="flex items-center mb-4 text-gray-600 text-sm lg:text-base">
              <IoMail className="text-secondary mr-3 w-5 h-5" />{" "}
              skillspotaus@gmail.com
            </p>
          </div>

          {/* Social Media and QR Code */}
          <div className="flex flex-col items-center justify-center ">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Let's <span className="text-black">Get Social</span>
            </h3>
            <div className="flex space-x-4 mb-4 text-2xl">
              <FaFacebookF className="text-blue-700" />
              <FaInstagram className="text-orange-700" />
              <FaLinkedin className="text-blue-700" />
              <FaTwitter className="text-blue-500" />
              <FaWhatsapp className="text-green-800" />
            </div>
            <img src="/QR.png" alt="QR" className="mb-4 w-[80px] h-[80px]" />
            <button className="w-[115px] h-[38px] bg-secondary hover:bg-primary rounded-lg text-white text-sm lg:text-base">
              Call Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
