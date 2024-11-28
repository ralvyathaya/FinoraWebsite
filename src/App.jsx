import { Routes, Route } from 'react-router-dom';

import Header from "./pages/home/components/Header";
import About from "./pages/home/components/About";
import HeroSection from "./pages/home/components/HeroSection";
import SupportedBy from "./pages/home/components/SupportedBy";
import FiturWebsite from "./pages/home/components/FiturWebsite";
import FiturEdukasi from "./pages/home/components/FiturEdukasi";
import Footer from "./pages/home/components/Footer";
import ComingSoonPage from "./pages/home/components/ComingSoon";
import Pricing from "./pages/home/components/Pricing";
import AppPreview from "./pages/finoraApp/AppPreview";
import ThankYou from "./components/ThankYou";

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

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPreview />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
  );
};

export default App;


