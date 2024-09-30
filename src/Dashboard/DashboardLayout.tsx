import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCogs, FaSignOutAlt, FaBloggerB } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="bg-[#b6aeaf] w-64  mt-0 p-5 rounded-t-3xl">
      <div className="flex flex-col justify-center items-center mb-8">
        <img src="/cou.png" alt="Admin" className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <h2 className="font-bold text-lg">Admin</h2>
        </div>
      </div>
      <ul className="space-y-6 text-primary font-overpass text-lg font-bold">
        <li>
          <Link to="/dashboard" className="flex items-center">
            <FaHome className="mr-2" />Dashboard
          </Link>
        </li>
        <li>
          <Link to="/blogpost" className="flex items-center">
            <FaBloggerB className="mr-2" />Blog
          </Link>
        </li>
        <li>
          <Link to="/blogpost" className="flex items-center">
            <TiMessages className="mr-2" />Testimonial
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center">
            <FaCogs className="mr-2" />Settings
          </Link>
        </li>
        <li>
          <Link to="/logout" className="flex items-center">
            <FaSignOutAlt className="mr-2" />Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <div className="flex justify-between items-center  bg-[#b6aeaf] h-20 w-full rounded-t-3xl px-6 py-4">
       <img
              src="logo2.png"
              alt="Logo"
              className=" w-20  h-16  object-contain"
            />
      <h1 className="text-primary font-bold text-2xl">Admin Panel</h1>
      <input type="text" placeholder="Search..." className="border p-2 text-primary border-gray-300 shadow-lg bg-white rounded-full" />
      <div className="flex items-center space-x-4">
        <span>Admin</span>
        <img src="/cou.png" alt="Admin" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

// Dashboard Layout Component
export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col ">
      {/* Navbar is placed on top */}
      <Navbar />
      
      {/* Sidebar and content are below the navbar */}
      <div className="flex mt-3 ml-2 flex-1">
        <Sidebar />
        <div className="flex-1 p-5 overflow-auto">{children}</div>
      </div>
    </div>
  );
};
