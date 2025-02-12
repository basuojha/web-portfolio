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
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md">
        <NavBar />
      </div>
      <div className="bg-gray-900 text-white h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <SectionWrapper id="home" className="bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:items-start sm:justify-start gap-8 sm:gap-44 px-4">
            <div className="flex flex-col gap-4 sm:gap-8 text-center sm:text-left items-center sm:items-start">
              <h1 className="text-2xl sm:text-5xl">
                Hello World! 👋🏻 <br className="sm:hidden" /> My name is Basu.
              </h1>
              <div className="text-lg sm:text-3xl h-[56px] sm:h-auto w-[60%] sm:w-full">
                <Typewriter
                  options={{
                    strings: typewriterStrings,
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
              <p className="pt-2 sm:pt-0 sm:px-0 text-sm sm:text-xl text-justify">
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

        <SectionWrapper
          id="skills"
          className="bg-gradient-to-b from-gray-800 to-gray-700 flex flex-col"
        >
          <div className="flex items-center justify-center sm:items-start sm:justify-start w-full">
            <h2 className="text-2xl sm:text-4xl text-white">Skills</h2>
          </div>
          <Skills />
        </SectionWrapper>

        {isMobile && (
          <SectionWrapper
            id="softSkills"
            className="bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col"
          >
            <h2 className="text-2xl sm:text-4xl text-white pb-4">Other Skills</h2>
            <SoftSkills />
          </SectionWrapper>
        )}

        <SectionWrapper id="about" className="bg-gradient-to-b from-gray-800 to-gray-700">
          <AboutMe />
        </SectionWrapper>

        <SectionWrapper id="experience" className="bg-gradient-to-b from-gray-900 to-gray-800">
          <Experience />
        </SectionWrapper>

        <SectionWrapper id="projects" className="bg-gradient-to-b from-gray-800 to-gray-700">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="contact" className="bg-gradient-to-b from-gray-700 to-gray-600">
          <Contact />
        </SectionWrapper>

        <section className="flex items-center justify-center">
          <Scrambler />
        </section>

        <footer className="bg-gray-800 p-6 text-center text-white snap-start">
          <p className="text-sm">© {new Date().getFullYear()} Basu Ojha. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
