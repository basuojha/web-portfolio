import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "context/GlobalContext";
import skills from "constants/skills";

interface SkillProps {
  isInView: boolean;
}

const SoftSkills: React.FC<SkillProps> = ({ isInView }) => {
  const { isMobile } = useGlobalContext();
  const [showSoftSkills, setShowSoftSkills] = useState<boolean>(
    isMobile ? true : false
  );
  const { softSkills } = skills;

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setShowSoftSkills(true), 500);
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

  return (
    <motion.div
      className={`flex flex-wrap gap-4  sm:px-0 w-full md:w-1/2 justify-center md:justify-start ${
        isMobile ? (showSoftSkills ? "visible" : "hidden") : ""
      }`}
      layout
      transition={{
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
        bounce: 0,
      }}
      variants={containerVariants}
      initial="hidden"
      animate={showSoftSkills ? "show" : "hidden"}
    >
      {softSkills.map((skill, index) => (
        <motion.button
          key={skill}
          variants={itemVariants}
          layout
          transition={{
            type: "tween",
            duration: 0.3,
            ease: "easeInOut",
            bounce: 0,
          }}
          className="h-18 rounded-lg px-4 sm:px-4 py-4 w-[40%] sm:w-48 transition-all duration-300 ease-out text-sm
        bg-slate-600 text-gray-300 sm:hover:shadow-2xl sm:hover:brightness-125 mt-2 sm:hover:font-semibold"
        >
          {skill}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default SoftSkills;
