import React from 'react';
import { DollarSign, TrendingUp, Wrench, GraduationCap, Users, Gift } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Modal Terjangkau',
      description: 'Anda bisa memilih bisnis kuliner yang murah dengan modal yang terjangkau'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Produknya Laris',
      description: 'Produk bisnis kuliner kami terbukti laris manis dan disukai banyak orang karena unik dan enak'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Mudah Dijalankan',
      description: 'Disiapkan peralatan, bahan baku, kemasan dan bahan promosi secara langsung sehingga mitra bisa langsung dijalankan'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Training Memasak',
      description: 'Diusahakan memasakan dari nol hingga bisa menghasilkan masakan yang enak dan layak jual melalui tutorial online maupun offline'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Pembinaan Bisnis',
      description: 'Mitra akan mendapatkan pembinaan bisnis secara berkelanjutan hingga bisnisnya berjalan tumbuh dan menghasilkan'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'No Royalty Fee',
      description: 'Tidak ada biaya royalti maupun biaya franchise, keuntungan yang anda terima 100% milik anda'
    }
  ];

  return (
    <section className="py-20 bg-purple-50" id="master-kuliner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-purple-primary font-semibold text-sm sm:text-base md:text-lg mb-2"></p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Memilih Kami?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="relative mx-auto w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-purple-primary rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl w-full h-full flex items-center justify-center text-purple-primary group-hover:scale-110 transition-transform duration-300 shadow-lg [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-primary transition-colors duration-300 px-2">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;