import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, X, Package, Users, TrendingUp, MessageCircle } from 'lucide-react';
import { openProductPage, openWhatsAppWithRandomAdmin } from '../utils/adminUtils';

interface Product {
  name: string;
  price: string;
  image: string;
  heroImage: string;
  category: string;
  rating: number;
  description: string;
  features: string[];
  includes: string[];
  targetMarket: string;
  estimatedRevenue: string;
}

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products = [
    {
      name: 'Mybestea',
      price: 'Rp 2.9 Juta',
      image: 'https://raw.githubusercontent.com/jafabogaartha/assets/refs/heads/main/My%20Bestea%20(2).jpeg',
      heroImage: 'https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Minuman',
      rating: 4.9,
      description: 'Paket usaha minuman teh premium dengan booth modern dan branding menarik. Cocok untuk area perkantoran, kampus, dan mall.',
      features: ['Booth portable modern', 'Mesin brewing otomatis', 'Kemasan branded premium', 'Resep rahasia 15 varian'],
      includes: ['Booth 2x2 meter', 'Peralatan lengkap', 'Bahan baku 1 bulan', 'Training barista', 'Marketing kit'],
      targetMarket: 'Mahasiswa, pekerja kantoran, pengunjung mall',
      estimatedRevenue: 'Rp 8-15 juta/bulan',
    },
    {
      name: 'You Need Mie',
      price: 'Rp 3.2 Juta',
      image: 'https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/Feed%20IG%20Mie%20Kekinian%20-%2050-wd5wEOd5VAp3yg73Qnjxwy4mpWCwBr.jpg',
      heroImage: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Makanan',
      rating: 4.8,
      description: 'Franchise mie instan premium dengan topping melimpah dan cita rasa yang tak terlupakan. Konsep fast food modern.',
      features: ['Resep mie signature', 'Topping premium', 'Packaging unik', 'Sistem operasional mudah'],
      includes: ['Booth 2.5x2.5 meter', 'Kompor gas + tabung', 'Peralatan masak', 'Bahan baku 1 bulan', 'SOP lengkap'],
      targetMarket: 'Semua kalangan, terutama anak muda dan keluarga',
      estimatedRevenue: 'Rp 10-18 juta/bulan',
    },
    {
      name: 'Kopi Ibukota',
      price: 'Rp 4.5 Juta',
      image: 'https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/Feed%20IG%20Kopi%20Ibukota%2001-6hsTUjyPGxMNOUJM8fGZpBsdIoXROk.jpg',
      heroImage: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Minuman',
      rating: 4.9,
      description: 'Coffee shop premium dengan konsep modern dan kualitas biji kopi terbaik. Dilengkapi mesin espresso profesional.',
      features: ['Mesin espresso semi-auto', 'Biji kopi premium', 'Menu signature drinks', 'Interior modern'],
      includes: ['Booth 3x3 meter', 'Mesin espresso', 'Grinder profesional', 'Bahan baku 2 bulan', 'Training barista'],
      targetMarket: 'Coffee lovers, pekerja kantoran, mahasiswa',
      estimatedRevenue: 'Rp 15-25 juta/bulan',
    },
    {
      name: 'Kentang Gantenk',
      price: 'Rp 2.8 Juta',
      image: 'https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/Desain%20Feed%20IG%20kentang%20ganteng%2020-kTMeVviLWJHbkfQK0juIinGYo5mopG.jpg',
      heroImage: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Snack',
      rating: 4.7,
      description: 'Kentang goreng crispy dengan bumbu rahasia yang bikin nagih. Snack favorit anak muda dengan harga terjangkau.',
      features: ['Kentang premium', 'Bumbu rahasia 8 varian', 'Tekstur crispy tahan lama', 'Packaging menarik'],
      includes: ['Booth portable', 'Deep fryer', 'Peralatan masak', 'Bahan baku 1 bulan', 'Resep bumbu'],
      targetMarket: 'Anak muda, mahasiswa, keluarga',
      estimatedRevenue: 'Rp 8-14 juta/bulan',
    }
  ];

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="py-20 bg-white" id="featured-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produk Unggulan
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Pilihan terbaik paket usaha dengan tingkat keberhasilan tertinggi
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openProductPage(product.name)}
            >
              {/* Background Image */}
              <div className="relative h-64 sm:h-80 md:h-96">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="bg-white/90 text-purple-primary px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {product.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">{product.rating}</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base opacity-90">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-300 text-xs sm:text-sm">Mulai dari</span>
                      <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                        {product.price}
                      </p>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openProductPage(product.name);
                      }}
                      className="bg-purple-primary hover:bg-purple-700 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 font-semibold flex items-center group-hover:scale-105 text-xs sm:text-sm md:text-base"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            to="/products"
            className="inline-block border-2 border-purple-primary text-purple-primary px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full hover:bg-purple-primary hover:text-white transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>

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
                      onClick={() => openProductPage(selectedProduct.name)}
                      className="w-full bg-purple-primary hover:bg-purple-700 text-white px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-full transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base flex items-center justify-center"
                    >
                      Lihat Detail Produk
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;