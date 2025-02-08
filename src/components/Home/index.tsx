import React, { useEffect, useRef } from "react";
import NavBar from "components/NavBar";
import Scrambler from "components/Scrambler";
import ProfilePhoto from "components/ProfilePhoto";
import Typewriter from "typewriter-effect";
import { motion, useInView } from "framer-motion";
import Skills from "components/Skills";
import AboutMe from "components/AboutMe";
import { useGlobalContext } from "contexts/GlobalContext";
import SoftSkills from "components/Skills/softSkills";

function Home() {
  const { isMobile } = useGlobalContext();
  const skillRef = useRef(null);
  const isInView = useInView(skillRef);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md">
        <NavBar />
      </div>

      <div className="bg-gray-900 text-white h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth ">
        <section
          id="home"
          className="h-screen snap-start flex flex-col justify-center items-center px-4 sm:px-16 bg-gradient-to-b from-gray-900 to-gray-800 pt-[65px]"
        >
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-44">
            <div className="flex flex-col gap-8 text-center sm:text-left">
              <h1 className="text-3xl sm:text-5xl">
                Hello World! 👋🏻 <br className="sm:hidden" /> My name is Basu.
              </h1>
              <div className="text-lg sm:text-3xl">
                <Typewriter
                  options={{
                    strings: [
                      "Welcome to my portfolio!",
                      "Salut! Bienvenue sur mon portfolio!",
                      "Ciao! Benvenuto nel mio portfolio!",
                      "नमस्ते! मेरे पोर्टफोलियो में आपका स्वागत है!",
                      "Hi! Willkommen in meinem Portfolio!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              {isMobile && (
                <div className="mt-6">
                  <ProfilePhoto />
                </div>
              )}
              <p className="pt-4 px-8 sm:pt-0 sm:px-0 text-base sm:text-xl text-justify">
                A Senior Software Developer with a knack for building
                high-performance web applications using JavaScript, React, and
                TypeScript. I turn complex challenges into elegant, scalable
                solutions that elevate user experiences. Passionate about
                crafting seamless, intuitive UIs with industry-best practices
                and modern frameworks. Always pushing the boundaries of web
                performance, accessibility, and maintainability.
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
          ref={skillRef}
          className="h-screen snap-start flex flex-col justify-center items-center px-4 bg-gradient-to-b from-gray-800 to-gray-700"
        >
          <div className="w-full max-w-4xl sm:max-w-full sm:px-16">
            <div className="flex justify-center sm:justify-start w-full">
              <h2 className="text-2xl sm:text-4xl text-white">Skills</h2>
            </div>
            <Skills isInView={isInView} />
          </div>
        </section>
        {isMobile && (
          <section
            id="softSkills"
            className="h-screen snap-start flex flex-col justify-center items-center px-4 bg-gradient-to-b from-gray-800 to-gray-700"
          >
            <div className="w-full max-w-4xl sm:max-w-full sm:px-16">
              <div className="flex justify-center sm:justify-start w-full pb-8">
                <h2 className="text-2xl sm:text-4xl text-white">
                  Other Skills
                </h2>
              </div>
              <SoftSkills isInView={isInView} />
            </div>
          </section>
        )}

        <section
          id="about"
          className="h-screen snap-start flex items-center justify-center px-4 bg-gradient-to-b from-gray-700 to-gray-600"
        >
          <AboutMe />
        </section>
        <section className=" flex items-center justify-center">
          <Scrambler />
        </section>

        <footer className="bg-gray-800 p-6 text-center text-white snap-start">
          <p className="text-sm">
            © {new Date().getFullYear()} Basu Ojha. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
