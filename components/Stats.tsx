import React from 'react';
import { STATS } from '../constants';
import { Reveal } from './ui/Reveal';

const Stats: React.FC = () => {
  return (
    <section className="bg-bart-black py-16 px-4 mx-4 md:mx-8 rounded-3xl relative overflow-hidden mb-20">
      {/* Abstract lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <Reveal key={index} delay={index * 100} variant="blur-in">
              <div className="text-center group cursor-default">
                <h3 className="font-sans text-5xl md:text-6xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-500 ease-out">
                  {stat.value}
                </h3>
                <p className="font-serif italic text-white/40 text-lg group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;