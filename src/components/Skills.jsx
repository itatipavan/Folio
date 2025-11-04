import React from "react";
import { Code, Database, Wrench, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Code,
      skills: [
        { name: "React", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Next.js", level: 80 }
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      category: "Backend",
      icon: Layers,
      skills: [
        { name: "Python", level: 88 },
        { name: "Django", level: 85 },
        { name: "REST APIs", level: 90 }
      ],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 }
      ],
      gradient: "from-green-600 to-teal-600"
    },
    {
      category: "Tools",
      icon: Wrench,
      skills: [
        { name: "GitHub", level: 90 },
        { name: "Cody", level: 80 },
        { name: "Figma", level: 75 }
      ],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white via-purple-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 slide-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-bold rounded-full shadow-lg">
              EXPERTISE
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My technical toolkit and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div 
                key={catIndex}
                className="group relative hover-scale"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000`}></div>
                
                {/* Card */}
                <div className="relative p-6 bg-white rounded-2xl shadow-xl h-full">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl mr-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                  </div>
                  
                  {/* Skills with Progress Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-semibold">{skill.name}</span>
                          <span className="text-gray-500 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${skill.level}%`,
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
