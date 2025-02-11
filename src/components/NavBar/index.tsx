import React, { useState } from 'react';
import LogoSrc from 'assets/logos/logo.svg';
import { Menu as MenuIcon } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const HamburgerMenu: React.FC = () => {
    return (
      <motion.div
        data-testid="menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 absolute right-0 flex flex-col z-50 rounded-b-lg gap-2 p-2 text-white"
      >
        {navTabs.map((tab, index) => (
          <a
            href={`#${tab.id}`}
            key={index}
            className="rounded-lg px-4 py-2 duration-300 ease-out"
            onClick={() => setMenuOpen(false)}
          >
            {tab.label}
          </a>
        ))}
      </motion.div>
    );
  };

  return (
    <div data-testid="navbar">
      <div className="flex flex-col sm:flex-row p-2 sm:p-0 px-8 sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 z-50 shadow-lg border-b border-gray-700">
        <div className=" text-[#eee] flex justify-between w-full items-center sm:p-4 sm:px-8">
          <img src={LogoSrc} alt="logo" className="h-12 sm:h-16" />
          {/* Hamburger Icon */}
          <button
            className="sm:hidden flex items-center text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </button>
          {!menuOpen && (
            <div
              className={`${
                menuOpen ? 'block' : 'hidden'
              } sm:flex flex-col sm:flex-row gap-4 sm:gap-6 text-lg`}
            >
              {navTabs.map((tab, index) => (
                <a
                  href={`#${tab.id}`}
                  key={index}
                  className="rounded-lg px-4 py-2 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:opacity-100 hover:bg-gray-700 hover:text-gray-300 hover:font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  {tab.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      {menuOpen && <HamburgerMenu />}
    </div>
  );
};

export default NavBar;
