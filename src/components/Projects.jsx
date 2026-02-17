import React, { useState } from "react";
import { ExternalLink, Github, Sparkles, Code2, Calendar } from "lucide-react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Industrial Software Suite (ERP/CRM/HRM)",
      description:
        "Enterprise-grade applications for Ayurvedic Healthcare, Retail Jewellery, and Construction sectors. Features comprehensive modules for human resources, customer relations, and business operations management.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900&h=600",
      tech: ["React.js", "Redux", "Django", "MySQL", "RESTful APIs"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-indigo-500 to-purple-600",
      featured: true,
      date: "2024",
      company: "Dhruva Software Solutions",
    },
    {
      title: "Billing & Auditing System",
      description:
        "Engineered dynamic billing and auditing modules handling complex calculations, tax logic, and real-time invoice generation. Implemented for multiple industries with zero data loss in high-volume transactions.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900&h=600",
      tech: ["React.js", "Redux", "Django REST", "MySQL", "RBAC"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-amber-500 to-orange-600",
      featured: true,
      date: "2024",
      company: "Dhruva Software Solutions",
    },
    {
      title: "Student Consultancy Migration Portal",
      description:
        'Complete migration portal for "Overseas Radius" managing study-abroad applications. Features multi-step application forms, document uploader, and comprehensive status tracking dashboards.',
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=900&h=600",
      tech: ["React.js", "Tailwind CSS", "Form Validation", "State Management"],
      liveUrl: "https://overseasradius.netlify.app",
      githubUrl: "#",
      gradient: "from-cyan-500 to-blue-600",
      featured: true,
      date: "2024",
      company: "Client Project",
    },
    {
      title: "Reporting Dashboard for Jewellery Business",
      description:
        "Comprehensive analytics dashboard visualizing sales data, inventory stock levels, and audit logs using React charting libraries. Delivers actionable insights for retail jewellery operations.",
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=900&h=600",
      tech: [
        "React.js",
        "Chart Libraries",
        "Data Visualization",
        "Django REST",
      ],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-rose-500 to-pink-600",
      featured: false,
      date: "2024",
      company: "Dhruva Software Solutions",
    },
    {
      title: "Service Visit Booking Application",
      description:
        "Responsive appointment scheduling tool allowing users to book service visits seamlessly. Implemented comprehensive form validation and state management for error-free bookings.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=900&h=600",
      tech: [
        "React.js",
        "Form Validation",
        "State Management",
        "Responsive Design",
      ],
      liveUrl: "https://dev-vicreations.netlify.app",
      githubUrl: "#",
      gradient: "from-emerald-500 to-teal-600",
      featured: false,
      date: "2024",
      company: "Personal Project",
    },
    {
      title: "Professional Developer Portfolio",
      description:
        "Modern, high-performance portfolio showcasing technical skills and live project demos. Achieved perfect 100/100 Lighthouse performance score through optimization and best practices.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=900&h=600",
      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "EmailJS",
        "Performance Optimization",
      ],
      liveUrl: "https://portfolio-pavantati.netlify.app",
      githubUrl: "#",
      gradient: "from-violet-500 to-purple-600",
      featured: false,
      date: "2024",
      company: "Personal Project",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Elegant Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent-gold) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 animation-delay-2000"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent-rose) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 slide-in-up">
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 glass-dark rounded-full text-sm font-bold mb-6"
            style={{ color: "var(--color-accent-gold)" }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="tracking-wider">FEATURED WORK</span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 font-display"
            style={{ color: "var(--color-ivory)" }}
          >
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-silver)" }}
          >
            Real-world industrial applications and B2B SaaS platforms built with
            React.js
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow Effect on Hover */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur-sm opacity-0 group-hover:opacity-60 transition duration-700`}
                style={{
                  transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              ></div>

              {/* Card */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105"
                style={{ backgroundColor: "var(--color-secondary)" }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1.5 glass rounded-full text-xs font-bold flex items-center gap-1.5"
                      style={{ color: "var(--color-accent-gold)" }}
                    >
                      <Sparkles className="w-3 h-3" />
                      FEATURED
                    </div>
                  )}

                  {/* Overlay with Actions */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-95 transition-opacity duration-500 flex items-center justify-center`}
                  >
                    <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-full text-white transform hover:scale-110 transition-transform glow"
                          style={{ backgroundColor: "var(--color-primary)" }}
                          aria-label="View live project"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-full text-white transform hover:scale-110 transition-transform glow"
                          style={{ backgroundColor: "var(--color-primary)" }}
                          aria-label="View GitHub repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date & Company */}
                  <div className="flex items-center justify-between mb-3 text-sm opacity-75">
                    <div
                      className="flex items-center gap-2"
                      style={{ color: "var(--color-accent-gold)" }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                    <span
                      className="text-xs px-2 py-1 glass-dark rounded-full"
                      style={{ color: "var(--color-accent-rose)" }}
                    >
                      {project.company}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-3 font-display"
                    style={{ color: "var(--color-ivory)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mb-5 leading-relaxed"
                    style={{ color: "var(--color-silver)" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 glass-dark rounded-full text-sm font-semibold flex items-center gap-1.5"
                        style={{ color: "var(--color-accent-rose)" }}
                      >
                        <Code2 className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 slide-in-up">
          <p className="text-lg mb-6" style={{ color: "var(--color-silver)" }}>
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 btn-gradient text-white font-bold rounded-full text-lg shadow-2xl hover-scale"
          >
            <span>Let's Connect</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
