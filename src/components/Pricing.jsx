import Button from './button';
import { FaCheckCircle } from 'react-icons/fa';


const Pricing = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Pilih Paket yang Sesuai dengan Kebutuhan Bisnis Anda
          </h2>
          <p className="text-xl max-w-4xl mx-auto">
            Di Finora Labs, kami menawarkan solusi yang dapat disesuaikan dengan skala dan kebutuhan usaha Anda, 
            baik Anda baru memulai atau sudah memerlukan analisis finansial yang lebih mendalam. 
            Pilih paket yang sesuai dan kelola keuangan Anda dengan mudah dan efisien.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {/* Edukasi Card */}
          <div className="border border-black rounded-lg p-8 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2">Edukasi</h3>
            <h2 className="text-4xl font-bold mb-4">Rp. 24.900<span className="text-xl">/bulan</span></h2>
            <p className="text-lg mb-6">
              Untuk Anda yang ingin kontrol penuh dan insight finansial lebih mendalam.
            </p>
            <div className="space-y-4 mb-8">
              {['Akses ke Video Course Ekslusif', 
                'Kelas Online via Zoom 2x/bulan', 
                'Materi Praktis & Studi Kasus UMKM',
                'Akses Preview Beta Finora App dan memberikan masukan langsung'
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckCircle className="text-[#FC4A1A] mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            {/* Edukasi Card Button */}
            <div className="mt-auto">
              <Button
                className="w-full text-lg rounded-[30px] font-bold inline-flex justify-center items-center gap-2 py-3 px-6"
                onClick={() => window.open('https://wa.me/6289513912741', '_blank')}
              >
                
                <span>Hubungi Kami!</span>
              </Button>
            </div>
          </div>

          {/* Website Card */}
          <div className="border border-black rounded-lg p-8 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2">Website</h3>
            <h2 className="text-4xl font-bold mb-4">Rp. 99.900<span className="text-xl">/bulan</span></h2>
            <p className="text-lg mb-6">
              Solusi ampuh untuk UMKM yang siap berkembang Pesat
            </p>
            <div className="space-y-4 mb-8">
              {['Semua fitur edukasi',
                'Pembuatan website company profile UMKM',
                'Komunikasi Lansung dengan tim IT'
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckCircle className="text-[#FC4A1A] mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            {/* Button slot */}
            <div className="mt-auto">
              <Button
                className="w-full text-lg rounded-[30px] font-bold inline-flex justify-center items-center gap-2 py-3 px-6"
                onClick={() => window.open('https://wa.me/6289513912741', '_blank')}
              >
                
                <span>Hubungi Kami!</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
