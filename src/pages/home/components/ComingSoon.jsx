import Button from "../../../components/button"
import PhoneImg from "../../../assets/images/phone.png"
import Section from "../../../components/Section";

const ComingSoonPage = () => {
  return (
    <Section customPaddings="p-0">
      <div className="flex min-h-screen bg-[#222] text-white flex-col-reverse md:flex-row">
        {/* Image container - Reposition for mobile */}
        <div className="relative h-[50vh] md:h-auto md:w-1/2 bottom-0">
          <div className="absolute inset-0 w-full md:w-[60%] mx-auto">
            <img 
              src={PhoneImg}
              alt="Phone Preview" 
              className="w-full h-full md:h-screen object-contain md:object-cover object-bottom md:object-top"
            />
          </div>
        </div>

        {/* Content section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 md:px-16">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              Coming Soon: Finora App
            </h1>

            <p className="text-lg md:text-xl mb-4">
              Kelola Arus Kas, Hitung Keuangan, Pantau Aset – Semua di Satu Aplikasi
            </p>

            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Bersiaplah untuk kemudahan mengelola bisnis dengan Finora App. Dari pencatatan arus kas yang rapi, 
              kalkulator finansial pintar, hingga fitur pengelolaan aset yang komprehensif, semuanya dirancang 
              untuk mendorong UMKM Anda melaju lebih cepat.
            </p>

            <Button 
                className="bg-brand-primary h-12 md:h-16 px-12 md:px-24 text-base md:text-lg rounded-[30px] 
                            hover:shadow-lg hover:shadow-white/50 
                            hover:text-white 
                            focus:outline-none transition-all duration-300"
                href="/app"
                >
                Lihat Lebih Lanjut
                </Button>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default ComingSoonPage;