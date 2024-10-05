import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaLightbulb,
  FaEnvelope,
  FaRocket,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Icon */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <FaRocket className="text-white h-6 w-6" />
            <Link to="/" className="text-2xl font-bold text-amber-500">
              JEFF
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="hidden md:flex md:space-x-8 items-center">
            <ul className="flex space-x-8 items-center">
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-white hover:text-amber-500 transition duration-300"
                >
                  <FaHome className="h-5 w-5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="flex items-center space-x-2 text-white hover:text-amber-500 transition duration-300"
                >
                  <FaBriefcase className="h-5 w-5" />
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="flex items-center space-x-2 text-white hover:text-amber-500 transition duration-300"
                >
                  <FaLightbulb className="h-5 w-5" />
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center space-x-2 text-white hover:text-amber-500 transition duration-300"
                >
                  <FaEnvelope className="h-5 w-5" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black  z-50 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-3xl focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col items-center mt-16 space-y-6">
          <li className="w-full border-t border-white">
            <Link
              to="/"
              className="flex items-center p-4 text-white text-xl font-semibold hover:bg-amber-500 hover:text-black transition duration-300"
              onClick={toggleMobileMenu}
            >
              <FaHome className="mr-3" />
              Home
            </Link>
          </li>
          <li className="w-full border-t border-white">
            <Link
              to="/projects"
              className="flex items-center p-4 text-white text-xl font-semibold hover:bg-amber-500 hover:text-black transition duration-300"
              onClick={toggleMobileMenu}
            >
              <FaBriefcase className="mr-3" />
              Projects
            </Link>
          </li>
          <li className="w-full border-t border-white">
            <Link
              to="/skills"
              className="flex items-center p-4 text-white text-xl font-semibold hover:bg-amber-500 hover:text-black transition duration-300"
              onClick={toggleMobileMenu}
            >
              <FaLightbulb className="mr-3" />
              Skills
            </Link>
          </li>
          <li className="w-full border-t border-white">
            <Link
              to="/contact"
              className="flex items-center p-4 text-white text-xl font-semibold hover:bg-amber-500 hover:text-black transition duration-300"
              onClick={toggleMobileMenu}
            >
              <FaEnvelope className="mr-3" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
