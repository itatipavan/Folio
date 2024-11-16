import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Pavan Tati</p>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          <div className="flex space-x-6">
            <a
              // href="https://github.com"
              href="https://github.com/itatipavan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              // href="https://linkedin.com"
              href="https://www.linkedin.com/in/pavan-tati-24721524a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              // href="mailto:your.email@example.com"
              href="mailto:itatipavan@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pavan Tati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
