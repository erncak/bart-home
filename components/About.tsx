import React from 'react';
import { Reveal } from './ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 pl-0 lg:pl-10">
            <Reveal variant="slide-in">
              <h2 className="font-serif text-6xl md:text-8xl text-bart-black mb-10 leading-[0.85] tracking-tighter">
                Hayallerinizi <br />
                <span className="italic text-bart-gray ml-8">Tasarlıyoruz.</span>
              </h2>
              <div className="space-y-8 max-w-lg">
                <p className="font-sans text-bart-black text-xl leading-relaxed font-light">
                  1992 yılından bu yana mobilya sektöründe faaliyet gösteren bir aile işletmesinin ikinci nesil temsilcileriyiz. Babamızla başlayan bu yolculuk, yılların verdiği tecrübe, ustalık ve değişen trendlere uyum sağlayan vizyonumuzla bugün daha da güçlenerek devam ediyor.
                </p>
                <p className="font-sans text-gray-500 text-md leading-relaxed">
                  30 yılı aşkın süredir en büyük önceliğimiz her zaman müşteri memnuniyeti oldu. Sadece mobilya üretmiyor, aynı zamanda yaşam alanlarınıza değer katacak, uzun yıllar güvenle kullanabileceğiniz kişiye özel tasarımlar sunuyoruz.
                </p>
                <p className="font-sans text-gray-500 text-md leading-relaxed">
                  Kendi imalatımız olan ürünlerimizle, her zevke ve ihtiyaca uygun çözümler üretiyor; kaliteyi, estetiği ve fonksiyonelliği bir araya getiriyoruz. Ustalıkla işlenmiş detaylar, kaliteli malzeme seçimi ve titiz işçilik bizim için vazgeçilmezdir. Gelenekten aldığımız gücü modern tasarım anlayışıyla birleştirerek, sizlere güvenilir ve sürdürülebilir bir hizmet sunmaya devam ediyoruz.
                </p>

                <div className="pt-8">
                  <a href="#contact" className="px-8 py-4 border border-bart-black rounded-full font-sans text-xs uppercase tracking-widest hover:bg-bart-black hover:text-white transition-all duration-300 inline-block">
                    Bize Ulaşın
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image Composition */}
          <div className="relative h-[700px] w-full order-1 lg:order-2">
            <Reveal delay={200} className="absolute top-0 right-0 w-3/4 h-5/6 z-10">
              <div className="w-full h-full overflow-hidden rounded-[20px]">
                <img 
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop" 
                  alt="Minimalist Chair" 
                  className="w-full h-full object-cover grayscale brightness-110 hover:scale-110 transition-transform duration-[2s]"
                />
              </div>
            </Reveal>
            
            <Reveal delay={400} className="absolute bottom-10 left-0 w-1/2 h-1/2 z-20">
               <div className="w-full h-full p-4 bg-white rounded-[20px] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                 <div className="w-full h-full overflow-hidden rounded-[10px]">
                  <img 
                    src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop" 
                    alt="Detail Texture" 
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                 </div>
              </div>
            </Reveal>
            
            {/* Spinning Text Badge */}
            <div className="absolute top-16 left-6 z-30">
               <div className="relative w-36 h-36 flex items-center justify-center bg-white rounded-full shadow-lg">
                 <svg className="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                   <path id="curve" d="M 50 50 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0" fill="transparent"/>
                   <text>
                     <textPath href="#curve" className="font-serif text-[9px] uppercase tracking-[0.25em] fill-bart-black">
                       • 1992'den Beri • Özel Üretim •
                     </textPath>
                   </text>
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-14 h-14 bg-bart-black rounded-full flex items-center justify-center">
                     <span className="text-white font-serif text-2xl font-bold">B</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;