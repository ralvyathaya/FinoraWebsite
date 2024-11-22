import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Section from './Section'
import Device from "../assets/images/device.png"
const FiturWebsite = () => {
  return (
    <Section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Top Section - Two Columns */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="order-2 md:order-1">
          <img 
            src={Device}
            alt="Business Profile" 
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center md:justify-start">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-center md:text-left">
            Bangun Profil Bisnis Profesional Anda Mulai Rp 99.999!
          </h2>
        </div>
      </div>

      {/* Bottom Section - Three Columns */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="flex gap-4">
          <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-green-500" />
          <div>
            <h3 className="text-xl font-bold mb-2">
              Website Company Profile yang Mudah Dikelola
            </h3>
            <p className="text-gray-600">
              Website ini dirancang untuk menampilkan bisnis Anda secara profesional dan mudah diperbarui, dari foto produk hingga deskripsi layanan.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-4">
          <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-green-500" />
          <div>
            <h3 className="text-xl font-bold mb-2">
              Server cepat dan stabil
            </h3>
            <p className="text-gray-600">
              Website Anda dihosting di server cepat dan handal untuk pengalaman pengguna yang lancar dan reputasi bisnis yang terjaga.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex gap-4">
          <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-green-500" />
          <div>
            <h3 className="text-xl font-bold mb-2">
              Optimal di mesin pencari
            </h3>
            <p className="text-gray-600">
              Website ini dioptimalkan agar mudah ditemukan di Google, meningkatkan peluang menjangkau pelanggan baru.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FiturWebsite
