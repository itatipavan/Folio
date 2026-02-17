import React from "react";
import { Code, Globe, Server, Zap, Layers, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Crafting responsive and intuitive user interfaces using modern frameworks and best practices.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications with efficient database management.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description:
        "Delivering end-to-end web solutions that drive business growth and user engagement.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 slide-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-bold rounded-full shadow-lg">
              ABOUT ME
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions that make a
            difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000`}
                ></div>

                {/* Card Content */}
                <div className="relative p-8 bg-white rounded-2xl shadow-xl h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover-scale"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
