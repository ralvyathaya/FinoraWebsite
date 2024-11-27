import { useState } from 'react';
import Button from './button';
import { FaCheckCircle } from 'react-icons/fa';
import Section from './Section';

const Pricing = () => {
  const [paymentPlan, setPaymentPlan] = useState('1 bulan');

  const pricingOptions = {
    '1 bulan': { edu: 24900, web: 99900 },
    '3 bulan': { edu: 69900, web: 279900, discount: '10%' },
    '6 bulan': { edu: 129900, web: 519900, discount: '15%' },
    '1 tahun': { edu: 239900, web: 959900, discount: '20%' },
  };

  const handlePlanChange = (plan) => {
    setPaymentPlan(plan);
  };

  // Generate dynamic message based on plan and type
  const generateMessage = (type) => {
    return `Saya tertarik dengan paket ${type} selama ${paymentPlan} ini. Bisa bantu prosesnya?`;
  };

  return (
    <Section id="pricing">
      <div className="w-full py-4 px-4">
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

          {/* Payment Plan Toggle */}
          <div className="flex justify-center mb-8">
            {Object.keys(pricingOptions).map((plan) => (
              <button
                key={plan}
                className={`px-4 py-2 mx-2 rounded-full ${paymentPlan === plan ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handlePlanChange(plan)}
              >
                {plan}
              </button>
            ))}
          </div>

          {/* Pricing Cards Container */}
          <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {/* Edukasi Card */}
            <div className="border border-black rounded-lg p-8 hover:shadow-xl transition duration-300 transform hover:scale-105 active:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 border-2 border-transparent rounded-lg animate-gradient-border"></div>
              <h3 className="text-2xl font-bold mb-2">Edukasi</h3>
              <h2 className="text-4xl font-bold mb-4">
                Rp. {pricingOptions[paymentPlan].edu.toLocaleString()}<span className="text-xl"></span>
                {pricingOptions[paymentPlan].discount && (
                  <span className="text-sm text-red-500 line-through ml-2">
                    Rp. {(pricingOptions['1 bulan'].edu * (paymentPlan === '3 bulan' ? 3 : paymentPlan === '6 bulan' ? 6 : 12)).toLocaleString()}
                  </span>
                )}
              </h2>
              <p className="text-lg mb-6">
                Untuk Anda yang ingin kontrol penuh dan insight finansial lebih mendalam.
              </p>
              <div className="space-y-4 mb-8">
                {['Akses ke Video Course Ekslusif', 
                  'Kelas Online via Zoom 2x/Bulan', 
                  'Materi Praktis & Studi Kasus UMKM',
                  'Akses Preview Beta Finora App dan memberikan masukan langsung',
                  'Bonus Instagram Company Profile Template'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#FC4A1A] mr-2 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              {/* Edukasi Card Button */}
              <div className="mt-auto">
                <Button
                  className="w-full text-lg rounded-[30px] font-bold inline-flex justify-center items-center gap-2 py-3 px-6"
                  onClick={() => window.open(`https://wa.me/62881082227649?text=${encodeURIComponent(generateMessage('Edukasi'))}`, '_blank')}
                >
                  <span>Hubungi Kami!</span>
                </Button>
              </div>
            </div>

            {/* Website Card */}
            <div className="border border-black rounded-lg p-8 hover:shadow-xl transition duration-300 transform hover:scale-105 active:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 border-2 border-transparent rounded-lg animate-gradient-border"></div>
              <h3 className="text-2xl font-bold mb-2">Website</h3>
              <h2 className="text-4xl font-bold mb-4">
                Rp. {pricingOptions[paymentPlan].web.toLocaleString()}<span className="text-xl"></span>
                {pricingOptions[paymentPlan].discount && (
                  <span className="text-sm text-red-500 line-through ml-2">
                    Rp. {(pricingOptions['1 bulan'].web * (paymentPlan === '3 bulan' ? 3 : paymentPlan === '6 bulan' ? 6 : 12)).toLocaleString()}
                  </span>
                )}
              </h2>
              <p className="text-lg mb-6">
                Solusi ampuh untuk UMKM yang siap berkembang Pesat
              </p>
              <div className="space-y-4 mb-8">
                {['Semua fitur edukasi',
                  'Pembuatan website company profile UMKM',
                  'Komunikasi Lansung dengan tim IT'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#FC4A1A] mr-2 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              {/* Website Card Button */}
              <div className="mt-auto">
                <Button
                  className="w-full text-lg rounded-[30px] font-bold inline-flex justify-center items-center gap-2 py-3 px-6"
                  onClick={() => window.open(`https://wa.me/62881082227649?text=${encodeURIComponent(generateMessage('Website'))}`, '_blank')}
                >
                  <span>Hubungi Kami!</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
