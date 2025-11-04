import React from "react";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import Pavan from "../assets/Pavan.JPG";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle w-20 h-20 bg-white/10 top-20 left-20" style={{ animationDelay: '0s' }}></div>
        <div className="particle w-32 h-32 bg-purple-400/10 top-40 right-32" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-24 h-24 bg-blue-400/10 bottom-32 left-40" style={{ animationDelay: '4s' }}></div>
        <div className="particle w-16 h-16 bg-pink-400/10 bottom-20 right-20" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Information */}
          <div className="flex flex-col items-center lg:items-start space-y-6 slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-4 border-white shadow-2xl transform transition duration-500 group-hover:scale-105">
                <img
                  src={Pavan}
                  alt="Pavan Tati"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl text-center lg:text-left space-y-3 transform transition duration-500 hover:scale-105">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Pavan Tati
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-semibold">
                Full Stack Developer
              </p>
              <div className="space-y-2 text-white/80 text-lg pt-2">
                <p className="flex items-center justify-center lg:justify-start">
                  <span className="mr-2">🎓</span> B.Tech in ECE
                </p>
                <p className="flex items-center justify-center lg:justify-start">
                  <span className="mr-2">🏢</span> Dhruva Software Solutions
                </p>
                <p className="flex items-center justify-center lg:justify-start">
                  <span className="mr-2">📍</span> Hyderabad, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="text-center lg:text-left space-y-8 slide-in-right">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                Full Stack
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400">
                  Developer
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl">
                I craft exceptional and scalable web applications with modern technologies
              </p>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://github.com/itatipavan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                data-testid="github-link"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pavantati/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                data-testid="linkedin-link"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:itatipavan@gmail.com"
                className="p-4 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                data-testid="email-link"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
                data-testid="view-work-btn"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
