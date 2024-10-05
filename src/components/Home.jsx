import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/me-2.jpeg'; // Replace with the actual path
import resume from '../assets/resume.pdf'; // Replace with the actual path

const HomeSection = () => {
  return (
    <div className="text-white min-h-screen flex items-center">
      {/* Use `flex-col` for default mobile and `md:flex-row` for larger screens */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative">
        {/* Image section: On top for mobile, on the right for larger screens */}
        <div className="w-full md:w-1/2 order-1 md:order-2 mb-6 md:mb-0 z-10">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-60 h-60 object-cover mx-auto md:mx-0 md:ml-8 shadow-md shadow-white"
          />
        </div>

        {/* Text content section: Underneath image for mobile, on the left for larger screens */}
        <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left z-10">
          <h1 className="text-4xl font-bold text-white shadow-white md:text-5xl">Hi, I'm JEFF</h1>
          <p className="text-lg mt-3 font-bold text-white md:text-xl">
            A passionate Software and Machine Learning Engineer, and a content creator.
            With over 10k followers on Instagram, I enjoy simplifying technical concepts.
          </p>
          <div className="flex items-center justify-center md:justify-start mt-4 flex-wrap md:flex-nowrap">
            <a
              href="https://github.com/jeffryhawchab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-stone-950 mx-2 shadow-white mb-2 md:mb-0"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.instagram.com/jeffreyhawchab?igsh=ZDlhdHgwNTdoa3R1"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 shadow-white text-black hover:text-stone-950 mb-2 md:mb-0"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/jeffrey-hawchab-885833209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-stone-950 mx-2 shadow-white mb-2 md:mb-0"
            >
              <FaLinkedin size={30} />
            </a>
            {/* Download Resume Button */}
            <a
              href={resume} // Use the imported resume PDF
              download="JeffreyHawchab CV.pdf"
              className="bg-stone-950 text-white font-bold py-2 px-4 rounded ml-4 shadow-md shadow-white hover:bg-stone-900 transition-colors duration-200 mb-2 md:mb-0"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
