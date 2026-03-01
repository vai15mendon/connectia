import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and team features.',
      technologies: ['React', 'TypeScript', 'Firebase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather app with forecasts and beautiful visualizations.',
      technologies: ['React', 'API Integration', 'Tailwind'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white border-2 border-pink-100 rounded-xl p-6 hover:shadow-xl hover:border-pink-300 transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-all"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
