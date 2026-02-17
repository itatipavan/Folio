import React from "react";
import { Code, Database, Wrench, Briefcase, Sparkles } from "lucide-react";
import { calculateExperience } from "../utils/common";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Redux", level: 90 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
      ],
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      category: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Python", level: 85 },
        { name: "Django", level: 85 },
        { name: "Django REST Framework", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "RESTful APIs", level: 90 },
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      category: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Netlify", level: 80 },
      ],
      gradient: "from-amber-500 to-orange-600",
    },
    {
      category: "Domain Expertise",
      icon: Briefcase,
      skills: [
        { name: "Industrial ERP/CRM", level: 90 },
        { name: "Billing Systems", level: 90 },
        { name: "Report Generation", level: 85 },
        { name: "RBAC Security", level: 85 },
      ],
      gradient: "from-rose-500 to-pink-600",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      {/* Elegant Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent-gold) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent-rose) 0%, transparent 70%)",
            filter: "blur(100px)",
            animationDelay: "2s",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 slide-in-up">
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg border-2"
            style={{
              backgroundColor: "var(--color-secondary)",
              color: "var(--color-accent-gold)",
              borderColor: "var(--color-accent-gold)",
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="tracking-wider">TECHNICAL EXPERTISE</span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 font-display"
            style={{ color: "var(--color-navy)" }}
          >
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto font-medium"
            style={{ color: "var(--color-navy)" }}
          >
            Proficient in building enterprise-grade B2B SaaS applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div key={catIndex} className="group relative">
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-3xl blur-sm opacity-0 group-hover:opacity-50 transition duration-700`}
                ></div>

                {/* Card */}
                <div
                  className="relative p-6 rounded-3xl shadow-xl h-full transition-all duration-500"
                  style={{ backgroundColor: "white" }}
                >
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 bg-gradient-to-br ${category.gradient} rounded-2xl mr-3 shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3
                      className="text-xl font-bold font-display"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills with Progress Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span
                            className="font-semibold text-sm"
                            style={{ color: "var(--color-charcoal)" }}
                          >
                            {skill.name}
                          </span>
                          <span
                            className="font-bold text-sm"
                            style={{ color: "var(--color-accent-gold)" }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          className="w-full rounded-full h-2 overflow-hidden"
                          style={{
                            backgroundColor: "var(--color-silver)",
                            opacity: 0.3,
                          }}
                        >
                          <div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${skill.level}%`,
                              transitionDelay: `${skillIndex * 100}ms`,
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

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div
            className="inline-block p-8 rounded-2xl shadow-xl border-2"
            style={{
              backgroundColor: "var(--color-secondary)",
              borderColor: "var(--color-accent-gold)",
            }}
          >
            <p
              className="text-xl font-bold mb-3"
              style={{ color: "var(--color-accent-gold)" }}
            >
              💼 Specialized in Industrial B2B SaaS Development
            </p>
            <p className="text-base" style={{ color: "var(--color-ivory)" }}>
              Over {calculateExperience()} years of hands-on experience building
              complex ERP, CRM, HRM, and Billing Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
