
import { Activity, PieChart, TrendingUp } from 'lucide-react';
import ArusKasImg from "../../../assets/images/operasional.png";
import Section from '../../../components/Section';

const CashFlowFeatureSection = () => {
  const featureCards = [
    {
      icon: <PieChart className="text-blue-500" size={36} />,
      title: "Aktivitas Pendanaan",
      description: "Pantau sumber kas dari pendanaan dan pembayaran utang, termasuk pinjaman dan tambahan modal dari pemilik."
    },
    {
      icon: <TrendingUp className="text-green-500" size={36} />,
      title: "Aktivitas Investasi",
      description: "Catat semua transaksi investasi Anda, seperti pembelian atau penjualan aset."
    },
    {
      icon: <Activity className="text-purple-500" size={36} />,
      title: "Aktivitas Operasional",
      description: "Pencatatan penerimaan dan pengeluaran kas sehari-hari untuk memastikan bisnis Anda tetap likuid."
    }
  ];

  return (
    <Section className="py-16 bg-[#222] text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img 
            src={ArusKasImg || "/api/placeholder/600/400"} 
            alt="Cash Flow Management" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-n-3 mb-8 leading-tight">
            Kelola arus kas Anda dengan mudah melalui tiga komponen utama
          </h2>

          {/* Feature Cards */}
          <div className="space-y-6">
            {featureCards.map((card, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mr-4 mt-1">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-n-3">
                    {card.title}
                  </h3>
                  <p className="text-white">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Section>
  );
};

export default CashFlowFeatureSection;