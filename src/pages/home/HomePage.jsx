import Header from "./components/Header";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import SupportedBy from "./components/SupportedBy";
import FiturWebsite from "./components/FiturWebsite";
import FiturEdukasi from "./components/FiturEdukasi";
import Footer from "./components/Footer";
import ComingSoonPage from "./components/ComingSoon";
import Pricing from "./components/Pricing";

const HomePage = () => (
  <>
    <Header />
    <HeroSection />
    <SupportedBy />
    <About />
    <FiturWebsite />
    <FiturEdukasi />
    {/*Customer Review*/}
    <Pricing />
    <ComingSoonPage />
    <Footer />
  </>
);

export default HomePage;
