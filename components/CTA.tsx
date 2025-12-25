import React from 'react';
import { Reveal } from './ui/Reveal';

const CTA: React.FC = () => {
  return (
    <section className="px-4 py-20">
      <Reveal variant="blur-in">
        <div className="container mx-auto relative rounded-[40px] overflow-hidden bg-bart-black text-white">
          {/* Animated Gradient Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#333_0%,_#050505_70%)]"></div>
          
          <div className="relative z-10 py-32 px-8 text-center flex flex-col items-center">
            <h2 className="font-serif text-5xl md:text-8xl mb-8 mix-blend-difference">
              Hayalden <span className="italic text-gray-500">Gerçeğe</span>
            </h2>
            <p className="font-sans text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light">
              Yaşam alanınız sizin hikayenizi anlatmayı hak ediyor. Birlikte tasarlayalım.
            </p>

            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden rounded-full bg-white text-bart-black transition-all duration-300 hover:w-64 hover:bg-gray-200"
            >
              <span className="font-sans text-sm font-bold tracking-widest uppercase">Proje Başlat</span>
              <div className="absolute right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                →
              </div>
            </a>
          </div>
          
          {/* Decorative blurs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]"></div>
        </div>
      </Reveal>
    </section>
  );
};

export default CTA;