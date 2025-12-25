import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  initial: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Neslihan Arık",
    rating: 5,
    date: "4 ay önce",
    text: "Ürün kalitesi gerçekten mükemmel! Uzun süredir böyle sağlam ve şık bir mobilya arıyordum. Fiyat/performans açısından da çok memnun kaldım. Özellikle personeller çok ilgiliydi. Her soruma sabırla yanıt verdiler.",
    initial: "N",
    color: "bg-amber-500"
  },
  {
    id: 2,
    name: "Batıkan Şaşman",
    rating: 5,
    date: "3 ay önce",
    text: "Mobilyalarımız tam istediğimiz gibi, hem kalite hem de tasarım açısından çok memnun kaldık. İsteklerimizi dikkatle dinleyip çözüm odaklı davrandıkları için ayrıca teşekkür ederiz. Başka mobilyacı gezmenize gerek bile yok. Gönül rahatlığıyla tavsiye ederim.",
    initial: "B",
    color: "bg-rose-500"
  },
  {
    id: 3,
    name: "Hasan Öztürk",
    rating: 5,
    date: "2 ay önce",
    text: "Uzun bir mağaza gezisinden sonra firmayı ziyaret ettim. Firma yetkilisi Baran bey tarafından karşılandım. Koltuk takımı beğendik. Almaya karar verdik. Sözlerde duruldu. Memnun olarak alışverişi tamamladık. Ürünle ilgili daha sonra sıkıntı çıkması durumunda ürünün arkasında duracaklarına eminim. Güvenle alışveriş yapılır.",
    initial: "H",
    color: "bg-emerald-500"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 px-6 bg-bart-black overflow-hidden">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              Google Yorumları
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-white leading-[0.9] tracking-tight">
              Müşterilerimiz <br />
              <span className="italic text-gray-500">Ne Diyor?</span>
            </h2>
          </div>
        </Reveal>

        {/* Google Rating Badge */}
        <Reveal delay={100}>
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-xl">5.0</span>
                <StarRating rating={5} />
              </div>
              <span className="text-gray-400 text-sm">Google'da</span>
            </div>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={150 * (index + 1)}>
              <div
                className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 ${activeIndex === index ? 'ring-2 ring-white/20' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <StarRating rating={testimonial.rating} />
                      <span className="text-gray-500 text-xs">{testimonial.date}</span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Google Icon */}
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-gray-500 text-xs">Google'da doğrulanmış yorum</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Link */}
        <Reveal delay={600}>
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/B'art+Home/@38.3853873,27.1318077,17z/data=!4m8!3m7!1s0x14bbdfb8537ff2b5:0x50aba57280e5675e!8m2!3d38.3853873!4d27.1343826!9m1!1b1!16s%2Fg%2F11vpryqdjy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
            >
              <span>Tüm yorumları Google'da görüntüle</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
