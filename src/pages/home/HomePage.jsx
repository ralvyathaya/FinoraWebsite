import Header from "./components/Header";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import SupportedBy from "./components/SupportedBy";
import FiturWebsite from "./components/FiturWebsite";
import FiturEdukasi from "./components/FiturEdukasi";
import Footer from "./components/Footer";
import ComingSoonPage from "./components/ComingSoon";
import Pricing from "./components/Pricing";
import CustomerReview from "./components/CustomerReview";

const HomePage = () => (
  <>
    <Header />
    <HeroSection />
    <SupportedBy />
    <About />
    <FiturWebsite />
    <FiturEdukasi />
    <CustomerReview />
    <Pricing />
    <ComingSoonPage />
    <Footer />
  </>
);

export default HomePage;
