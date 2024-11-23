import { useState } from "react";
import { 
  StarIcon as SolidStarIcon, 
  StarIcon as OutlineStarIcon 
} from "@heroicons/react/24/solid";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon 
} from "@heroicons/react/24/outline";
import ProfilePlaceholder from "../assets/images/profile-placeholder.png";

const CustomerReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(null);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Pemilik Toko Kue di Jakarta",
      image: ProfilePlaceholder,
      rating: 5,
      headingText: "Kualitas Produk Luar Biasa!",
      reviewText: "Saya sangat puas dengan produk Finora. Kualitasnya konsisten dan pelayanannya sangat profesional.",
    },
    {
      id: 2,
      name: "Ahmad Rizki",
      title: "Pengusaha Katering di Bandung",
      image: ProfilePlaceholder,
      rating: 4.5,
      headingText: "Pelayanan Terbaik",
      reviewText: "Tim Finora sangat responsif dan membantu. Mereka selalu memberikan solusi terbaik untuk bisnis saya.",
    },
    {
      id: 3,
      name: "Linda Wijaya",
      title: "Pemilik Restoran di Surabaya",
      image: ProfilePlaceholder,
      rating: 4,
      headingText: "Rekomendasi Terpercaya",
      reviewText: "Finora adalah partner terpercaya untuk bisnis kuliner. Sangat merekomendasikan!",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<SolidStarIcon key={`star-${i}`} className="h-5 w-5 text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<OutlineStarIcon key="half-star" className="h-5 w-5 text-yellow-400" />);
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<OutlineStarIcon key={`empty-star-${i}`} className="h-5 w-5 text-gray-300" />);
    }
    return stars;
  };

  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => {
    if (!startX) return;
    const endX = e.touches[0].clientX;
    const deltaX = startX - endX;

    if (deltaX > 50) {
      setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      setStartX(null);
    } else if (deltaX < -50) {
      setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      setStartX(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">
        Review dari Pelanggan Finora
      </h2>

      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="grid md:flex justify-center items-center gap-4 overflow-hidden">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              onClick={() => setCurrentSlide(index)}
              className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-500
                ${currentSlide === index ? "scale-105 z-10" : "scale-90 opacity-70"}
                ${currentSlide === index ? "w-96" : "w-80"}
                transform
                ${index !== currentSlide ? "hidden md:block" : ""}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-[72px] h-[72px] rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.title}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">{renderStars(review.rating)}</div>
              <h4 className="font-bold text-xl mb-2">{review.headingText}</h4>
              <p className="text-base text-gray-700">{review.reviewText}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
          className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 md:left-4"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))}
          className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 md:right-4"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CustomerReview;