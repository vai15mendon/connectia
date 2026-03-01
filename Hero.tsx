import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            JD
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          John Doe
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
          Full Stack Developer
        </p>
        
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          I create modern web applications with clean code and great user experiences.
        </p>

        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-gray-700 hover:text-blue-600 transition-all transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-gray-700 hover:text-pink-600 transition-all transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:john@example.com"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-gray-700 hover:text-pink-600 transition-all transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
