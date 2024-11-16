// import React, { useState, useEffect } from "react";

// const Welcome = () => {
//   const [text, setText] = useState("");
//   const fullText = "Welcome";

//   useEffect(() => {
//     let currentIndex = 0;
//     const intervalId = setInterval(() => {
//       if (currentIndex <= fullText.length) {
//         setText(fullText.slice(0, currentIndex));
//         currentIndex++;
//       } else {
//         clearInterval(intervalId);
//       }
//     }, 150);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="h-screen flex items-center justify-center bg-white">
//       <div className="text-center">
//         <h1 className="text-8xl font-bold text-black tracking-wider">{text}</h1>
//       </div>
//     </div>
//   );
// };

// export default Welcome;


// import React, { useState, useEffect } from "react";

// const Welcome = () => {
//   const [letters, setLetters] = useState<string[]>([]);
//   const fullText = "Welcome".split("");

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setLetters(fullText);
//     }, 100);

//     return () => clearTimeout(timeoutId);
//   }, []);

//   const getLetterAnimation = (index: number) => {
//     const animations = [
//       "translate-y-[-100vh]", // W
//       "translate-x-[-100vw]", // E
//       "translate-y-[100vh]", // L
//       "translate-x-[100vw]", // C
//       "translate-y-[-100vh]", // O
//       "translate-x-[-100vw]", // M
//       "translate-y-[100vh]", // E
//     ];

//     return `transform ${animations[index]} opacity-0 animate-fly-in`;
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-white overflow-hidden">
//       <div className="text-center flex">
//         {fullText.map((letter, index) => (
//           <span
//             key={index}
//             className={`text-8xl font-bold text-black tracking-wider transition-all duration-1000 ${
//               letters.includes(letter)
//                 ? "translate-x-0 translate-y-0 opacity-100"
//                 : getLetterAnimation(index)
//             }`}
//           >
//             {letter}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Welcome;


// import React, { useState, useEffect } from "react";

// const Welcome = ({
//   onAnimationComplete,
// }: {
//   onAnimationComplete: () => void;
// }) => {
//   const [text, setText] = useState("");
//   const [showOverlay, setShowOverlay] = useState(true);
//   const fullText = "Welcome";

//   useEffect(() => {
//     let currentIndex = 0;
//     const intervalId = setInterval(() => {
//       if (currentIndex <= fullText.length) {
//         setText(fullText.slice(0, currentIndex));
//         currentIndex++;
//       } else {
//         clearInterval(intervalId);
//         setTimeout(() => {
//           setShowOverlay(false);
//           setTimeout(onAnimationComplete, 1000);
//         }, 500);
//       }
//     }, 150);

//     return () => clearInterval(intervalId);
//   }, [onAnimationComplete]);

//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-transform duration-1000 ${
//         !showOverlay ? "scale-y-0" : "scale-y-100"
//       }`}
//     >
//       <div className="text-center">
//         <h1 className="text-8xl font-bold text-black tracking-wider">{text}</h1>
//       </div>
//     </div>
//   );
// };

// export default Welcome;


import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [letters, setLetters] = useState<string[]>([]);
  const fullText = "Welcome".split("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetters(fullText);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const getLetterAnimation = (index: number) => {
    const animations = [
      "translate-y-[-100vh]", // W
      "translate-x-[-100vw]", // E
      "translate-y-[100vh]",  // L
      "translate-x-[100vw]",  // C
      "translate-y-[-100vh]", // O
      "translate-x-[-100vw]", // M
      "translate-y-[100vh]"   // E
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
              letters.includes(letter) ? "translate-x-0 translate-y-0 opacity-100" : getLetterAnimation(index)
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
