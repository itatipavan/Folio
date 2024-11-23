import React from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Pavan from "../assets/Pavan.JPG";

const Hero = () => {
  return (
    // <section id="" className="py-20 bg-white">
    <section
      id="hero"
      className="py-20 bg-gradient-to-br from-teal-50 via-white to-emerald-50"
    >
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Profile Information */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-48 h-60 rounded overflow-hidden mb-6">
              <img
                src={Pavan}
                alt="Pavan Tati"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Pavan Tati
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 mb-4">
              Full Stack Developer
            </p>
            <div className="space-y-2 text-gray-600 text-xl">
              <p>🎓 B.Tech in Electronics and Communication Engineering</p>
              <p>🏢 Currently at Dhruva Software Solutions</p>
              <p>📍 Hyderabad, India</p>
            </div>
          </div>

          {/* Right Column - Existing Content */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Full Stack Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              I build exceptional and scalable web applications
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mb-12">
              <a
                href="https://github.com/itatipavan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pavantati/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:itatipavan@gmail.com"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="#projects"
                className="w-fit inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
