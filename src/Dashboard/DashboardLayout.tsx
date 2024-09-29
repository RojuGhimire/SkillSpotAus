import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBlog, FaCogs, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
      <div className="w-1/4 bg-gray-100 h-screen p-5">
        <div className="flex items-center mb-8">
          <img src="/path/to/profile.jpg" alt="Admin" className="w-16 h-16 rounded-full" />
          <div className="ml-4">
            <h2 className="font-bold text-lg">Admin</h2>
          </div>
        </div>
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="flex items-center">
              <FaHome className="mr-2" />Dashboard
            </Link>
          </li>
          <li>
            <Link to="/blogpost" className="flex items-center">
              <FaBlog className="mr-2" />Blog
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
  

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 bg-gray-50">
      <input type="text" placeholder="Search..." className="border p-2 rounded" />
      <div className="flex items-center space-x-4">
        <span>Admin</span>
        <img src="/path/to/profile.jpg" alt="Admin" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};
