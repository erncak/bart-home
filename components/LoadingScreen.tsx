import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 2.5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Complete loading after exit animation (3.2 seconds total)
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 3200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
            animation: 'pulse-glow 2s ease-in-out infinite'
          }}
        />
      </div>

      {/* Logo container */}
      <div className="relative flex flex-col items-center">
        {/* Logo with animations */}
        <div
          className="relative"
          style={{
            animation: 'logo-enter 1s cubic-bezier(0.16, 1, 0.3, 1) forwards, logo-float 3s ease-in-out infinite 1s'
          }}
        >
          <img
            src="/Logo1.png"
            alt="B'art Home"
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
            style={{
              filter: 'invert(1) brightness(2)',
              animation: 'logo-pulse 2s ease-in-out infinite'
            }}
          />

          {/* Glow effect behind logo */}
          <div
            className="absolute inset-0 blur-2xl opacity-30"
            style={{
              background: 'radial-gradient(circle, white 0%, transparent 70%)',
              animation: 'glow-pulse 2s ease-in-out infinite'
            }}
          />
        </div>

        {/* Loading bar */}
        <div className="mt-12 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full"
            style={{
              animation: 'loading-bar 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
            }}
          />
        </div>

      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes logo-enter {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes logo-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes logo-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.3;
          }
        }

        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
