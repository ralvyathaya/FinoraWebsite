import AppPreviewHeroSection from './components/AppPreviewHeroSection';
import PreviewFeature1 from './components/Dashboard'; // Adjust the path as necessary
import PreviewFeature2 from './components/HistoriTransaksi';
import PreviewFeature3 from './components/Bendaharaan'; 
import PreviewFeature4 from './components/ArusKas';
import PreviewFeature5 from './components/Xscore'; // Adjust the path as necessary



const AppPreview = () => {
  return (
    <div>
      {/* You can add a header or other components here */}
      <AppPreviewHeroSection />
      <PreviewFeature1 />
      <PreviewFeature2 />
      <PreviewFeature3 />
      <PreviewFeature4 />
      <PreviewFeature5 />
      {/* Add more components or sections as needed */}
    </div>
  );
};

export default AppPreview;
