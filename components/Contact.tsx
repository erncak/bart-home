import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Reveal } from './ui/Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-6xl md:text-7xl text-bart-black mb-6">
                Bize <span className="italic text-gray-400">Ulaşın</span>
              </h2>
              <p className="font-sans text-bart-black/60 text-lg font-light max-w-md mx-auto">
                Showroom'umuzu ziyaret edin veya bizimle iletişime geçin.
              </p>
            </div>
          </Reveal>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONTACT_INFO.map((item, index) => (
              <Reveal key={index} delay={index * 100} variant="slide-in">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-6 group cursor-pointer p-6 rounded-2xl border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-bart-black group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                      <p className="font-serif text-xl text-bart-black group-hover:text-bart-black/80 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-6 p-6 rounded-2xl border border-gray-100">
                    <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                      <p className="font-serif text-xl text-bart-black">{item.value}</p>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;