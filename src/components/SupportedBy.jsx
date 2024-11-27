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
  ];

  return (
    <Section customPaddings="pt-8 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-n-12 mb-16">
          Supported By
        </h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex gap-16 items-center animate-slide px-[100px]">
            {companies.map((company) => (
              <div 
                key={company.name}
                className="w-[180px] h-[120px] flex items-center justify-center flex-shrink-0"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-all"
                />
              </div>
            ))}
            
            {companies.map((company) => (
              <div 
                key={`${company.name}-duplicate`}
                className="w-[180px] h-[120px] flex items-center justify-center flex-shrink-0"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SupportedBy;
