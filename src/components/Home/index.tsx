import React, { JSX } from 'react';
import NavBar from 'components/NavBar';
import Scrambler from 'components/Scrambler';
import ProfilePhoto from 'components/ProfilePhoto';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Skills from 'components/Skills';
import AboutMe from 'components/AboutMe';
import { useGlobalContext } from 'contexts/GlobalContext';
import SoftSkills from 'components/Skills/softSkills';

function Home(): JSX.Element {
  const { isMobile } = useGlobalContext();

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md">
        <NavBar />
      </div>

      <div className="bg-gray-900 text-white h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth ">
        <section
          id="home"
          className="h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-16 bg-gradient-to-b from-gray-900 to-gray-800 pt-[65px]"
        >
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-44">
            <div className="flex flex-col gap-4 sm:gap-8 text-center sm:text-left items-center sm:items-start">
              <h1 className="text-2xl sm:text-5xl">
                Hello World! 👋🏻 <br className="sm:hidden" /> My name is Basu.
              </h1>
              <div className="text-lg sm:text-3xl h-[56px] sm:h-auto w-[60%]">
                <Typewriter
                  options={{
                    strings: [
                      'Hi! Welcome to my portfolio!',
                      'Salut! Bienvenue sur mon portfolio!',
                      'Ciao! Benvenuto nel mio portfolio!',
                      'Namaste! Mere portfolio main aapka swaagat hai!',
                      'Hi! Willkommen in meinem Portfolio!',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              {isMobile && (
                <div className="mt-2 sm:mt-6">
                  <ProfilePhoto />
                </div>
              )}
              <p className="pt-2 px-8 sm:pt-0 sm:px-0 text-sm sm:text-xl text-justify">
                A Senior Software Developer with a knack for building high-performance web
                applications using JavaScript, React, and TypeScript. I turn complex challenges into
                elegant, scalable solutions that elevate user experiences. Passionate about crafting
                seamless, intuitive UIs with industry-best practices and modern frameworks. Always
                pushing the boundaries of web performance, accessibility, and maintainability.
              </p>
            </div>
            {!isMobile && (
              <div className="flex-shrink-0">
                <ProfilePhoto />
              </div>
            )}
          </div>
        </section>

        <section
          id="skills"
          className="h-[100dvh] snap-start flex flex-col justify-center pt-[65px] sm:pt-0 items-center px-4 bg-gradient-to-b from-gray-800 to-gray-700"
        >
          <div className="w-full max-w-4xl sm:max-w-full sm:px-16">
            <motion.div
              transition={{
                type: 'tween',
                duration: 0.3,
                ease: 'easeInOut',
                bounce: 0,
              }}
              className="flex justify-center sm:justify-start w-full"
            >
              <h2 className="text-2xl sm:text-4xl text-white">Skills</h2>
            </motion.div>
            <Skills />
          </div>
        </section>
        {isMobile && (
          <section
            id="softSkills"
            className="h-[100dvh] pt-[65px] sm:pt-0 snap-start flex flex-col justify-center items-center px-4 bg-gradient-to-b from-gray-800 to-gray-700"
          >
            <div className="w-full max-w-4xl sm:max-w-full sm:px-16">
              <div className="flex justify-center sm:justify-start w-full pb-4 sm:pb-8">
                <h2 className="text-2xl sm:text-4xl text-white">Other Skills</h2>
              </div>
              <SoftSkills />
            </div>
          </section>
        )}

        <section
          id="about"
          className="h-[100dvh] pt-[65px] sm:pt-0 snap-start flex items-center justify-center px-4 bg-gradient-to-b from-gray-700 to-gray-600"
        >
          <AboutMe />
        </section>
        <section className=" flex items-center justify-center">
          <Scrambler />
        </section>

        <footer className="bg-gray-800 p-6 text-center text-white snap-start">
          <p className="text-sm">© {new Date().getFullYear()} Basu Ojha. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
