import Edukasi from "../../../assets/images/Edukasi.png";
import Section from "../../../components/Section";

const FiturEdukasi = () => {
  return (
    <Section className="w-full min-h-screen px-6 md:px-20 lg:px-[80px] py-12 flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Image */}
      <div className="md:flex-[0.7] w-full h-auto md:h-[550px]">
        <img 
          src={Edukasi}
          alt="Edukasi Bisnis" 
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    {/* Contents */}
      <div className="md:flex-1 flex flex-col justify-center text-center md:text-left max-w-[550px]">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Upgrade Bisnis Anda dengan Edukasi Praktis!
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Bangun keterampilan dan strategi bisnis yang relevan lewat video course berkualitas dan kelas online bersama para profesional berpengalaman. Akses ilmu yang Anda butuhkan, kapan saja, di mana saja—khusus dirancang untuk mendorong pertumbuhan UMKM!
        </p>
      </div>

     
    </Section>
  );
};

export default FiturEdukasi;
