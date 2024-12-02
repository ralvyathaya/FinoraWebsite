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

const HeroSection = () => {
  // Array of hero images
  const heroImages = [Hero1, Hero2, Hero3, Hero4, Hero5];
 
  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
  // State to manage transition effect
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Effect to cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger transition effect
      setIsTransitioning(true);
     
      // After a short delay, change the image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % heroImages.length
        );
        setIsTransitioning(false);
      }, 500); // Slightly longer to allow full transition

    }, 5000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <Section id="home">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16 md:py-20 lg:py-24">
        {/* Image Container with Polaroid and Transition Effects */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12 relative">
          {/* Polaroid-like Transition Overlay */}
          <AnimatePresence>
            {isTransitioning && (
              <motion.div
                key="photo-transition"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  backgroundColor: ['rgba(255,255,255,0)']
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.5,
                  times: [0, 0.3, 0.7, 1],
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 10,
                  pointerEvents: 'none'
                }}
              />
            )}
          </AnimatePresence>
         
          {/* Polaroid-style Image Container */}
          <motion.div 
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
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
       
        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h1 className="text-3xl md:text-6xl font-bold text-n-12 mb-4 md:mb-6 leading-tight text-center md:text-left">
            Teman Setia 🤝 Usaha Anda 
          </h1>
         
          <p className="text-base md:text-xl text-n-6 mb-6 md:mb-8 leading-relaxed text-center md:text-left">
            Kami hadir untuk mendukung perjalanan bisnis Anda, dari langkah awal hingga mencapai kesuksesan.
            Dengan solusi yang dirancang khusus untuk kebutuhan Anda, kami menjadi mitra andal yang selalu
            siap membantu, memudahkan, dan mendorong pertumbuhan usaha Anda setiap saat.
          </p>
         
          <div className="flex justify-center md:justify-start">
            <Button
              className="h-16 px-36 text-lg rounded-[30px]"
              href='/#features'
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;