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
      "translate-y-[-100vh]",
      "translate-x-[-100vw]",
      "translate-y-[100vh]",
      "translate-x-[100vw]",
      "translate-y-[-100vh]",
      "translate-x-[-100vw]",
      "translate-y-[100vh]",
    ];

    return `transform ${animations[index]} opacity-0`;
  };

  return (
    <div className="h-screen flex items-center justify-center animated-gradient overflow-hidden relative">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle w-32 h-32 bg-white/20 top-20 left-20" style={{ animationDelay: '0s' }}></div>
        <div className="particle w-24 h-24 bg-white/10 top-40 right-32" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-40 h-40 bg-white/10 bottom-32 left-40" style={{ animationDelay: '4s' }}></div>
        <div className="particle w-28 h-28 bg-white/20 bottom-20 right-20" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative text-center flex items-center justify-center">
        {fullText.map((letter, index) => (
          <span
            key={index}
            className={`text-8xl md:text-9xl font-extrabold text-white tracking-wider transition-all duration-1000 ${
              letters.includes(letter)
                ? "translate-x-0 translate-y-0 opacity-100"
                : getLetterAnimation(index)
            }`}
            style={{
              textShadow: '0 0 40px rgba(255, 255, 255, 0.5), 0 0 80px rgba(255, 255, 255, 0.3)'
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
