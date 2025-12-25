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
      <section id="showcase" className="py-32 px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-bart-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-bart-black/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <Reveal>
              <span className="font-sans text-xs uppercase tracking-[0.4em] text-bart-black/40 mb-4 block">
                Tasarım Dünyamız
              </span>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-bart-black mb-6">
                Yaşam <span className="italic text-gray-400">Alanları</span>
              </h2>
              <div className="w-24 h-[1px] bg-bart-black/20 mx-auto mb-6"></div>
              <p className="font-sans text-lg text-bart-black/60 max-w-2xl mx-auto">
                Her mekan bir hikaye anlatır. İşte bizim yarattığımız hikayelerden bazıları.
              </p>
            </Reveal>
          </div>

          {/* Gallery Grid - Staggered layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SHOWCASE_IMAGES.map((image, index) => (
              <Reveal key={index} delay={index * 150} className={index === 1 ? 'md:mt-12' : ''}>
                <div
                  className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[3/4] shadow-lg hover:shadow-2xl transition-shadow duration-500"
                  onClick={() => openLightbox(index)}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bart-black/80 via-bart-black/20 to-transparent z-10 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-[1px] bg-white/50 group-hover:w-12 transition-all duration-500"></div>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-white/60">Proje</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 group-hover:tracking-wide transition-all duration-500">
                      {image.title}
                    </h3>
                    <p className="font-sans text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {image.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 z-20">
                    <div className="absolute top-4 right-4 w-full h-full border-t-2 border-r-2 border-white/0 group-hover:border-white/30 rounded-tr-3xl transition-all duration-500"></div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/0 group-hover:bg-white/20 transition-all duration-500 z-20"></div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom decorative text */}
          <Reveal delay={500}>
            <div className="mt-20 text-center">
              <p className="font-serif text-6xl md:text-8xl text-bart-black/5 select-none">
                B'art Home
              </p>
            </div>
          </Reveal>
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
