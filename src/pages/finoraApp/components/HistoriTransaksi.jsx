import Section from '../../../components/Section';
import HistoriTransaksiImg from "../../../assets/images/historiTransaksi.png";

const HistoriTransaksi = ( ) => {
  return (
    <Section className="py-16 bg-[#222] text-white">
    <div className="max-w-[1000px] mx-auto">
      {/* Image container - full width, responsive height */}
      <div className="w-full h-auto">
        <img 
          src={HistoriTransaksiImg} 
          alt="Feature Illustration" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Text container - centered, responsive text */}
      <div className="w-full mx-auto px-4 py-6 text-center">
        <p className="text-4xl font-bold text-n-3">
          Menampilkan daftar transaksi terbaru secara ringkas untuk memudahkan pelacakan aktivitas finansial.
        </p>
      </div>
    </div>
    </Section>
  );
};

export default HistoriTransaksi;