import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">HackerEarth x Agent.ai</h4>
            <p className="text-gray-300 mb-4">
              Building the future of AI agents through innovation and collaboration.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#challenges" className="text-gray-300 hover:text-white transition-colors">Challenges</a>
              </li>
              <li>
                <a href="#timeline" className="text-gray-300 hover:text-white transition-colors">Timeline</a>
              </li>
              <li>
                <a href="#prizes" className="text-gray-300 hover:text-white transition-colors">Prizes</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Resources</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Starter Templates</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">API References</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#support" className="text-gray-300 hover:text-white transition-colors">Support</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Contact</h5>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:info@hackerearthxagent.ai" className="hover:text-white transition-colors">
                  info@hackerearthxagent.ai
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Support:</span>
                <a href="mailto:support@hackerearthxagent.ai" className="hover:text-white transition-colors">
                  support@hackerearthxagent.ai
                </a>
              </li>
              <li className="text-gray-300 mt-4">
                <a href="#" className="hover:text-white transition-colors">
                  Join our Discord community
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p className="mb-4">
            &copy; {currentYear} HackerEarth x Agent.ai Hackathon. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
          </div>
          
          <p className="mt-6 flex items-center justify-center gap-1 text-gray-400">
            Made with <Heart size={16} className="text-primary" /> for innovators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;