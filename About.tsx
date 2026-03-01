import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg p-8 border border-pink-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm a passionate Full Stack Developer with 5+ years of experience building 
            web applications. I specialize in React, TypeScript, Node.js, and modern web technologies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I love creating clean, efficient code and building products that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
