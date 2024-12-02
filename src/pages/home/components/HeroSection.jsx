import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from "../../../components/button";
import Section from "../../../components/Section";

// Import all hero images
import Hero1 from "../../../assets/images/UMKM1_11zon.jpg";
import Hero2 from "../../../assets/images/UMKM3_11zon.jpg";
import Hero3 from "../../../assets/images/UMKM4_11zon.jpg";
import Hero4 from "../../../assets/images/UMKM5_11zon.jpg";
import Hero5 from "../../../assets/images/UMKM6_11zon.jpg";

// Import video
import HeroVideo from "../../../assets/video/FinoraVideo.mp4";

const HeroSection = () => {
  const heroImages = [Hero1, Hero2, Hero3, Hero4, Hero5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % heroImages.length
        );
        setIsTransitioning(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <Section id="home" className="relative w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImages[currentImageIndex]}
          className="w-full h-full object-cover filter brightness-75"
        >
          <source src={HeroVideo} type="video/mp4" />
          {/* Fallback image */}
          <img
            src={heroImages[currentImageIndex]}
            alt="Fallback Hero Background"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-grain opacity-50" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16 md:py-20 lg:py-24">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <AnimatePresence>
            {isTransitioning && (
              <motion.div
                key="photo-transition"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  backgroundColor: ["rgba(255,255,255,0)"],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  times: [0, 0.3, 0.7, 1],
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 10,
                  pointerEvents: "none",
                }}
              />
            )}
          </AnimatePresence>

          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.95, rotate: 2, top: '10%' }}
            animate={{ opacity: 1, scale: 1, rotate: 2, top: '10%' }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 shadow-lg rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
          >
            <img
              src={heroImages[currentImageIndex]}
              alt={`Business Support Hero ${currentImageIndex + 1}`}
              className="w-full h-auto md:h-[600px] object-cover rounded-lg"
            />
            <p className="text-center text-lg py-4 mt-2 text-n-13 font-code">
              Pasar Gede, Solo, Indonesia 🇮🇩
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 md:pl-12">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight text-center md:text-left text-shadow">
            Teman Setia 🤝 Usaha Anda
          </h1>

          <p className="text-base md:text-xl text-white mb-6 md:mb-8 leading-relaxed text-center md:text-left text-shadow">
            Kami hadir untuk mendukung perjalanan bisnis Anda, dari langkah
            awal hingga mencapai kesuksesan. Dengan solusi yang dirancang
            khusus untuk kebutuhan Anda, kami menjadi mitra andal yang selalu
            siap membantu, memudahkan, dan mendorong pertumbuhan usaha Anda
            setiap saat.
          </p>

          <div className="flex justify-center md:justify-start">
            <Button className="h-16 px-36 text-lg rounded-[30px]" href="/#features">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
