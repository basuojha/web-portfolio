import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );
    observer.observe(contactSection);
    return () => observer.disconnect();
  });

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-7 flex flex-col items-center z-50 ease-in-out transform pointer-events-none">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <ChevronDown size={24} className="text-gray-400" />
      </motion.div>
    </div>
  );
}
