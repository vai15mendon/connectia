import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 text-center">
        <p className="text-sm">© 2026 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
