import React, { useState, useEffect } from 'react';
import { Menu, X, Headphones } from 'lucide-react';
import SignupModal from './SignupModal';
import { useSignup } from '../context/SignupContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openSignup } = useSignup();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Challenges', href: '#challenges' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className="text-primary font-blue-950 font-display font-bold text-2xl">HackerEarth</span> <span className="text-primary font-white font-display font-bold text-2xl">x </span><span className="text-primary font-display font-bold text-2xl">Agent.ai</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-secondary hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="#support" 
            className="text-secondary hover:text-primary transition-colors flex items-center gap-2"
            title="Get Help"
          >
            <Headphones size={20} />
            <span>Help</span>
          </a>
          
          <button 
            onClick={openSignup}
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <a 
            href="#support" 
            className="text-secondary hover:text-primary transition-colors"
            title="Get Help"
          >
            <Headphones size={20} />
          </a>
          
          <button 
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-secondary hover:text-primary transition-colors block py-2"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => {
                    openSignup();
                    closeMenu();
                  }}
                  className="btn btn-primary w-full mt-4"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
      
      <SignupModal />
    </header>
  );
};

export default Navbar;
