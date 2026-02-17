import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["hero", "about", "projects", "skills", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-xl border-b ${
        scrolled ? "shadow-2xl" : "border-opacity-0"
      }`}
      style={
        scrolled
          ? {
              backgroundColor: "rgba(26, 26, 46, 0.7)",
              borderColor: "rgba(212, 175, 55, 0.2)",
            }
          : {
              backgroundColor: "rgba(26, 26, 46, 0.4)",
              borderColor: "transparent",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <div
              className="p-2.5 rounded-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-rose))",
              }}
            >
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold font-display gradient-text">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                    activeSection === item.href.slice(1)
                      ? "text-white"
                      : scrolled
                        ? "text-gray-300 hover:text-white"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Active indicator */}
                  {activeSection === item.href.slice(1) && (
                    <span
                      className="absolute inset-0 rounded-xl opacity-20"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-rose))",
                      }}
                    ></span>
                  )}

                  {/* Hover effect */}
                  <span
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-rose))",
                    }}
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 glass-dark"
              style={{ color: "var(--color-accent-gold)" }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden backdrop-blur-xl shadow-2xl border-t"
          style={{
            backgroundColor: "rgba(26, 26, 46, 0.85)",
            borderColor: "rgba(212, 175, 55, 0.2)",
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                style={
                  activeSection === item.href.slice(1)
                    ? {
                        background:
                          "linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-rose))",
                        opacity: 0.2,
                      }
                    : {}
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
