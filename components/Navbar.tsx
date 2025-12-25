import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`
            relative flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            bg-black rounded-full px-6
            ${isScrolled
              ? 'w-[90%] md:w-[70%] py-3'
              : 'w-[92%] py-4'
            }
          `}
        >
          {/* Logo */}
          <a href="#" className="z-50">
            <img
              src="/logo2.png"
              alt="B'art Home"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-white/80 hover:text-white transition-all relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-700 ${
          isMobileMenuOpen ? 'opacity-100 visible clip-circle-full' : 'opacity-0 invisible'
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className={`font-serif text-4xl italic text-white hover:text-gray-300 transition-colors transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;