import Logo from '../assets/logo.svg';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, url: '#' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: '#' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/finoralabs/' },
    { name: 'X', icon: TwitterIcon, url: '#' }
  ];

  const exploreLinks = [
    { name: 'Home', url: '#' },
    { name: 'Features', url: '#' },
    { name: 'Pricing', url: '#' },
    { name: 'Contact', url: '#' }
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-n-3">
      <div className="container mx-auto px-4">
        {/* Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Address Column */}
          <div>
            <h3 className="text-n-12 font-semibold text-xl mb-6">Address</h3>
            <p className="text-lg text-n-6 leading-relaxed">
              Jl. Ki Hajar Dewantara No.27, Jebres, Kota Surakarta, Jawa Tengah 57126
            </p>
          </div>

          {/* Social Column */}
          <div>
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
          <div>
            <h3 className="text-n-12 font-semibold text-xl mb-6">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.url}
                    className="text-lg text-n-6 hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-n-12 font-semibold text-xl mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about"
                  className="text-lg text-n-6 hover:text-brand-primary transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex flex-col items-center">
          <img 
            src={Logo}
            alt="Company Logo" 
            className="w-24 h-24 object-contain mb-8"
          />

          {/* Social Icons */}
          <div className="flex space-x-6 mb-8">
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
          <p className="text-lg font-bold text-n-6">
          &#169;Copyright 2024 <span className="text-brand-primary">Finora Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;