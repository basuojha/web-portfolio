import React from 'react';
import { motion } from 'framer-motion';
import skills from 'constants/skills';

const SoftSkills: React.FC = () => {
  const { softSkills } = skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={`flex flex-wrap gap-4  sm:px-0 w-full md:w-1/2 justify-center md:justify-start`}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {softSkills.map((skill) => (
        <motion.button
          key={skill}
          variants={itemVariants}
          className="flex justify-center items-center h-18 rounded-lg px-4 sm:px-4 py-4 w-[40%] sm:w-48 text-sm
        bg-slate-600 text-white sm:hover:shadow-2xl sm:hover:brightness-125 sm:hover:font-semibold"
        >
          {skill}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default SoftSkills;
