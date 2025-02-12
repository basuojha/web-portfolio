import React from 'react';
import NavBar from 'components/NavBar';
import Scrambler from 'components/Scrambler';
import ProfilePhoto from 'components/ProfilePhoto';
import Typewriter from 'typewriter-effect';
import Skills from 'components/Skills';
import AboutMe from 'components/AboutMe';
import { useGlobalContext } from 'contexts/GlobalContext';
import SoftSkills from 'components/Skills/softSkills';
import Experience from 'components/Experience';
import Contact from 'components/Contact';
import Projects from 'components/Projects';
import SectionWrapper from 'components/SectionWrapper';
import typewriterStrings from 'constants/typewriter';

const Home: React.FC = () => {
  const { isMobile } = useGlobalContext();

  return (
    <div className="relative">
      {/* Navbar remains fixed */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md">
        <NavBar />
      </div>
      <div className="bg-gray-900 text-white h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Home Section (unchanged for mobile & laptop) */}
        <SectionWrapper id="home" className="bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="w-full flex flex-col sm:flex-row items-center justify-center lg:items-start lg:justify-start gap-8 sm:gap-16 lg:gap-44 px-4">
            <div className="flex flex-col gap-4 sm:gap-4 lg:gap-8 text-center md:text-left items-center md:items-start">
              <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl">
                Hello World! 👋🏻 <br className="sm:hidden" /> My name is Basu.
              </h1>
              <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl h-[56px] sm:h-auto w-[60%] sm:w-full">
                <Typewriter
                  options={{
                    strings: typewriterStrings,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              {isMobile && (
                <div className="mt-2 xl:mt-6">
                  <ProfilePhoto />
                </div>
              )}
              <p className="pt-2 sm:pt-0 sm:px-0 text-sm sm:text-base md:text-lg lg:text-xl text-justify">
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
        </SectionWrapper>

        {/* Skills Section with added responsive padding and typography */}
        <SectionWrapper
          id="skills"
          className="bg-gradient-to-b from-gray-800 to-gray-700 flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8"
        >
          <div className="flex items-center justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start w-full">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-white">
              Skills
            </h2>
          </div>
          <Skills />
        </SectionWrapper>

        {/* Soft Skills Section (visible on mobile) with extra responsive classes */}
        {isMobile && (
          <SectionWrapper
            id="softSkills"
            className="bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8"
          >
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-white pb-4">
              Other Skills
            </h2>
            <SoftSkills />
          </SectionWrapper>
        )}

        {/* About Me Section with responsive padding */}
        <SectionWrapper
          id="about"
          className="bg-gradient-to-b from-gray-800 to-gray-700 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8"
        >
          <AboutMe />
        </SectionWrapper>

        {/* Experience Section with responsive padding */}
        <SectionWrapper
          id="experience"
          className="bg-gradient-to-b from-gray-900 to-gray-800 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8"
        >
          <Experience />
        </SectionWrapper>

        {/* Projects Section with responsive padding */}
        <SectionWrapper
          id="projects"
          className="bg-gradient-to-b from-gray-800 to-gray-700 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8"
        >
          <Projects />
        </SectionWrapper>

        {/* Contact Section with responsive padding */}
        <SectionWrapper
          id="contact"
          className="bg-gradient-to-b from-gray-700 to-gray-600 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8"
        >
          <Contact />
        </SectionWrapper>

        {/* Scrambler Section with added vertical padding */}
        <section className="flex items-center justify-center py-8">
          <Scrambler />
        </section>

        {/* Footer remains mostly unchanged */}
        <footer className="bg-gray-800 p-6 text-center text-white snap-start">
          <p className="text-sm">© {new Date().getFullYear()} Basu Ojha. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
