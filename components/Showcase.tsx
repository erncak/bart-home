import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ShowcaseImage {
  src: string;
  title: string;
  description: string;
}

const SHOWCASE_IMAGES: ShowcaseImage[] = [
  {
    src: '/showcase-1.jpeg',
    title: 'Huzurlu Köşe',
    description: 'Doğal ışığın buluştuğu konfor'
  },
  {
    src: '/showcase-2.jpeg',
    title: 'Modern Yaşam',
    description: 'Minimalist tasarım, maksimum şıklık'
  },
  {
    src: '/showcase-3.jpeg',
    title: 'Lüks Mekan',
    description: 'Çift yükseklikli ihtişam'
  }
];

const Showcase: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? SHOWCASE_IMAGES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === SHOWCASE_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section id="showcase" className="py-32 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <Reveal>
              <span className="font-sans text-xs uppercase tracking-[0.4em] text-bart-black/40 mb-4 block">
                Tasarım Dünyamız
              </span>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-bart-black mb-6">
                Yaşam <span className="italic text-gray-400">Alanları</span>
              </h2>
              <p className="font-sans text-lg text-bart-black/60 max-w-2xl mx-auto">
                Her mekan bir hikaye anlatır. İşte bizim yarattığımız hikayelerden bazıları.
              </p>
            </Reveal>
          </div>

          {/* Masonry-style Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
            {/* Large featured image */}
            <Reveal className="lg:col-span-7 lg:row-span-2">
              <div
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-[400px] md:h-[500px] lg:h-full lg:min-h-[600px]"
                onClick={() => openLightbox(0)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-bart-black/70 via-bart-black/20 to-transparent z-10" />
                <img
                  src={SHOWCASE_IMAGES[0].src}
                  alt={SHOWCASE_IMAGES[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Content overlay - always visible on mobile */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/80 text-xs uppercase tracking-widest mb-3">
                    Öne Çıkan
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-2">
                    {SHOWCASE_IMAGES[0].title}
                  </h3>
                  <p className="font-sans text-white/70 text-sm md:text-base">
                    {SHOWCASE_IMAGES[0].description}
                  </p>
                </div>
                {/* Hover ring effect - desktop only */}
                <div className="hidden md:block absolute inset-4 border border-white/0 group-hover:border-white/30 rounded-xl transition-all duration-500 z-10" />
              </div>
            </Reveal>

            {/* Second image */}
            <Reveal delay={150} className="lg:col-span-5">
              <div
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-[280px] md:h-[350px] lg:h-[290px]"
                onClick={() => openLightbox(1)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-bart-black/70 via-bart-black/20 to-transparent z-10" />
                <img
                  src={SHOWCASE_IMAGES[1].src}
                  alt={SHOWCASE_IMAGES[1].title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: '50% 60%' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20">
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                    {SHOWCASE_IMAGES[1].title}
                  </h3>
                  <p className="font-sans text-white/70 text-sm">
                    {SHOWCASE_IMAGES[1].description}
                  </p>
                </div>
                <div className="hidden md:block absolute inset-3 border border-white/0 group-hover:border-white/30 rounded-lg transition-all duration-500 z-10" />
              </div>
            </Reveal>

            {/* Third image */}
            <Reveal delay={300} className="lg:col-span-5">
              <div
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-[280px] md:h-[350px] lg:h-[290px]"
                onClick={() => openLightbox(2)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-bart-black/70 via-bart-black/20 to-transparent z-10" />
                <img
                  src={SHOWCASE_IMAGES[2].src}
                  alt={SHOWCASE_IMAGES[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: '50% 70%' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20">
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                    {SHOWCASE_IMAGES[2].title}
                  </h3>
                  <p className="font-sans text-white/70 text-sm">
                    {SHOWCASE_IMAGES[2].description}
                  </p>
                </div>
                <div className="hidden md:block absolute inset-3 border border-white/0 group-hover:border-white/30 rounded-lg transition-all duration-500 z-10" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-bart-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white active:text-white transition-colors z-10 p-2"
            onClick={closeLightbox}
          >
            <X className="w-7 h-7 md:w-8 md:h-8" />
          </button>

          {/* Navigation - larger touch targets on mobile */}
          <button
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white active:text-white transition-colors p-3 md:p-2 z-20"
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <button
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white active:text-white transition-colors p-3 md:p-2 z-20"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Image container */}
          <div
            className="w-[92vw] md:max-w-[90vw] max-h-[75vh] md:max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={SHOWCASE_IMAGES[currentIndex].src}
              alt={SHOWCASE_IMAGES[currentIndex].title}
              className="w-full h-full max-h-[75vh] md:max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                {SHOWCASE_IMAGES[currentIndex].title}
              </h3>
              <p className="font-sans text-white/70 text-sm md:text-base">
                {SHOWCASE_IMAGES[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 md:gap-2">
            {SHOWCASE_IMAGES.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-8 md:w-6' : 'bg-white/40 hover:bg-white/60 w-2'
                }`}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Showcase;
