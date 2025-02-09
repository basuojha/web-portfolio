import React, { useState, useEffect } from "react";
import charset from "../../constants/allChars";
import { useGlobalContext } from "contexts/GlobalContext";

const Scrambler: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>("");
  const [hovered, setHovered] = useState<boolean>(false);
  const { isMobile } = useGlobalContext();
  const originalText: string = `Caught you! — your friendly neighborhood developer 🧑🏻‍💻  `;

  const getRandomText = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const lengthToShow = isMobile
      ? Math.floor(originalText.length / 2.5)
      : Math.floor(originalText.length / 1.5);
    if (!hovered) {
      interval = setInterval(() => {
        setDisplayText(getRandomText(lengthToShow));
      }, 100);
    } else {
      setDisplayText(originalText);
    }

    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      className="flex items-center justify-center flex-col gap-2 rounded-lg mx-4 cursor-help"
    >
      <div className="flex items-center flex-col">
        <div className="text-lg sm:text-2xl transition-all duration-500 ease-out px-2 py-4 min-h-24 flex items-center">
          {displayText}
        </div>
      </div>
    </div>
  );
};

export default Scrambler;
