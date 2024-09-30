import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBlog, FaCogs, FaSignOutAlt, FaBars } from 'react-icons/fa';

// Sidebar Component
const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`bg-[#F6ECED] w-64 p-5 mt-0 rounded-t-3xl transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-20 h-full`}
    >
      <div className="flex flex-col justify-center items-center mb-8">
        <img src="/cou.png" alt="Admin" className="w-16 h-16 rounded-full" />
        <div className="mt-4">
          <h2 className="font-bold text-lg">Client</h2>
        </div>
      </div>
      <ul className="space-y-6 text-primary font-overpass text-lg font-bold">
        <li>
          <Link to="/Client" className="flex items-center">
            <FaHome className="mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/reffer" className="flex items-center">
            <FaBlog className="mr-2" />
            Refferal
          </Link>
        </li>
        <li>
          <Link to="/personalInfo" className="flex items-center">
            <FaCogs className="mr-2" />
            Settings
          </Link>
        </li>
        <li>
          <Link to="/logout" className="flex items-center">
            <FaSignOutAlt className="mr-2" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

// Navbar Component
const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <div className="flex justify-between items-center bg-[#F6ECED] h-20 w-full rounded-t-3xl px-6 py-4">
      <button
        className="lg:hidden text-primary text-2xl focus:outline-none"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>
      <img src="logo2.png" alt="Logo" className="w-20 h-16 object-contain" />
      <h1 className="text-primary font-bold text-lg md:text-2xl">Skill Spot Australia</h1>
      <input
        type="text"
        placeholder="Search..."
        className="hidden md:block border p-2 text-primary border-gray-200 shadow-lg bg-white rounded"
      />
      <div className="flex items-center space-x-4">
        <span>Client</span>
        <img src="/cou.png" alt="Admin" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

// ClientLayout Component (with responsiveness)
export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 p-5 mt-20 lg:mt-0 ml-0 lg:ml-64 overflow-auto transition-all duration-300">
          {children}
        </div>
      </div>
    </div>
  );
};
