import React from 'react';
import AboutMeImage from 'assets/images/aboutMe.svg';
import { useGlobalContext } from 'contexts/GlobalContext';

const AboutMe: React.FC = () => {
  const { isMobile } = useGlobalContext();
  return (
    <div
      className="
        flex flex-col justify-center items-center md:items-start
        text-sm sm:text-sm  lg:text-base xl:text-lg 
        px-4 sm:px-4 md:px-3 lg:px-2 xl:px-0 
        pt-0 sm:pt-2 md:pt-6 lg:pt-12 xl:pt-24
      "
    >
      <span className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">About Me</span>
      <div className="flex gap-8 items-start flex-col md:flex-row">
        <div className="flex-2 text-justify">
          <p className="pt-4 sm:pt-4 md:pt-6 lg:pt-6 xl:pt-8">
            Hi, I’m Basu—a passionate Senior Frontend Developer specializing in React.js,
            JavaScript, and scalable UI architecture. With over four years of experience, I’ve built
            high-performance, visually compelling web applications that power millions of users.
          </p>
          <p className="pt-4 sm:pt-4 md:pt-6 lg:pt-6 xl:pt-8">
            At Housing.com, I played a key role in designing and optimizing seamless user
            experiences, earning multiple accolades for my contributions. Having recently moved to
            the UK, I’m eager to take on new challenges, build impactful products, and push the
            boundaries of frontend development.
          </p>
          <p className="pt-4 sm:pt-4 md:pt-6 lg:pt-6 xl:pt-8">
            Beyond coding, I create music and run a YouTube channel with 3.5M+ views—because
            creativity fuels everything I do.
          </p>
          <p className="pt-4 sm:pt-4 md:pt-6 lg:pt-6 xl:pt-8">
            Let’s build something amazing together! 🚀
          </p>
        </div>
        {!isMobile && (
          <img
            src={AboutMeImage}
            alt="Me!"
            className="
              h-max flex-1 object-contain
              w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-auto
              sm:-m-1 md:-m-1 lg:-m-2 xl:-m-2
            "
          />
        )}
      </div>
    </div>
  );
};

export default AboutMe;
