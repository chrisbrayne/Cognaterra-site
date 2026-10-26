import React, { useState } from 'react';
import CognaterraLogo from './CognaterraLogo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#insights', label: 'Insights' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="transition-all duration-300 hover:opacity-90 transform hover:scale-105" aria-label="Cognaterra Home">
            <CognaterraLogo layout="horizontal" className="h-10 md:h-12 w-auto" />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 font-semibold hover:text-[var(--color-brand-accent)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#212529] focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out"
        >
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:text-white hover:bg-[var(--color-brand-accent)] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
