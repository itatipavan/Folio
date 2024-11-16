import React from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Full Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          I build exceptional and scalable web applications
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <a
            // href="https://github.com"
            href="https://github.com/itatipavan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            // href="https://linkedin.com"
            href="https://www.linkedin.com/in/pavan-tati-24721524a/"
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

        <a
          href="#projects"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
        >
          View My Work
          <ArrowDown className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
