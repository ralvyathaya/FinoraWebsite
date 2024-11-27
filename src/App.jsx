import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import SupportedBy from "./components/SupportedBy";
import FiturWebsite from "./components/FiturWebsite";
import FiturEdukasi from "./components/FiturEdukasi";
import Footer from "./components/Footer";
import ComingSoonPage from "./components/ComingSoon";
import Pricing from "./components/Pricing";
import AppPreview from "./components/AppPreview";

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
      </Routes>
  );
};

export default App;


