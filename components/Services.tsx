import React from 'react';
import { SERVICES } from '../constants';
import { Reveal } from './ui/Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-bart-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/20 pb-10">
          <Reveal variant="blur-in">
            <h2 className="font-serif text-5xl md:text-7xl">
              Hizmet <span className="italic text-gray-500">Alanlarımız</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-sans text-gray-400 max-w-xs text-right mt-4 md:mt-0">
              Size özel, kusursuz tasarım çözümleri.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {SERVICES.map((service, index) => (
            <Reveal key={index} delay={index * 100} variant="fade-up">
              <div className="group relative h-72 p-8 border border-white/10 hover:border-white/0 hover:bg-white hover:text-bart-black transition-all duration-500 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <service.icon className="w-12 h-12 text-bart-black opacity-10 rotate-[-15deg]" />
                </div>
                
                <div className="flex justify-between items-start">
                  <service.icon className="w-6 h-6 text-white group-hover:text-bart-black transition-colors duration-500" />
                  <span className="font-mono text-xs opacity-50">0{index + 1}</span>
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
                  <p className="font-sans text-sm opacity-60 group-hover:opacity-100 transition-opacity max-w-[80%]">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;