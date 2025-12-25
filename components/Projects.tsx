import React from 'react';
import { PROJECTS } from '../constants';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-32">
          <Reveal>
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-bart-black/40 mb-4 block">Seçili Çalışmalar</span>
            <h2 className="font-serif text-6xl md:text-8xl text-bart-black">
              Proje <span className="italic text-gray-300">Galerimiz</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, index) => (
            <Reveal key={index} delay={index * 150} className={index % 2 === 1 ? 'md:mt-32' : ''}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2px] aspect-[4/5] mb-6">
                  <div className="absolute inset-0 bg-bart-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 group-hover:scale-100"
                  />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                     <div className="bg-white/90 backdrop-blur-md rounded-full p-6 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                       <ArrowUpRight className="w-8 h-8 text-bart-black" />
                     </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="relative overflow-hidden">
                    <h3 className="font-serif text-4xl text-bart-black transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-full">{project.title}</h3>
                    <h3 className="font-serif text-4xl text-bart-black absolute top-0 left-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 italic">{project.title}</h3>
                  </div>
                  <p className="font-sans text-xs uppercase tracking-widest text-gray-400 group-hover:text-bart-black transition-colors">{project.category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;