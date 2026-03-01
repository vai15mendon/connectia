import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              John<span className="text-primary-400">Doe</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:john.doe@example.com" className="hover:text-primary-400 transition-colors">
                  john.doe@example.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>San Francisco, CA, USA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} John Doe. Made with <Heart size={16} className="text-red-500 fill-current" /> using React & Tailwind CSS
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
