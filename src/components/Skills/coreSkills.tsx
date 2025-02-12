import React from 'react';
import { motion } from 'framer-motion';
import skills from 'constants/skills';

const CoreSkills: React.FC = () => {
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
              type: 'tween',
              duration: 0.3,
              ease: 'easeInOut',
              bounce: 0,
            }}
          >
            <button
              className={`rounded-lg 
                px-2 sm:px-3 
                py-2 
                w-48 
                transition-all duration-300 ease-out 
                text-sm md:text-sm lg:text-base xl:text-base 
                md:h-9 lg:h-9 xl:h-10 
                mt-0 md:mt-1 lg:mt-1 xl:mt-2 
                md:hover:shadow-md lg:hover:shadow-xl xl:hover:shadow-2xl 
                md:hover:brightness-110 lg:hover:brightness-120 xl:hover:brightness-125 
                md:hover:font-semibold lg:hover:font-semibold xl:hover:font-semibold 
                bg-slate-600 text-white font-semibold`}
            >
              {skill.name}
            </button>
            <motion.div
              key={`icons-container-${index}`}
              className="flex flex-wrap justify-center md:justify-start gap-4 
                lg:ml-6 lg:mt-3 
                xl:ml-8 xl:mt-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {skill.items.map((lang, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="transform 
                    hover:-translate-y-1 
                    md:hover:-translate-y-2 
                    lg:hover:-translate-y-1.5 
                    xl:hover:-translate-y-1 
                    ease-in-out"
                >
                  <img
                    src={skillIcons[lang].src}
                    alt={skillIcons[lang].name}
                    title={skillIcons[lang].name}
                    className="w-8 h-8 
                      md:w-9 md:h-9 
                      lg:w-10 lg:h-10 
                      xl:w-11 xl:h-11"
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
