import React from 'react';
import { motion } from 'framer-motion';
import experiences from 'constants/experience';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const { experienceList } = experiences;
  return (
    <div className="px-4 sm:px-0 w-full">
      <div className="flex items-center justify-center sm:items-start sm:justify-start">
        <h2 className="text-2xl md:text-4xl text-center mb-4 sm:mb-8">Experience</h2>
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-6 overflow-x-auto scrollbar-hide"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {experienceList.map((exp, index) => (
            <motion.div
              key={index}
              className={`min-w-full md:min-w-[45%] lg:min-w-[30%] bg-gray-900 rounded-2xl p-6 shadow-xl
            `}
            >
              <div className="flex gap-4 justify-between">
                <h3 className="text-base w-[80%] sm:text-xl font-semibold">{exp.title}</h3>
                <Briefcase className="h-6 w-6" />
              </div>
              <p className="text-gray-400 mt-1">{exp.company}</p>
              <p className="text-sm text-gray-500 mt-1">{exp.duration}</p>
              <p className="text-sm mt-4 text-gray-400">{exp.description}</p>
              <p className="text-sm text-white mt-4 text-justify hyphens-auto">
                {exp.responsibilities}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* <div className="relative overflow-hidden mt-2 w-full">
        <motion.div
          className="flex space-x-6 overflow-x-auto scrollbar-hide"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              className={`min-w-full md:min-w-[45%] lg:min-w-[30%] bg-gray-900 rounded-2xl p-6 shadow-xl
            `}
            >
              <div className="flex gap-4 justify-between">
                <h3 className="text-base sm:text-xl font-semibold w-[80%]">{edu.title}</h3>
                <GraduationCap className="h-6 w-6" />
              </div>
              <p className="text-gray-400 mt-1">{edu.university}</p>
              <p className="text-sm text-gray-500 mt-1">{edu.duration}</p>
              <p className="text-sm mt-4">{edu.gpa}</p>
            </motion.div>
          ))}
        </motion.div>
      </div> */}
    </div>
  );
};

export default Experience;
