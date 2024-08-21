import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVLINKS } from "@/constants";
import { useActiveLinkContext } from "@/context/active-link-context";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

export default function Header() {
  const { setActiveLink, setTimeOfLastClick, activeLink } =
    useActiveLinkContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <header className="z-50 fixed top-0 left-0 w-full">
      {/* Top Bar */}
      <div className="hidden bg-primary text-white md:flex flex-wrap justify-between items-center lg:px-20 px-4 py-2 text-sm">
        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 w-full font-bold ">
            <IoCallSharp className="text-secondary h-[24px] w-[24px]" />
            <span>+61 450 545 073</span>
            <span>|</span>
            <IoMdMail className="text-secondary h-[24px] w-[24px]" />
            <span>Info@skillspotaustralia.edu.au</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <FaFacebookF className="hover:text-gray-300 cursor-pointer transition duration-300 h-[20px]" />
          <FaWhatsapp className="hover:text-gray-300 cursor-pointer transition duration-300 h-[20px] w-[24px]" />
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer transition duration-300 h-[20px] w-[24px]" />
          <FaInstagram className="hover:text-gray-300 cursor-pointer transition duration-300 h-[20px] w-[24px] " />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg lg:px-20 px-4">
        <div className="flex justify-between  items-center h-[75px]">
          {/* Logo */}
          <a
            href="/"
            onClick={() => {
              setActiveLink("Home");
              setTimeOfLastClick(Date.now());
            }}
          >
            <img
              src="logo.png"
              alt="Logo"
              className="w-[100px] h-[73px] object-contain"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden  flex-1  lg:flex justify-end  gap-20 ">
            <ul className="flex gap-28 items-center">
              {NAVLINKS.map((link) => (
                <motion.li
                  className={`font-bold cursor-pointer hover:text-primary ${
                    activeLink === link.name ? "text-primary" : "text-text"
                  }`}
                  key={link.path}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <a
                    href={link.path}
                    className="font-overpass font-bold uppercase text-[15px] leading-[15px]"
                    onClick={() => {
                      setActiveLink(link.name);
                      setTimeOfLastClick(Date.now());
                      setMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
         

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>

          {/* Search Icon */}
          <div className="hidden lg:flex items-center justify-end ">
            <FaSearch className="text-white bg-primary h-8 w-8 p-2 rounded-full cursor-pointer hover:bg-gray-200 hover:text-primary transition duration-300 shadow-md" />
          </div>
        </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden bg-gray-200 overflow-hidden"
            >
              <ul className="flex flex-col gap-4 items-center py-4">
                {NAVLINKS.map((link) => (
                  <motion.li
                    className="text-zinc-700 font-bold cursor-pointer hover:text-primary"
                    key={link.path}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={linkVariants}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <a
                      href={link.path}
                      onClick={() => {
                        setActiveLink(link.name);
                        setTimeOfLastClick(Date.now());
                        setMenuOpen(false); // Close menu on link click
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
