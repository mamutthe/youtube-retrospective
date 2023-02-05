import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

export const BouncingArrow = () => {
  return (
    <div className="flex h-[30%] flex-col items-center justify-end md:hidden">
      <ChevronDownIcon
        onClick={() => handleScroll('slider-container')}
        className="mb-3 h-10 w-10 animate-bounce text-slate-200"
      />
    </div>
  );
};

export {};
