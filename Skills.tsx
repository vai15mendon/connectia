import React from 'react';
import { Code2, Palette, Database, Cloud, Terminal, Smartphone } from 'lucide-react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 size={24} />,
      skills: [
        { name: 'React / Next.js', level: 95, category: 'frontend' },
        { name: 'TypeScript', level: 90, category: 'frontend' },
        { name: 'Tailwind CSS', level: 95, category: 'frontend' },
        { name: 'HTML5 / CSS3', level: 98, category: 'frontend' },
      ]
    },
    {
      title: 'Backend',
      icon: <Terminal size={24} />,
      skills: [
        { name: 'Node.js / Express', level: 90, category: 'backend' },
        { name: 'Python / Django', level: 85, category: 'backend' },
        { name: 'REST / GraphQL', level: 90, category: 'backend' },
        { name: 'Microservices', level: 80, category: 'backend' },
      ]
    },
    {
      title: 'Database',
      icon: <Database size={24} />,
      skills: [
        { name: 'PostgreSQL', level: 88, category: 'database' },
        { name: 'MongoDB', level: 90, category: 'database' },
        { name: 'Redis', level: 82, category: 'database' },
        { name: 'Prisma / TypeORM', level: 85, category: 'database' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={24} />,
      skills: [
        { name: 'AWS / Azure', level: 85, category: 'cloud' },
        { name: 'Docker / Kubernetes', level: 82, category: 'cloud' },
        { name: 'CI/CD', level: 88, category: 'cloud' },
        { name: 'Git / GitHub', level: 95, category: 'cloud' },
      ]
    },
    {
      title: 'Mobile',
      icon: <Smartphone size={24} />,
      skills: [
        { name: 'React Native', level: 85, category: 'mobile' },
        { name: 'Expo', level: 80, category: 'mobile' },
        { name: 'Responsive Design', level: 95, category: 'mobile' },
        { name: 'PWA', level: 88, category: 'mobile' },
      ]
    },
    {
      title: 'Design',
      icon: <Palette size={24} />,
      skills: [
        { name: 'UI/UX Design', level: 85, category: 'design' },
        { name: 'Figma', level: 82, category: 'design' },
        { name: 'Adobe XD', level: 78, category: 'design' },
        { name: 'Accessibility', level: 90, category: 'design' },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="section-container">
        <h2 className="heading-secondary text-center">Skills & Expertise</h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Technologies and tools I've mastered throughout my career
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="card hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-primary-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Other Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Jest', 'Cypress', 'Webpack', 'Vite', 'Nginx', 'Linux',
              'Agile', 'Scrum', 'TDD', 'WebSockets', 'OAuth', 'JWT',
              'SEO', 'Performance Optimization', 'Security Best Practices'
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
