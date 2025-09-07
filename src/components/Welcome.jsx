import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [letters, setLetters] = useState([]);
  const fullText = "Welcome".split("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetters(fullText);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const getLetterAnimation = (index) => {
    const animations = [
      "translate-y-[-100vh]", // W
      "translate-x-[-100vw]", // E
      "translate-y-[100vh]", // L
      "translate-x-[100vw]", // C
      "translate-y-[-100vh]", // O
      "translate-x-[-100vw]", // M
      "translate-y-[100vh]", // E
    ];

    return `transform ${animations[index]} opacity-0 animate-fly-in`;
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="text-center flex">
        {fullText.map((letter, index) => (
          <span
            key={index}
            className={`text-8xl font-bold text-black tracking-wider transition-all duration-1000 ${
              letters.includes(letter)
                ? "translate-x-0 translate-y-0 opacity-100"
                : getLetterAnimation(index)
            }`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
