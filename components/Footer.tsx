import React from 'react';
import { ArrowUp, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bart-black text-white pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
           <div>
             <a href="#" className="block mb-8">
              <img
                src="/logo2.png"
                alt="B'art Home"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>
            <p className="font-sans text-gray-500 text-sm max-w-xs font-light">
              Ev tasarımında geleceği şekillendiriyoruz. <br />
              Modern. Zamansız. Şık.
            </p>
           </div>

           <div className="mt-10 md:mt-0 flex gap-4">
              <a
                href="https://www.instagram.com/barthome_concept"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-bart-black transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <button
                onClick={scrollToTop}
                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-bart-black transition-all duration-300"
              >
                <ArrowUp className="w-6 h-6" />
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-t border-white/10 pt-16">

          {/* Links */}
          <div>
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest mb-6 text-gray-500">Site Haritası</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Galeri</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest mb-6 text-gray-500">İletişim</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-500" />
                <a href="tel:+902322642323" className="hover:text-white transition-colors">0(232)264 23 23</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <a href="mailto:bilgi@barthome.com.tr" className="hover:text-white transition-colors">bilgi@barthome.com.tr</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-gray-500" />
                <a href="https://www.instagram.com/barthome_concept" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@barthome_concept</a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest mb-6 text-gray-500">Adres</h4>
            <div className="flex items-start gap-3 font-sans text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
              <p>Karabağlar Mahallesi<br />Yeşillik Caddesi No: 256 1/B<br />Karabağlar/İzmir</p>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-sans text-gray-600 font-medium">
          <p>&copy; 2025 B'art Home. Tüm hakları saklıdır.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="https://www.barthome.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.barthome.com.tr</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;