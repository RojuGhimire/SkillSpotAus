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
    <div className=" h-[510px]   font-overpass   ">
      <div>
        <div className="relative  ">
          <div className="relative top-[89px] bg-primary text-white p-6 rounded-3xl h-[155px] lg:w-[1225px] items-center justify-center font-overpass shadow-2xl mx-auto max-w-7xl">
            <div className="absolute flex flex-col lg:flex-row justify-between lg:px-10 items-center space-y-4 lg:space-y-0">
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
                  className="p-3 rounded-l-full text-black w-[390px] max-w-xs shadow-custom-light"
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
        <div className="bg-[#F4ECE6] h-[450px] items-center   grid grid-cols-1 md:grid-cols-1  lg:px-20 lg:grid-cols-4  p-8">

          {/* Logo and Description */}
          <div className="flex flex-col   items-center  lg:w-[390px]  gap-4">
            <img
              src="/logo2.png"
              alt="Skill Spot Australia"
              className="w-[112px] h-[105px]  "
            />
            <p className="text-[#6C757D] text-start lg:text-base w-[380px]">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col  items-center">
            <h3 className="text-2xl font-bold  font-overpass text-secondary mb-4">
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
          <div className="flex  items-start lg:ml-20   flex-col">
            <h3 className="text-2xl font-bold font-overpass text-secondary mb-4">
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
          <div className="flex flex-col  items-center">
            <h3 className="text-2xl font-bold font-overpass text-secondary mb-4">
              Let's <span className="text-black">Get Social</span>
            </h3>
            <div className="flex space-x-4 mb-4 text-2xl">
              <FaFacebookF className="text-blue-700" />
              <FaInstagram className="text-orange-700" />
              <FaLinkedin className="text-blue-700" />
              <FaTwitter className="text-blue-500" />
              <FaWhatsapp className="text-green-800" />
            </div>
            <img src="/QR.png" alt="QR" className="mb-4 " />
            <button className="w-[115px] h-[38px] bg-secondary hover:bg-primary rounded-lg text-white font-overpass text-sm lg:text-base ">
              Call Us Today
            </button>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Footer;
