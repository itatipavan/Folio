import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000); // Increased to 2 seconds to see the full text animation

    return () => clearTimeout(timer);
  }, []);

  return showWelcome ? (
    <Welcome />
  ) : (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Welcome from "./components/Welcome";

// function App() {
//   const [showWelcome, setShowWelcome] = useState(true);

//   return (
//     <>
//       {showWelcome && (
//         <Welcome onAnimationComplete={() => setShowWelcome(false)} />
//       )}
//       <div className="min-h-screen bg-white">
//         <Navbar />
//         <Hero />
//         <About />
//         <Projects />
//         <Skills />
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;
