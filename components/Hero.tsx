import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal, TextReveal } from './ui/Reveal';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 flex items-center overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-6 relative z-10 flex flex-col justify-center">
          <Reveal delay={200} variant="blur-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bart-black/10 bg-white/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-bart-black animate-pulse"></span>
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-bart-black">
                1992'den Beri
              </span>
            </div>
          </Reveal>

          <h1 className="font-serif text-7xl md:text-9xl leading-[0.85] text-bart-black mb-8 tracking-tighter mix-blend-multiply">
            <TextReveal text="Kişiye" />
            <div className="flex items-center gap-4">
              <Reveal delay={300} variant="slide-in" className="h-[2px] w-24 bg-bart-black mt-4"></Reveal>
              <span className="font-light italic text-bart-gray">Özel</span>
            </div>
            <TextReveal text="Tasarım" delay={200} />
          </h1>

          <Reveal delay={400}>
            <p className="font-sans text-bart-black/60 text-lg md:text-xl max-w-md mb-12 leading-relaxed font-light">
              Hayalinizdeki yaşam alanlarını sizin için tasarlıyoruz.
              Her detay size özel, her tasarım benzersiz.
            </p>
          </Reveal>

          <div className="flex flex-wrap gap-6">
            <Reveal delay={500}>
              <a
                href="#showcase"
                className="group relative overflow-hidden bg-bart-black text-white px-10 py-5 rounded-full font-sans text-sm tracking-widest hover:shadow-xl transition-all duration-500 flex items-center gap-3"
              >
                <span className="relative z-10">KEŞFET</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </a>
            </Reveal>

            <Reveal delay={600}>
              <a
                href="#contact"
                className="group flex items-center justify-center px-6 h-14 rounded-full border border-bart-black/10 hover:border-bart-black transition-colors font-sans text-sm tracking-wide"
              >
                İletişime Geç
              </a>
            </Reveal>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:col-span-6 relative h-[60vh] lg:h-[80vh] w-full">
           <div className="relative w-full h-full rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-2xl animate-float">
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
             <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
              alt="Futuristic Interior"
              className="w-full h-full object-cover grayscale contrast-110 animate-slow-zoom"
            />
            
            {/* Floating Glass Cards */}
            <div className="absolute top-1/4 -left-12 glass-panel p-4 rounded-2xl z-20 animate-float hidden md:block" style={{ animationDelay: '1s' }}>
              <div className="w-48">
                <p className="font-sans text-[10px] uppercase tracking-widest text-white/70 mb-2">Kalite</p>
                <p className="font-serif text-white text-xl italic">Özel Üretim</p>
              </div>
            </div>

            <div className="absolute bottom-12 -right-6 glass-panel p-6 rounded-2xl z-20 animate-float hidden md:block" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-4">
                 <div className="bg-white text-bart-black w-12 h-12 rounded-full flex items-center justify-center font-bold font-serif text-2xl">B</div>
                 <div>
                   <p className="font-sans text-[10px] uppercase tracking-widest text-white/70">1992'den</p>
                   <p className="font-serif text-white text-lg">Beri</p>
                 </div>
              </div>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;