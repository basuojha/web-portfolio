import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const SectionWrapper = ({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isHome = id === 'home';
  const isInView = isHome ? true : useInView(ref, { once: true, margin: '-100px' });
  console.log('isInView', isInView, id, 'id');
  return (
    <motion.section
      id={id}
      ref={ref}
      className={`h-[100dvh] pt-[65px] sm:pt-[96px] snap-start flex items-center justify-center px-4 ${className} sm:px-24`}
      initial={!isHome && { opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {isInView && children}
    </motion.section>
  );
};

export default SectionWrapper;
