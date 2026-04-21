import { useEffect, useState } from 'react';
import logo from '../../imports/new-logo.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 animate-gradient-shift"></div>

      {/* Animated overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-indigo-900/30 to-slate-800/40 animate-pulse-slow"></div>

      {/* Radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo with glow */}
        <div className="relative animate-scale-in">
          <div className="absolute inset-0 blur-2xl opacity-50 animate-glow">
            <img src={logo} alt="" className="w-full h-full" />
          </div>
          <img
            src={logo}
            alt="TruckSoft Logo"
            className="relative w-[400px] h-auto drop-shadow-2xl"
          />
        </div>

        {/* IT Support text */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl tracking-[0.5em] font-light text-white drop-shadow-lg mb-6">
            IT SUPPORT
          </h2>

          {/* Loading animation */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce-delayed-1 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce-delayed-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce-delayed-3 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t-4 border-l-4 border-white/20 animate-fade-in"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-4 border-r-4 border-white/20 animate-fade-in"></div>
    </div>
  );
}