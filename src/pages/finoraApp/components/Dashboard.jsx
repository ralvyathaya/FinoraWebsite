import { FaCheckCircle } from 'react-icons/fa';
import DashboardImg from "../../../assets/images/dashboard.png";
import Section from '../../../components/Section';

const Dashboard = () => {
  return (
    <Section className="py-16 bg-[#222] text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">Finora App Dashboard</h2>

        {/* Dashboard and Features Wrapper */}
        <div className="max-w-4xl mx-auto">
          {/* Dashboard Image */}
          <div className="flex justify-center mb-12">
            <img 
              src={DashboardImg}
              alt="Finora App Dashboard" 
              className="w-full object-contain"
            />
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex items-start">
              <FaCheckCircle className="text-orange-500 w-6 h-6 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-2">Saldo dan Prediksi Keuangan</h3>
                <p className="text-base text-n-3">
                  Menyajikan saldo terkini dan prediksi saldo akhir bulan, memberikan gambaran real-time dan perkiraan keuangan jangka pendek.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <FaCheckCircle className="text-orange-500 w-6 h-6 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-2">Analisis Pemasukan dan Pengeluaran Bulanan</h3>
                <p className="text-base text-n-3">
                  Memantau pemasukan, pengeluaran, dan penjualan bulanan dengan indikator pertumbuhan serta persentase perubahan dibandingkan bulan sebelumnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Dashboard;
