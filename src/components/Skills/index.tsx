import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "contexts/GlobalContext";
import CoreSkills from "./coreSkills";
import SoftSkills from "./softSkills";

interface SkillsProps {
  isInView: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isInView }) => {
  const { isMobile } = useGlobalContext();

  return (
    <motion.div
      className="flex flex-col md:flex-row w-full px-4 md:px-8 lg:px-0 gap-8 pt-6 sm:pt-8"
      layout
      transition={{
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
        bounce: 0,
      }}
    >
      <CoreSkills isInView={isInView} />
      {!isMobile && <SoftSkills isInView={isInView} />}
    </motion.div>
  );
};

export default Skills;
