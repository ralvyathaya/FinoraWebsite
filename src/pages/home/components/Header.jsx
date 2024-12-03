import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Alias for react-scroll
import { Link as RouterLink } from 'react-router-dom'; // Alias for react-router-dom
import Logo from '../../../assets/logo.svg';
import Button from '../../../components/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const heroSectionHeight = document.getElementById('home').offsetHeight; // Get the height of the hero section
    if (window.scrollY > heroSectionHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = isScrolled
    ? "bg-white shadow-sm"
    : "bg-transparent md:bg-opacity-70 md:backdrop-blur-md";

  const textClasses = isScrolled ? "text-n-8" : "text-white"; // Change text color based on scroll state
  const buttonClasses = isScrolled ? "bg-brand-primary text-white" : "bg-white text-black";

  const navItems = [
    { name: 'Home', to: 'home', type: 'scroll' },
    { name: 'About', to: 'about', type: 'scroll' },
    { name: 'Features', to: 'features', type: 'scroll' },
    { name: 'Pricing', to: 'pricing', type: 'scroll' },
    {
      name: 'Finora App',
      to: '/app',
      type: 'router',
      className: "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent bg-[400%] animate-gradient-circular transition-all duration-100"
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full ${navClasses} transition-all duration-300 z-50`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Finora Labs Logo"
            className="w-12 h-12 md:w-20 md:h-20 object-contain"
          />
          <h1 className={`${textClasses} text-xl md:text-2xl font-bold`}>Finora Labs</h1>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) =>
            item.type === 'scroll' ? (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className={`${textClasses} hover:text-brand-primary transition-colors duration-300 font-medium cursor-pointer`}
              >
                {item.name}
              </ScrollLink>
            ) : (
              <RouterLink
                key={item.name}
                to={item.to}
                className={` transition-colors duration-300 font-medium cursor-pointer ${item.className || 'hover:text-brand-primary'}`}
              >
                {item.name}
              </RouterLink>
            )
          )}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => window.open('https://wa.me/62881082227649?text=Ingin tahu lebih lanjut tentang fitur Finora Labs', '_blank')}
            className={`button px-4 py-2 ${buttonClasses} rounded-md hover:bg-brand-secondary transition-colors cursor-pointer`}
          >
            Mulai Sekarang!
          </ScrollLink>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-n-6 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white bg-opacity-70 backdrop-blur-md shadow-lg md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) =>
                item.type === 'scroll' ? (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className={` hover:text-brand-primary transition-colors duration-300 font-medium cursor-pointer`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={item.name}
                    to={item.to}
                    className={` hover:text-brand-primary transition-colors duration-300 font-medium cursor-pointer`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </RouterLink>
                )
              )}
              <Button
                className="text-lg rounded-[30px] font-bold inline-flex justify-center items-center gap-2 py-3 px-6 text-white bg-[#FC4A1A] hover:bg-[#e04016]"
                onClick={() => window.open('https://wa.me/62881082227649?text=Ingin tahu lebih lanjut tentang fitur Finora Labs', '_blank')}
              >
                Mulai Sekarang!
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

