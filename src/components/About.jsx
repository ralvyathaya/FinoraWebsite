import Feature1 from '../assets/images/feature1.jpeg';
import Feature2 from '../assets/images/feature2.jpeg';
import Feature3 from '../assets/images/feature3.jpeg';
import Section from './Section';

const ProblemCard = ({ imagePath, title }) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-n-6 p-8 flex flex-col items-center transition-transform hover:-translate-y-2">
      <div className="mb-6">
        <img 
          src={imagePath} 
          alt={title}
          className="w-64 h-64 object-cover rounded-2xl"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-n-12 text-center mb-4">
        {title}
      </h3>
    </div>
  );
};

const AboutSection = () => {
  const problems = [
    {
      title: "Manajemen Keuangan yang Lemah",
      image: Feature1
    },
    {
      title: "Akses Terbatas ke Bimbingan dan Konsultasi Bisnis",
      image: Feature2
    },
    {
      title: "Kurangnya Pemahaman Teknologi dan Laporan Keuangan",
      image: Feature3
    }
  ];

  return (
    <Section id="about" customPaddings="pb-12">
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Heading Section */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-n-12 mb-6 leading-tight">
          Kenapa Kami Memulai Finora?
        </h2>
        <p className="text-lg md:text-xl text-n-6 leading-relaxed">
          UMKM adalah penggerak ekonomi Indonesia. Kami hadir untuk mendukung 
          pertumbuhan mereka dengan solusi lengkap: edukasi bisnis, pencatatan 
          keuangan, analisis laporan, dan pembuatan website. Finora membantu 
          UMKM berkembang dan lebih siap bersaing di era digital.
        </p>
      </div>

      {/* Problem Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <ProblemCard 
            key={index}
            imagePath={problem.image}
            title={problem.title}
          />
        ))}
      </div>
    </div>
    </Section>
  );
};

export default AboutSection;