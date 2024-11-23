import { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.svg';
import Button from './button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Features', to: 'features' },
    { name: 'Pricing', to: 'pricing' },
    // { name: 'Contact', to: 'contact' },
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
            src={Logo} 
            alt="Finora Labs Logo" 
            className="w-12 h-12 md:w-24 md:h-24 object-contain" 
          />
          <h1 className="text-xl md:text-3xl font-bold">Finora Labs</h1>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-n-8 hover:text-brand-primary transition-colors duration-300 font-medium cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => window.open('https://wa.me/6289513912741', '_blank')}
            className="button px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-secondary transition-colors cursor-pointer"
          >
            Get Started
          </Link>
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
                <Link 
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-n-6 hover:text-brand-primary transition-colors duration-300 font-medium cursor-pointer"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="text-lg rounded-[30px] font-bold inline-flex justify-center items-center gap-2 py-3 px-6 text-white bg-[#FC4A1A] hover:bg-[#e04016]"
                onClick={() => window.open('https://wa.me/6289513912741', '_blank')}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
