import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import projects from 'constants/projects';

const Projects: React.FC = () => {
  return (
    <div className="px-4 sm:px-0 w-full">
      <div className="flex items-center justify-center sm:items-start sm:justify-start">
        <h2 className="text-2xl md:text-4xl text-center mb-4 sm:mb-8">Projects</h2>
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-6 overflow-x-auto scrollbar-hide"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-full md:min-w-[45%] lg:min-w-[30%] bg-gray-900 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex gap-4 justify-between">
                <h3 className="text-base sm:text-xl font-semibold w-[80%]">{project.title}</h3>
                <Code className="h-6 w-6" />
              </div>
              <p className="text-gray-400 mt-1">{project.type}</p>
              <p className="text-sm text-gray-500 mt-1">{project.role}</p>
              <p className="text-sm mt-4 text-gray-400">{project.techStack}</p>
              <p className="text-sm text-white mt-4 text-justify hyphens-auto">{project.impact}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
