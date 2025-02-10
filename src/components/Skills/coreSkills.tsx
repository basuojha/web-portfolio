import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skills from "constants/skills";

interface SkillsProps {
  isInView: boolean;
}

const CoreSkills: React.FC<SkillsProps> = ({ isInView }) => {
  const { allSkillGroups, skillIcons } = skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col gap-6 md:w-1/2">
      {allSkillGroups.map((skill, index) => {
        return (
          <motion.div
            key={index}
            className="relative flex flex-col md:flex-row items-center min-h-12 gap-6"
            layout
            transition={{
              type: "tween",
              duration: 0.3,
              ease: "easeInOut",
              bounce: 0,
            }}
          >
            <button
              className={`rounded-lg px-2 sm:px-4 py-2 w-48 transition-all duration-300 ease-out text-sm sm:text-base
               sm:hover:shadow-2xl sm:hover:brightness-125 sm:h-10 mt-0 sm:mt-2 sm:hover:font-semibold
                bg-slate-600 text-white font-semibold`}
            >
              {skill.name}
            </button>
            <motion.div
              key={`icons-container-${index}`} // unique key per group
              className="flex flex-wrap justify-center md:justify-start gap-4 sm:ml-8 sm:mt-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {skill.items.map((lang, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="transform hover:-translate-y-1 ease-in-out"
                >
                  <img
                    src={skillIcons[lang].src}
                    alt={skillIcons[lang].name}
                    title={skillIcons[lang].name}
                    className="w-8 h-8 sm:w-11 sm:h-11"
                    loading="eager"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CoreSkills;
