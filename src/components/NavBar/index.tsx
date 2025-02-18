import React, { useState, useRef } from 'react';
import LogoSrc from 'assets/icons/favicon.svg';
import { Menu as MenuIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useClickAway } from 'react-use';

interface NavTab {
  label: string;
  id: string;
}

const navTabs: NavTab[] = [
  { label: 'About Me', id: 'about' },
  { label: 'Experiences', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useClickAway(menuRef, (event) => {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
      return;
    }
    setMenuOpen(false);
  });

  return (
    <nav
      data-testid="navbar"
      className="bg-gradient-to-r from-gray-900 to-gray-800 z-50 shadow-lg border-b border-gray-700 sticky top-0"
    >
      <div className="flex justify-between items-center px-8 sm:px-8 py-2 sm:py-4">
        <a href="#home">
          <img src={LogoSrc} alt="logo" className="h-12 md:h-16" />
        </a>
        <div className="hidden xl:flex space-x-6">
          {navTabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="text-white px-4 py-2 rounded-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-gray-700 hover:text-gray-300"
            >
              {tab.label}
            </a>
          ))}
        </div>
        <button
          ref={buttonRef}
          className="xl:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <MenuIcon />
        </button>
      </div>
      {menuOpen && (
        <motion.div
          ref={menuRef}
          data-testid="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.96 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 absolute right-0 flex flex-col z-50 rounded-b-lg gap-2 p-2 text-white"
        >
          {navTabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              {tab.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
