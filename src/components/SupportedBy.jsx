import Section from "./Section";
import LogoA from '../assets/logo.svg';
import LogoB from '../assets/images/inamikro.png';
import LogoC from '../assets/images/semesta.png';
import LogoD from '../assets/images/Logo_UNS.png';


const SupportedBy = () => {
  // Array of company logos (replace with actual paths)
  const companies = [
    { name: 'Finora Labs', logo: LogoA },
    { name: 'InaMikro', logo: LogoB },
    { name: 'Semesta Wirausaha Merdeka UNS', logo: LogoC },
    { name: 'Universitas Sebelas Maret', logo: LogoD },
    { name: 'Finora Labs', logo: LogoA },
    { name: 'InaMikro', logo: LogoB }
  ];

  return (
    <Section customPaddings="pt-8 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-n-12 mb-16">
          Supported By
        </h2>
        
        <div className="flex pt-8 pb-12 flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div 
              key={company.name}
              className={`
                w-[150px] h-[100px] flex items-center justify-center
                ${index % 2 === 0 ? 'md:translate-y-8' : 'md:-translate-y-8'} 
                transition-transform duration-300 hover:scale-105
              `}
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className={`
                  max-w-full max-h-full object-contain 
                  md:hover:grayscale-0 opacity-70 hover:opacity-100 
                  transition-all
                  ${index % 2 === 0 ? 'md:translate-y-8' : 'md:-translate-y-8'}
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SupportedBy;
