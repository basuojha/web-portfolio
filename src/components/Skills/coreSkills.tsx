import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import skills from "constants/skills";
import { useGlobalContext } from "contexts/GlobalContext";

interface SkillsProps {
  isInView: boolean;
}

const CoreSkills: React.FC<SkillsProps> = ({ isInView }) => {
  const { isMobile } = useGlobalContext();
  const [expandedSkills, setExpandedSkills] = useState<number[]>([]);
  const { allSkillGroups, skillIcons } = skills;

  useEffect(() => {
    if (isInView) {
      setExpandedSkills(allSkillGroups.map((_, index) => index));
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const toggleSkill = (index: number) => {
    setExpandedSkills((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col gap-6  md:w-1/2 ">
      {allSkillGroups.map((skill, index) => {
        const isExpanded = expandedSkills.includes(index);

        return (
          <motion.div
            layout
            transition={{
              type: "tween",
              duration: 0.3,
              ease: "easeInOut",
              bounce: 0,
            }}
            key={index}
            className="relative flex flex-col md:flex-row items-center min-h-12 gap-6"
          >
            <motion.button
              layout
              transition={{
                type: "tween",
                duration: 0.3,
                ease: "easeInOut",
                bounce: 0,
              }}
              onClick={() => toggleSkill(index)}
              className={`rounded-lg px-2 sm:px-4 py-2 sm:py-2 w-48 transition-all duration-300 ease-out text-sm sm:text-base
            bg-gray-700 text-gray-300 sm:hover:shadow-2xl sm:hover:brightness-125 sm:h-10 mt-0 sm:mt-2 sm:hover:font-semibold
            ${isExpanded ? "bg-slate-600 text-white font-semibold" : ""}`}
            >
              {skill.name}
            </motion.button>
            <motion.div
              className={`flex flex-wrap justify-center md:justify-start gap-4 transition-opacity duration-300 sm:ml-8 
            ${
              isExpanded
                ? `${isMobile ? "visible" : ""}sm:opacity-100`
                : `${
                    isMobile ? "hidden" : ""
                  } sm:opacity-0 sm:pointer-events-none`
            } 
            sm:mt-4`}
              variants={containerVariants}
              initial="hidden"
              animate={isExpanded ? "show" : "hidden"}
            >
              {skill.items.map((lang, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="transform hover:-translate-y-1 ease-in-out transition-all duration-300"
                >
                  <img
                    src={skillIcons[lang].src}
                    alt={skillIcons[lang].name}
                    title={skillIcons[lang].name}
                    className="w-8 h-8 sm:h-11 sm:w-11 hover:brightness-125 transition-all duration-300 transform sm:hover:-translate-y-1 ease-in-out"
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
