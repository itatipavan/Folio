import React from "react";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import Pavan from "../assets/Pavan.JPG";
import { calculateExperience } from "../utils/common";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Elegant Background Gradient */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, var(--color-accent-gold) 0%, transparent 50%), radial-gradient(circle at 70% 80%, var(--color-accent-rose) 0%, transparent 50%)",
            filter: "blur(100px)",
          }}
        ></div>
      </div>

      {/* Elegant Floating Particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="particle w-20 h-20 rounded-full top-20 left-20"
          style={{
            backgroundColor: "var(--color-accent-gold)",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="particle w-32 h-32 rounded-full top-40 right-32"
          style={{
            backgroundColor: "var(--color-accent-rose)",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="particle w-24 h-24 rounded-full bottom-32 left-40"
          style={{
            backgroundColor: "var(--color-accent-sage)",
            animationDelay: "4s",
          }}
        ></div>
        <div
          className="particle w-16 h-16 rounded-full bottom-20 right-20"
          style={{
            backgroundColor: "var(--color-accent-gold)",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Profile Image */}
          <div className="flex flex-col items-center lg:items-start space-y-8 slide-in-left">
            <div className="relative group">
              {/* Glow effect */}
              <div
                className="absolute -inset-2 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 glow"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-rose), var(--color-accent-sage))",
                }}
              ></div>

              {/* Image container */}
              <div
                className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl transform transition duration-700 group-hover:scale-105"
                style={{
                  border: "3px solid",
                  borderColor: "var(--color-accent-gold)",
                }}
              >
                <img
                  src={Pavan}
                  alt="Pavan Tati"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/itatipavan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-dark rounded-2xl transform transition-all duration-300 hover:scale-110 hover:-rotate-6"
                style={{ color: "var(--color-accent-gold)" }}
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pavantati/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-dark rounded-2xl transform transition-all duration-300 hover:scale-110 hover:-rotate-6"
                style={{ color: "var(--color-accent-gold)" }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:itatipavan@gmail.com"
                className="p-4 glass-dark rounded-2xl transform transition-all duration-300 hover:scale-110 hover:-rotate-6"
                style={{ color: "var(--color-accent-gold)" }}
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="text-center lg:text-left space-y-8 slide-in-right">
            <div className="space-y-6">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 glass-dark rounded-full text-sm font-bold tracking-wider"
                style={{ color: "var(--color-accent-gold)" }}
              >
                <Sparkles className="w-4 h-4" />
                <span>WELCOME TO MY PORTFOLIO</span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight font-display"
                style={{ color: "var(--color-ivory)" }}
              >
                Pavan Tati
              </h1>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                React Developer
              </h2>

              {/* Quick Info */}
              <div
                className="space-y-3 text-lg"
                style={{ color: "var(--color-silver)" }}
              >
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-2xl">💼</span>
                  <span>
                    {calculateExperience()} Years Experience in Industrial B2B
                    SaaS Platforms
                  </span>
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-2xl">🏢</span>
                  <span>React Developer @ Dhruva Software Solutions</span>
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-2xl">📍</span>
                  <span>Hyderabad, India</span>
                </p>
              </div>

              {/* Description */}
              <p
                className="text-xl md:text-2xl font-light leading-relaxed"
                style={{ color: "var(--color-silver)" }}
              >
                Specializing in building complex ERP, CRM, HRM, and Billing
                Systems with React.js, Redux, and Django
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white btn-gradient rounded-2xl transition-all duration-300 shadow-2xl hover-scale"
              >
                <span>View My Work</span>
                <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 glass-dark hover-scale"
                style={{ color: "var(--color-accent-gold)" }}
              >
                <span>Get In Touch</span>
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave - Updated color */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#faf9f6"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
