import Button from "./button"
import PhoneImg from "../assets/images/phone.png"
import Section from "./Section";

const ComingSoonPage = () => {
  return (
    <Section customPaddings="p-0">
    <div className="flex min-h-screen bg-[#222] text-white">
      {/* Left side - Image container */}
      <div className="relative w-1/2">
        <div className="absolute inset-0 w-[60%] mx-auto">
          <img 
            src={PhoneImg}
            alt="Phone Preview" 
            className="w-auto h-screen object-cover object-top"
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <div className="max-w-xl">
          {/* Heading */}
          <h1 className="text-5xl font-bold mb-8">
            Coming Soon: Finora App
          </h1>

          {/* Description - First paragraph */}
          <p className="text-xl mb-4">
            Kelola Arus Kas, Hitung Keuangan, Pantau Aset – Semua di Satu Aplikasi
          </p>

          {/* Description - Second paragraph */}
          <p className="text-xl mb-8">
            Bersiaplah untuk kemudahan mengelola bisnis dengan Finora App. Dari pencatatan arus kas yang rapi, 
            kalkulator finansial pintar, hingga fitur pengelolaan aset yang komprehensif, semuanya dirancang 
            untuk mendorong UMKM Anda melaju lebih cepat.
          </p>

          {/* Button placeholder - you can customize this */}
          <Button className="bg-brand-primary h-16 px-24 text-lg rounded-[30px]" href="" >
            Lihat Lebih Lanjut
          </Button>
        </div>
      </div>
    </div>
    </Section>
  );
};

export default ComingSoonPage;