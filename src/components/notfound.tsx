import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <motion.div
        className="max-w-lg text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.8, ease: "easeInOut" }}
      >
        {/* <img
          src="/404.jpg"
          alt="404 Not Found"
          className="w-full h-auto mb-8"
        /> */}
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-secondary mb-2">
          Sorry, we couldn't find that page.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 shadow-md mb-6 inline-block"
        >
          Return to Homepage
        </Link>
        
        <div className="mt-8">
          <p className="text-gray-500 mb-4">Or try searching for what you need:</p>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
