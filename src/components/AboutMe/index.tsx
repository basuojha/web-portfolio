import React from "react";
import AboutMeImage from "assets/images/aboutMe.svg";
import { useGlobalContext } from "contexts/GlobalContext";

const AboutMe: React.FC = () => {
  const { isMobile } = useGlobalContext();
  return (
    <div className="flex flex-col justify-center items-center sm:items-start  text-sm sm:text-lg px-8 sm:px-16 sm:pt-24">
      <span className="text-2xl sm:text-4xl">About Me</span>
      <div className="flex gap-8 items-start flex-col sm:flex-row">
        <div className="flex-2 text-justify ">
          <p className="pt-4 sm:pt-8">
            Hi, I’m Basu—a passionate Senior Frontend Developer specializing in
            React.js, JavaScript, and scalable UI architecture. With over four
            years of experience, I’ve built high-performance, visually
            compelling web applications that power millions of users.
          </p>
          <p className="pt-4">
            At Housing.com, I played a key role in designing and optimizing
            seamless user experiences, earning multiple accolades for my
            contributions. Having recently moved to the UK, I’m eager to take on
            new challenges, build impactful products, and push the boundaries of
            frontend development.
          </p>
          <p className="pt-4">
            Beyond coding, I create music and run a YouTube channel with 3.5M+
            views—because creativity fuels everything I do.
          </p>
          <p className="pt-4">Let’s build something amazing together! 🚀</p>
        </div>
        {!isMobile && (
          <img
            src={AboutMeImage}
            alt="Me!"
            className="h-max flex-1 sm:-m-2"
          ></img>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
