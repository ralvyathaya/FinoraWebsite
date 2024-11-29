import KalkulatorXScore from "../../../assets/images/analisisKeuangan.png";
import Section from '../../../components/Section';

const ZmijewskiAnalysisSection = () => {
  return (
    <Section className="py-16 bg-[#222] text-white">
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-n-3 mb-6 leading-tight">
          Analisis keuangan yang cerdas dengan menggunakan rumus Zmijewski (X-Score) untuk menilai kesehatan finansial bisnis Anda
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto">
          Output analisis akan disertai rekomendasi strategis untuk meningkatkan kesehatan finansial, baik untuk bisnis yang berisiko maupun yang sehat.
        </p>

        {/* Image Section */}
        <div className="w-full mt-8">
          <img 
            src={ KalkulatorXScore|| "/api/placeholder/1200/600"} 
            alt="Zmijewski Financial Analysis" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
    </Section>
  );
};

export default ZmijewskiAnalysisSection;