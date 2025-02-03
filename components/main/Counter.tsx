// components/Counter.tsx
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

interface CounterProps {
  start: number;
  end: number;
  duration: number;
  className?: string;
  increment: boolean;
}

const Counter: React.FC<CounterProps> = ({ start, end, duration, className, increment }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${className}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsVisible(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [className]);

  return (
    <div className={className}>
      {isVisible && (
        <CountUp start={start} end={end} duration={duration} prefix="+" useEasing={!increment} />
      )}
    </div>
  );
};

export default Counter;
