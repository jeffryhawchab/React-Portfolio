import React from 'react';
import { FaLaptopCode, FaTools, FaGlobe, FaClock, FaKeyboard, FaTasks } from 'react-icons/fa';
import '../index.css'; // Import the CSS file

const projects = [
  { title: 'UrgentAsk App', description: 'Urgentask is an app designed to connect pro service providers with people 24/7 built with Firebase.', link: 'https://github.com/jeffryhawchab/UrgentAsk', icon: FaTools },
  { title: 'UrgentAsk website', description: 'Developed and designed the UrgentAsk website for app identity and to make more people aware of the app, built with React.js and Tailwind CSS.', link: 'https://github.com/jeffryhawchab/urgentask_web', icon: FaGlobe },
  { title: 'TaskDash App', description: 'TaskDash is the app used by the service providers in UrgentAsk, built with Flutter and Firebase.', link: 'https://github.com/jeffryhawchab/Dashboard', icon: FaTasks },
  { title: 'Hospital system management', description: 'A hospital system management built with the Laravel framework and Vue.js.', link: 'https://github.com/XpertBotTeam/hospital-system-mangment', icon: FaLaptopCode },
  { title: 'TimeFlow', description: 'TimeFlow is a user-friendly timer web application built with React, Tailwind CSS, and JavaScript.', link: 'https://timeflowlb.netlify.app/', icon: FaClock },
  { title: 'committers-fetch', description: 'The GitHub Top Contributors by Location project is a tool designed to identify and rank the most active GitHub contributors.', link: 'https://github.com/jeffryhawchab/committers-fetch', icon: FaKeyboard },
];

const ProjectsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">My Projects 🖥️</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="group perspective">
                <div className="relative w-full h-64 bg-transparent rounded-lg shadow-lg transform-style-3d card">
                  {/* Front Side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden p-4 bg-white/10 rounded-lg">
                    <Icon className="text-4xl sm:text-5xl text-white mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold text-white text-center">{project.title}</h3>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 bg-white/10 p-4 sm:p-6 rounded-lg rotate-y-180 backface-hidden flex flex-col items-center justify-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">{project.title}</h3>
                    <p className="text-sm sm:text-base text-white mb-4 text-center">{project.description}</p>
                    <a
                      href={project.link}
                      className="px-3 py-2 sm:px-4 sm:py-2 bg-stone-950 text-white font-bold rounded hover:bg-stone-700 transition"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Contribution Graph */}
        <div className="pt-12 flex justify-center">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">My GitHub Contributions</h2>
            <img 
              src="https://ghchart.rshah.org/008000/jeffryhawchab" 
              alt="jeffryhawchab's GitHub chart" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
