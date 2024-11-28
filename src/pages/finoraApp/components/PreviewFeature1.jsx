// Import FontAwesome for the checkmark icon
import { FaCheckCircle } from 'react-icons/fa';

const PreviewFeature1 = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">Finora App Dashboard</h2>

        {/* Dashboard Image */}
        <div className="flex justify-center mb-12">
          <img 
            src="path/to/your/dashboard-image.jpg" 
            alt="Finora App Dashboard" 
            className="w-full max-w-4xl object-contain"
          />
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex items-start">
            <FaCheckCircle className="text-orange-500 w-6 h-6 mr-4 mt-1" />
            <div>
              <h3 className="text-lg font-bold mb-2">Saldo dan Prediksi Keuangan</h3>
              <p className="text-base text-gray-700">
                Menyajikan saldo terkini dan prediksi saldo akhir bulan, memberikan gambaran real-time dan perkiraan keuangan jangka pendek.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start">
            <FaCheckCircle className="text-orange-500 w-6 h-6 mr-4 mt-1" />
            <div>
              <h3 className="text-lg font-bold mb-2">Analisis Pemasukan dan Pengeluaran Bulanan</h3>
              <p className="text-base text-gray-700">
                Memantau pemasukan, pengeluaran, dan penjualan bulanan dengan indikator pertumbuhan serta persentase perubahan dibandingkan bulan sebelumnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewFeature1;
