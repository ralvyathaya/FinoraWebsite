import { Check } from 'lucide-react';
import BendaharaanImg from "../../../assets/images/bendaharaan.png";
import Section from '../../../components/Section';

const Bendaharaan = () => {
  return (
    <Section className="py-16 bg-[#222] text-white">
    <div className="container mx-auto px-4 py-12 ">
      {/* Main heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-n-1">
        Bendaharaan
      </h2>

      {/* Container for image and first set of features */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        {/* Image Section - Left Side */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img 
            src={BendaharaanImg || "/api/placeholder/600/400"} 
            alt="Inventory Management" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Features Section - Right Side */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* First Feature Card */}
          <div className="flex items-start  p-6 rounded-lg shadow-sm">
            <Check className="text-orange-500 mr-4 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2 text-n-1">
                Tahu Nilai Inventori Anda
              </h3>
              <p className="text-n-4">
                Ketahui nilai inventaris bisnis Anda dalam satu tampilan, memberi pemahaman yang jelas tentang nilai aset yang Anda miliki.
              </p>
            </div>
          </div>

          {/* Second Feature Card */}
          <div className="flex items-start  p-6 rounded-lg shadow-sm">
            <Check className="text-orange-500 mr-4 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2 text-n-1">
                Ekspor Data Seketika
              </h3>
              <p className="text-n-4">
                Dengan ekspor data ke CSV, Anda bisa langsung mengunduh data inventaris untuk laporan atau analisis lebih lanjut, membuat pengelolaan aset jadi lebih efisien dan profesional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Features */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* First Feature Card */}
        <div className=" p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2 text-n-1">
            Aset Terbesar dalam Genggaman
          </h3>
          <p className="text-n-4">
            Identifikasi aset dengan nilai tertinggi untuk memprioritaskan manajemen dan pengawasan yang lebih optimal.
          </p>
        </div>

        {/* Second Feature Card */}
        <div className=" p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2 text-n-1">
            Update dan Kelola Data Aset Tanpa Repot
          </h3>
          <p className="text-n-4">
            Fitur lengkap untuk mengupdate data inventaris Anda – dari kategori, stok, hingga harga jual – semua dalam satu klik.
          </p>
        </div>
      </div>
    </div>
    </Section>
  );
};

export default Bendaharaan;