import { useState } from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src= {Logo} 
            alt="test" 
            className="w-24 h-24 object-contain"
          />
          <h1 className="text-3xl font-bold">Finora Labs</h1>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-n-8 hover:text-brand-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="button px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-secondary transition-colors"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-n-6 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-n-6 hover:text-brand-primary transition-colors duration-300 font-medium"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="button px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-secondary transition-colors"
                onClick={toggleMenu}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;