import Header from "./components/Header";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import SupportedBy from "./components/SupportedBy";
import FiturWebsite from "./components/FiturWebsite";
import FiturEdukasi from "./components/FiturEdukasi";
import CustomerReview from "./components/CustomerReview";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroSection />
      <SupportedBy />
      <About />
      <FiturWebsite />
      <FiturEdukasi />
      <CustomerReview />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;


