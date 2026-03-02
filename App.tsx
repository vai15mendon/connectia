import React from 'react';
import Hero from 'Hero';
import About from 'About';
import Projects from 'Projects';
import Contact from 'Contact';
import Footer from 'Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;