import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00').getTime();

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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="inline-flex items-center gap-3 md:gap-4 bg-black/40 backdrop-blur-sm px-6 md:px-8 py-4 md:py-5 rounded-2xl border border-white/10"
    >
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center">
          <div className="text-center">
            <motion.div 
              key={unit.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-3xl md:text-5xl text-white tabular-nums min-w-12 md:min-w-16"
            >
              {String(unit.value).padStart(2, '0')}
            </motion.div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">
              {unit.label}
            </div>
          </div>
          {index < timeUnits.length - 1 && (
            <div className="text-2xl md:text-4xl text-white/50 mx-1 md:mx-2">:</div>
          )}
        </div>
      ))}
    </motion.div>
  );
}
