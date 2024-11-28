import Button from "../../../components/button"
import Section from "../../../components/Section"
import Hero from "../../../assets/images/hero.png"

const HeroSection = () => {
  return (
    <Section id="home">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16 md:py-20 lg:py-24">
      {/* Image - Responsive sizing */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
        <img 
          src={Hero}
          alt="Business Support Hero" 
          className="w-full h-auto md:h-[600px] object-cover rounded-[30px] shadow-lg"
        />
      </div>

      {/* Text Content - Responsive positioning */}
      <div className="w-full md:w-1/2 md:pl-12">
        <h1 className="text-3xl md:text-6xl font-bold text-n-12 mb-4 md:mb-6 leading-tight text-center md:text-left">
          Teman Setia Usaha Anda
        </h1>
        
        <p className="text-base md:text-xl text-n-6 mb-6 md:mb-8 leading-relaxed text-center md:text-left">
          Kami hadir untuk mendukung perjalanan bisnis Anda, dari langkah awal hingga mencapai kesuksesan. 
          Dengan solusi yang dirancang khusus untuk kebutuhan Anda, kami menjadi mitra andal yang selalu 
          siap membantu, memudahkan, dan mendorong pertumbuhan usaha Anda setiap saat.
        </p>

        {/* Placeholder for manual button insertion */}
        <div className="flex justify-center md:justify-start">
          <Button className="h-16 px-36 text-lg rounded-[30px]" href='/#features'>
            Learn More
          </Button>
        </div>
      </div>
    </div>
    </Section>
  );
};

export default HeroSection;