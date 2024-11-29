import { BarChart, FileSpreadsheet, TrendingUp, Layers, Sliders } from 'lucide-react';
import BendaharaanImg from "../../../assets/images/bendaharaan.png";
import Section from '../../../components/Section';

const Bendaharaan = () => {
  const topFeatureCards = [
    {
      icon: <BarChart className="text-orange-500" size={24} />,
      title: "Tahu Nilai Inventori Anda",
      description: "Ketahui nilai inventaris bisnis Anda dalam satu tampilan, memberi pemahaman yang jelas tentang nilai aset yang Anda miliki."
    },
    {
      icon: <FileSpreadsheet className="text-orange-500" size={24} />,
      title: "Ekspor Data Seketika",
      description: "Dengan ekspor data ke CSV, Anda bisa langsung mengunduh data inventaris untuk laporan atau analisis lebih lanjut, membuat pengelolaan aset jadi lebih efisien dan profesional."
    },
    {
      icon: <Sliders className="text-orange-500" size={24} />,
      title: "Tomboh beralih antara 3 jenis item",
      description: "Atur tipe bendaharaan dari aset, modal, utang dengan mudah. Kelola dan kategorikan item keuangan Anda dengan fleksibilitas penuh."
    }
  ];

  const bottomFeatureCards = [
    {
      icon: <TrendingUp className="text-orange-500" size={24} />,
      title: "Aset Terbesar dalam Genggaman",
      description: "Identifikasi aset dengan nilai tertinggi untuk memprioritaskan manajemen dan pengawasan yang lebih optimal."
    },
    {
      icon: <Layers className="text-orange-500" size={24} />,
      title: "Update dan Kelola Data Aset Tanpa Repot",
      description: "Fitur lengkap untuk mengupdate data inventaris Anda – dari kategori, stok, hingga harga jual – semua dalam satu klik."
    }
  ];

  const FeatureCard = ({ icon, title, description }) => (
    <div className="flex items-start p-6 rounded-lg shadow-sm bg-[#2C2C2C]">
      <div className="mr-4 mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-n-1">
          {title}
        </h3>
        <p className="text-n-4">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <Section className="py-16 bg-[#222] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-n-1">
          Bendaharaan
        </h2>

        {/* Container for image and features */}
        <div className="flex flex-col md:flex-row items-stretch mb-8 gap-8">
          {/* Image Section - Left Side */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={BendaharaanImg || "/api/placeholder/600/400"}
              alt="Inventory Management"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Features Section - Right Side */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {/* Top Feature Cards */}
            {topFeatureCards.map((card, index) => (
              <FeatureCard 
                key={index} 
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Bottom Row of Features */}
        <div className="grid md:grid-cols-2 gap-6">
          {bottomFeatureCards.map((card, index) => (
            <FeatureCard 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Bendaharaan;