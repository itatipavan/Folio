import React from 'react';

const Skills = () => {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux'],
    'Backend': ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
    'Database': ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    'Tools': ['Git', 'Docker', 'AWS', 'Vercel', 'Figma']
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600">My technical toolkit</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;