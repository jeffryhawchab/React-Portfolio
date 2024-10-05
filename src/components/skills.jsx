import React from 'react';
import { SiVisualstudiocode, SiPostman, SiAndroidstudio, SiKalilinux, SiAdobeillustrator, SiTensorflow, SiAnsible } from 'react-icons/si'; // Importing icons from React Icons

const skills = [
  { name: 'HTML5', level: 100 },
  { name: 'TailwindCss', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 90 },
  { name: 'Mern stack', level: 95 },
  { name: 'Python', level: 85 },
  { name: 'Git', level: 90 },
  { name: 'Docker', level: 80 },
  { name: 'Flutter', level: 90 },
  { name: 'Dart', level: 95 },
  { name: 'C', level: 90 },
  { name: 'Postman', level: 80 },
];

const tools = [
  { name: 'Vscode', icon: <SiVisualstudiocode size={30} /> },
  { name: 'Ansible', icon: <SiAnsible size={30} /> },
  { name: 'Android Studio', icon: <SiAndroidstudio size={30} /> },
  { name: 'Kali Linux', icon: <SiKalilinux size={30} /> },
  { name: 'Adobe Illustrator', icon: <SiAdobeillustrator size={30} /> },
  { name: 'TensorFlow', icon: <SiTensorflow size={30} /> },
];

const SkillsSection = () => {
  return (
    <section className="pt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">My Skills & Knowledge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-sm sm:text-base md:text-lg font-semibold text-white">{skill.name}</span>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-white">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 h-3 rounded-full">
                <div
                  className="bg-amber-500 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">Software & Tools I Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center justify-center text-white">
              <span className="mr-2 text-amber-500">{tool.icon}</span>
              <span className="text-sm sm:text-base md:text-lg">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
