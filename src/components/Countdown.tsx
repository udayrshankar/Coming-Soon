import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Splash {
  id: number;
  x: number;
  y: number;
  color: string;
}

// "Hot" center gradients for that neon pop look
const SPLASH_COLORS = [
  'radial-gradient(circle, rgba(255,192,203,1) 0%, rgba(236,72,153,1) 30%, rgba(236,72,153,0) 70%)', // Hot Pink
  'radial-gradient(circle, rgba(191,219,254,1) 0%, rgba(59,130,246,1) 30%, rgba(59,130,246,0) 70%)', // Electric Blue
  'radial-gradient(circle, rgba(233,213,255,1) 0%, rgba(168,85,247,1) 30%, rgba(168,85,247,0) 70%)', // Bright Purple
  'radial-gradient(circle, rgba(187,247,208,1) 0%, rgba(34,197,94,1) 30%, rgba(34,197,94,0) 70%)',   // Neon Green
  'radial-gradient(circle, rgba(254,215,170,1) 0%, rgba(249,115,22,1) 30%, rgba(249,115,22,0) 70%)', // Vivid Orange
];

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  const [splashes, setSplashes] = useState<Splash[]>([]);

  useEffect(() => {
    const targetDate = new Date('2026-01-16T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ];

  const handleSplash = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomColor = SPLASH_COLORS[Math.floor(Math.random() * SPLASH_COLORS.length)];

    const newSplash: Splash = {
      id: Date.now(),
      x,
      y,
      color: randomColor,
    };

    setSplashes((prev) => [...prev, newSplash]);
  };

  const removeSplash = (id: number) => {
    setSplashes((prev) => prev.filter((splash) => splash.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      // Adds the "button press" tactile feel
      whileTap={{ scale: 0.98 }} 
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={handleSplash}
      className="relative overflow-hidden inline-flex items-center gap-3 md:gap-4 bg-black/40 backdrop-blur-md px-6 md:px-8 py-4 md:py-5 rounded-2xl border border-white/10 cursor-pointer select-none shadow-2xl"
    >
      {/* THE SPLASH LAYER
        - Positioned absolutely behind the text
        - Uses 'mix-blend-mode: screen' for neon brightness
      */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={splash.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            // Fast 'circOut' ease for explosive feel
            transition={{ duration: 0.4, ease: "circOut" }} 
            onAnimationComplete={() => removeSplash(splash.id)}
            style={{
              background: splash.color,
              left: splash.x,
              top: splash.y,
              marginLeft: '-100px', 
              marginTop: '-100px',
              mixBlendMode: 'screen' 
            }}
            className="absolute w-[200px] h-[200px] rounded-full pointer-events-none blur-2xl z-0"
          />
        ))}
      </AnimatePresence>

      {/* TEXT CONTENT LAYER (z-10 ensures it stays sharp on top) */}
      <div className="relative z-10 flex items-center gap-3 md:gap-4">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center">
            <div className="text-center">
              <motion.div 
                key={unit.value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-5xl text-white tabular-nums min-w-12 md:min-w-16 font-medium"
              >
                {String(unit.value).padStart(2, '0')}
              </motion.div>
              <div className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wider font-light">
                {unit.label}
              </div>
            </div>
            {index < timeUnits.length - 1 && (
              <div className="text-2xl md:text-4xl text-white/20 mx-1 md:mx-2 font-light">:</div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}