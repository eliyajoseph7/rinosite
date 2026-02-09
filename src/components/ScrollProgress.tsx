import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ScrollProgress: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-200/50">
      <div 
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-75 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Debug: Show scroll progress value */}
      <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
};

export default ScrollProgress;
