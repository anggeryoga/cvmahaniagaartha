import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Star, Package, Users, TrendingUp, X } from 'lucide-react';
import { openWhatsAppWithRandomAdmin, openWhatsAppWithMessage } from '../utils/adminUtils';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  heroImage: string;
  rating: number;
  description: string;
  features: string[];
  includes: string[];
  targetMarket: string;
  estimatedRevenue: string;
}

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 'mybestea',
      name: 'Mybestea',
      category: 'Minuman',
      price: 'Rp 2.5 Juta',
      image: 'https://raw.githubusercontent.com/jafabogaartha/assets/refs/heads/main/My%20Bestea%20(2).jpeg',
      heroImage: 'https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.9,
      description: 'Paket usaha minuman teh premium dengan booth modern dan branding menarik. Cocok untuk area perkantoran, kampus, dan mall.',
      features: ['Booth portable modern', 'Mesin brewing otomatis', 'Kemasan branded premium', 'Resep rahasia 15 varian'],
      includes: ['Booth 2x2 meter', 'Peralatan lengkap', 'Bahan baku 1 bulan', 'Training barista', 'Marketing kit'],
      targetMarket: 'Mahasiswa, pekerja kantoran, pengunjung mall',
      estimatedRevenue: 'Rp 8-15 juta/bulan',
    },
    {
      id: 'you-need-mie',
      name: 'You Need Mie',
      category: 'Makanan',
      price: 'Rp 3.2 Juta',
      image: 'https://raw.githubusercontent.com/jafabogaartha/assets/refs/heads/main/You%20Need%20Mie%20(3).jpeg',
      heroImage: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.8,
      description: 'Franchise mie instan premium dengan topping melimpah dan cita rasa yang tak terlupakan. Konsep fast food modern.',
      features: ['Resep mie signature', 'Topping premium', 'Packaging unik', 'Sistem operasional mudah'],
      includes: ['Booth 2.5x2.5 meter', 'Kompor gas + tabung', 'Peralatan masak', 'Bahan baku 1 bulan', 'SOP lengkap'],
      targetMarket: 'Semua kalangan, terutama anak muda dan keluarga',
      estimatedRevenue: 'Rp 10-18 juta/bulan',
    },
    {
      id: 'mentoast',
      name: 'Mentoast',
      category: 'Makanan',
      price: 'Rp 2.8 Juta',
      image: 'https://raw.githubusercontent.com/jafabogaartha/assets/refs/heads/main/Mentoast%20(2).jpeg',
      heroImage: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.7,
      description: 'Konsep roti bakar modern dengan berbagai topping menarik. Menu sarapan dan cemilan favorit semua kalangan.',
      features: ['Roti premium quality', '20+ varian topping', 'Saus signature', 'Kemasan eco-friendly'],
      includes: ['Booth portable', 'Pemanggang roti', 'Peralatan lengkap', 'Bahan baku starter', 'Resep rahasia'],
      targetMarket: 'Pekerja, mahasiswa, keluarga',
      estimatedRevenue: 'Rp 7-12 juta/bulan',
    },
    {
      id: 'kopi-ibukota',
      name: 'Kopi Ibukota',
      category: 'Minuman',
      price: 'Rp 4.5 Juta',
      image: 'https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/Feed%20IG%20Kopi%20Ibukota%2001-6hsTUjyPGxMNOUJM8fGZpBsdIoXROk.jpg',
      heroImage: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.9,
      description: 'Coffee shop premium dengan konsep modern dan kualitas biji kopi terbaik. Dilengkapi mesin espresso profesional.',
      features: ['Mesin espresso semi-auto', 'Biji kopi premium', 'Menu signature drinks', 'Interior modern'],
      includes: ['Booth 3x3 meter', 'Mesin espresso', 'Grinder profesional', 'Bahan baku 2 bulan', 'Training barista'],
      targetMarket: 'Coffee lovers, pekerja kantoran, mahasiswa',
      estimatedRevenue: 'Rp 15-25 juta/bulan',
    },
    {
      id: 'esteh-ibukota',
      name: 'Esteh Ibukota',
      category: 'Minuman',
      price: 'Rp 2.3 Juta',
      image: 'https://raw.githubusercontent.com/jafabogaartha/assets/refs/heads/main/Esteh%20Ibukota%20(3).jpeg',
      heroImage: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.6,
      description: 'Es teh segar dengan berbagai varian rasa dan topping menarik. Minuman favorit untuk segala cuaca.',
      features: ['12 varian rasa', 'Topping beragam', 'Kemasan menarik', 'Harga terjangkau'],
      includes: ['Booth 2x2 meter', 'Dispenser es', 'Shaker set', 'Bahan baku 1 bulan', 'Resep lengkap'],
      targetMarket: 'Semua kalangan, terutama remaja dan dewasa muda',
      estimatedRevenue: 'Rp 6-10 juta/bulan',
    },
    {
      id: 'kentang-gantenk',
      name: 'Kentang Gantenk',
      category: 'Snack',
      price: 'Rp 2.8 Juta',
      image: 'https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/Desain%20Feed%20IG%20kentang%20ganteng%2020-kTMeVviLWJHbkfQK0juIinGYo5mopG.jpg',
      heroImage: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.7,
      description: 'Kentang goreng crispy dengan bumbu rahasia yang bikin nagih. Snack favorit anak muda dengan harga terjangkau.',
      features: ['Kentang premium', 'Bumbu rahasia 8 varian', 'Tekstur crispy tahan lama', 'Packaging menarik'],
      includes: ['Booth portable', 'Deep fryer', 'Peralatan masak', 'Bahan baku 1 bulan', 'Resep bumbu'],
      targetMarket: 'Anak muda, mahasiswa, keluarga',
      estimatedRevenue: 'Rp 8-14 juta/bulan',
    },
    {
      id: 'raja-steak',
      name: 'Raja Steak',
      category: 'Makanan',
      price: 'Rp 5.5 Juta',
      image: 'https://raw.githubusercontent.com/jafabogaartha/assets/refs/heads/main/Raja%20Steak%20(1).jpeg',
      heroImage: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.8,
      description: 'Steak premium dengan kualitas restaurant namun harga terjangkau. Konsep casual dining yang menguntungkan.',
      features: ['Daging premium quality', 'Saus signature', 'Plating profesional', 'Menu lengkap'],
      includes: ['Booth 3x3 meter', 'Grill pan set', 'Peralatan masak', 'Bahan baku 1 bulan', 'Training chef'],
      targetMarket: 'Keluarga, pasangan, food enthusiast',
      estimatedRevenue: 'Rp 18-30 juta/bulan',
    },
    {
      id: 'nice-coffee',
      name: 'Nice Coffee',
      category: 'Minuman',
      price: 'Rp 3.8 Juta',
      image: 'https://raw.githubusercontent.com/jafabogaartha/assets/refs/heads/main/Nice%20Coffee%20(2).jpeg',
      heroImage: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.7,
      description: 'Konsep coffee shop modern dengan menu beragam dan suasana cozy. Cocok untuk area strategis dengan traffic tinggi.',
      features: ['Menu coffee & non-coffee', 'Interior aesthetic', 'Sistem POS modern', 'Social media ready'],
      includes: ['Booth 2.5x2.5 meter', 'Mesin kopi', 'Furniture set', 'Bahan baku 1.5 bulan', 'Marketing support'],
      targetMarket: 'Milenial, pekerja, mahasiswa',
      estimatedRevenue: 'Rp 12-20 juta/bulan',
    },
    {
      id: 'seblak-express',
      name: 'Seblak Express',
      category: 'Makanan',
      price: 'Rp 2.6 Juta',
      image: 'https://raw.githubusercontent.com/jafabogaartha/assets/refs/heads/main/Seblak%20Express%20(2).jpeg',
      heroImage: 'https://images.pexels.com/photos/5737241/pexels-photo-5737241.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.6,
      description: 'Seblak pedas dengan berbagai level kepedasan dan topping melimpah. Menu favorit pecinta makanan pedas.',
      features: ['5 level kepedasan', 'Topping premium', 'Porsi mengenyangkan', 'Harga bersahabat'],
      includes: ['Booth 2x2 meter', 'Kompor gas', 'Peralatan masak', 'Bahan baku 1 bulan', 'Resep bumbu'],
      targetMarket: 'Pecinta pedas, mahasiswa, anak muda',
      estimatedRevenue: 'Rp 7-13 juta/bulan',
    },
    {
      id: 'chick-ichick',
      name: 'Chick Ichick',
      category: 'Makanan',
      price: 'Rp 4.2 Juta',
      image: 'https://raw.githubusercontent.com/jafabogaartha/assets/refs/heads/main/Chick%20Ichick%20(1).jpeg',
      heroImage: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.8,
      description: 'Ayam crispy dengan bumbu khas Korea yang viral. Konsep modern dengan cita rasa internasional.',
      features: ['Resep Korea authentic', 'Ayam premium', 'Saus signature', 'Packaging premium'],
      includes: ['Booth 2.5x2.5 meter', 'Deep fryer', 'Peralatan lengkap', 'Bahan baku 1 bulan', 'Training masak'],
      targetMarket: 'Anak muda, keluarga, K-food lovers',
      estimatedRevenue: 'Rp 14-22 juta/bulan',
    },
    {
      id: 'chickuruyuk',
      name: 'Chickuruyuk',
      category: 'Makanan',
      price: 'Rp 3.9 Juta',
      image: 'https://raw.githubusercontent.com/jafabogaartha/assets/refs/heads/main/Chickuruyuk%20(2).jpeg',
      heroImage: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.8,
      description: 'Ayam geprek dengan sambal level yang bisa disesuaikan. Menu hits yang selalu ramai pembeli.',
      features: ['10 level sambal', 'Ayam fillet jumbo', 'Nasi pulen', 'Lalapan segar'],
      includes: ['Booth 2.5x2.5 meter', 'Peralatan masak', 'Cobek batu', 'Bahan baku 1 bulan', 'SOP lengkap'],
      targetMarket: 'Pecinta pedas, mahasiswa, pekerja',
      estimatedRevenue: 'Rp 13-19 juta/bulan',
    },
    {
      id: 'tahu-nyonyor',
      name: 'Tahu Nyonyor',
      category: 'Makanan',
      price: 'Rp 2.4 Juta',
      image: 'https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/40%20Tahu%20Nyonyor-eoWYRiqLk3dMu81wS8JejVNlcXz0b2.jpg',
      heroImage: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.5,
      description: 'Tahu crispy dengan isian yang melimpah dan bumbu kacang yang gurih. Snack sehat dan mengenyangkan.',
      features: ['Tahu premium', 'Isian beragam', 'Bumbu kacang homemade', 'Harga ekonomis'],
      includes: ['Booth portable', 'Deep fryer mini', 'Peralatan masak', 'Bahan baku 1 bulan', 'Resep bumbu'],
      targetMarket: 'Semua kalangan, pecinta makanan sehat',
      estimatedRevenue: 'Rp 6-11 juta/bulan',
    }
  ];

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business Packages"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-600/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
            13 Paket Usaha
            <span className="block text-yellow-300">Siap Jalan</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-purple-100 animate-slide-up">
            Pilih paket usaha terbaik sesuai passion dan budget Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-primary px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg"
            >
              Lihat Semua Produk
            </button>
            <button 
              onClick={() => openWhatsAppWithMessage('saya ingin konsultasi untuk memilih paket usaha yang tepat.')}
              className="border-2 border-white text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full hover:bg-white hover:text-purple-primary transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center"
            >
              <MessageCircle className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pilih Paket Usaha Anda
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Setiap paket dilengkapi dengan booth, peralatan, bahan baku, dan training lengkap
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => window.location.href = '#'}
              >
                {/* Product Image */}
                <div className="relative h-64 sm:h-72 md:h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6">
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-white/90 text-purple-primary px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">{product.rating}</span>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-200 text-xs sm:text-sm opacity-90 line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-300 text-xs sm:text-sm">Mulai dari</span>
                        <p className="text-white text-base sm:text-lg md:text-xl font-bold">
                          {product.price}
                        </p>
                      </div>

                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                         openWhatsAppWithRandomAdmin(product.name);
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full transition-all duration-300 font-semibold flex items-center text-xs sm:text-sm"
                      >
                        <MessageCircle className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-4xl my-2 sm:my-4 max-h-[98vh] sm:max-h-[95vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative h-40 sm:h-48 md:h-64 lg:h-80">
              <img
                src={selectedProduct.heroImage}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button
                onClick={closeProductDetail}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </button>
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-6 md:left-6 text-white">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{selectedProduct.name}</h2>
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                  <span className="bg-purple-primary px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {selectedProduct.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <span className="text-xs sm:text-sm font-semibold">{selectedProduct.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Left Column */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Deskripsi</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Keunggulan</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-xs sm:text-sm md:text-base text-gray-600">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Target Market</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">{selectedProduct.targetMarket}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Paket Termasuk</h3>
                    <ul className="space-y-2">
                      {selectedProduct.includes.map((item, index) => (
                        <li key={index} className="flex items-start text-xs sm:text-sm md:text-base text-gray-600">
                          <Package className="w-3 h-3 sm:w-4 sm:h-4 text-purple-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-3 sm:p-4 md:p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-xs sm:text-sm md:text-base text-gray-600">Investasi</span>
                      <span className="text-base sm:text-lg md:text-2xl font-bold text-purple-primary">{selectedProduct.price}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <span className="text-xs sm:text-sm md:text-base text-gray-600">Estimasi Omset</span>
                      <span className="text-xs sm:text-sm md:text-lg font-semibold text-green-600">{selectedProduct.estimatedRevenue}</span>
                    </div>
                    
                    <button
                      onClick={() => openWhatsAppWithRandomAdmin(selectedProduct.name)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-full transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base flex items-center justify-center"
                    >
                      <MessageCircle className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      Konsultasi via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;