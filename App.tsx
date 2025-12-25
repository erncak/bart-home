import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <main className="w-full min-h-screen relative bg-bart-bg overflow-x-hidden">
      {/* Global Grain/Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}>
      </div>
      
      {/* Background Gradient Orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-gray-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-float" style={{ animationDuration: '20s' }}></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-gray-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-float" style={{ animationDuration: '25s', animationDelay: '-5s' }}></div>

      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Showcase />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;