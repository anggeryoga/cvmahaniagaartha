import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Mulai Usaha? Pilih Paketnya,{' '}
                <span className="text-purple-primary">Gasskeun</span> Sekarang!
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Paket usaha siap jalan lengkap dengan booth, bahan awal, dan branding menarik. 
                Mulai dari Rp 2 jutaan saja
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-primary text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full hover:bg-purple-700 transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center group"
              >
                Lihat Produk Unggulan
                <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.open('https://www.youtube.com/@paketusahawaralaba', '_blank')}
                className="border-2 border-purple-primary text-purple-primary px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full hover:bg-purple-primary hover:text-white transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center"
              >
                <Play className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Lihat Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-primary mr-1 sm:mr-2" />
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">13</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Paket Usaha</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-primary mr-1 sm:mr-2" />
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">9300+</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Pelanggan</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-primary mr-1 sm:mr-2" />
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Rating</p>
              </div>
            </div>
          </div>

{/* Right Content - Hero Video */}
<div className="relative animate-float lg:block">
  <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
    <iframe
      src="https://www.youtube-nocookie.com/embed/mOqfH9kQ3eY?si=YAP3gUj8UmKxBz5O&autoplay=1&mute=1&loop=1&playlist=mOqfH9kQ3eY"
      title="Booth Usaha Modern"
      className="w-full h-full object-cover rounded-3xl"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>

    {/* Overlay Content */}
    <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
        <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm sm:text-base md:text-lg">Tanpa Fee</h3>
            <p className="text-xs sm:text-sm text-white/80">Buka Usaha Tanpa Bagi Hasil dengan Keuntungan Melimpah</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-white/80">Mulai dari</span>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Rp 2.5 Juta</span>
        </div>
      </div>
    </div>
  </div>
</div>

            {/* Floating Elements */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-purple-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;