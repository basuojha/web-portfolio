import React from 'react';
import { motion } from 'framer-motion';
import { useGlobalContext } from 'contexts/GlobalContext';
import CoreSkills from './coreSkills';
import SoftSkills from './softSkills';

const Skills: React.FC = () => {
  const { isMobile } = useGlobalContext();

  return (
    <motion.div
      className="flex flex-col md:flex-row w-full px-4 md:px-8 lg:px-0 gap-8 pt-4 sm:pt-8"
      layout
      transition={{
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
        bounce: 0,
      }}
    >
      <CoreSkills />
      {!isMobile && <SoftSkills />}
    </motion.div>
  );
};

export default Skills;
