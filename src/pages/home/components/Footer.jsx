import { Link as ScrollLink } from 'react-scroll'; // Alias for react-scroll
import { Link as RouterLink } from 'react-router-dom'; // Alias for react-router-dom
import Logo from '../../../assets/logo.svg';
import LogoB from '../../../assets/images/inamikro.png';
// Import FontAwesome icons
import { FaInstagram, FaLinkedin, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/@finoralabs?_t=ZS-8rl6mHdsT83&_r=1' }, // Updated TikTok icon
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/finora-labs-83322833b/' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/finoralabs/' },
    { name: 'X/Twitter', icon: FaTwitter, url: 'https://x.com/finoralabs?s=11' }, // Updated to use FontAwesome Twitter icon
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-n-3">
      <div className="container mx-auto px-4">
        {/* Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Address Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-n-12 font-semibold text-xl mb-6">Address</h3>
            <p className="text-lg text-n-6 leading-relaxed">
              Jl. Ki Hajar Dewantara No.27, Jebres, Kota Surakarta, Jawa Tengah 57126
            </p>
          </div>

          {/* Social Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-n-12 font-semibold text-xl mb-6">Social</h3>
            <ul className="space-y-3">
              {socialLinks.map(social => (
                <li key={social.name}>
                  <a 
                    href={social.url}
                    className="text-lg text-n-6 hover:text-brand-primary transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-n-12 font-semibold text-xl mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-lg text-n-6 hover:text-brand-primary transition-colors cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={500}
                  className="text-lg text-n-6 hover:text-brand-primary transition-colors cursor-pointer"
                >
                  Features
                </ScrollLink>
              </li>
              <li>
                <RouterLink
                  to="/pricing"
                  className="text-lg text-n-6 hover:text-brand-primary transition-colors"
                >
                  Pricing
                </RouterLink>
              </li>
              <li>
              <a
                href="https://wa.me/62881082227649"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-n-6 hover:text-brand-primary transition-colors cursor-pointer"
              >
                Contact
              </a>

              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-n-12 font-semibold text-xl mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-lg text-n-6 hover:text-brand-primary transition-colors cursor-pointer"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <RouterLink
                  to="/app"
                  className="text-lg text-n-6 hover:text-brand-primary transition-colors"
                >
                  Finora App
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex flex-col items-center">
          <div className="flex flex-row sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <img 
                src={Logo} 
                alt="Company Logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>

            {/* Border */}
            <div className="border-l-2 border-gray-300 h-16 mx-4"></div>

            {/* Partner Logo */}
            <div className="flex-shrink-0">
              <img 
                src={LogoB} 
                alt="Partner Logo" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
            </div>
          </div>

          <p className="mt-4 text-center text-[12px] text-gray-500 max-w-[calc(6rem+6rem+3rem)]">
            Proudly partnering with PT Mikrobisnis Digital Sejahtera.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-8 mb-8">
            {socialLinks.map(social => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-n-2 hover:bg-brand-primary transition-colors group"
                >
                  <Icon 
                    size={24} 
                    className="text-n-6 group-hover:text-white transition-colors"
                  />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm md:text-[16px] font-bold text-n-6">
            &#169;Copyright {new Date().getFullYear()} <span className="text-brand-primary">Finora Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
