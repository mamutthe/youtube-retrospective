import React from 'react';

export function AnimatedTitle(): JSX.Element {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-center text-slate-800">
        <span className="mr-2 md:mr-4 lg:mr-8">YOUTUBE STATS</span>
        <span className="block text-6xl md:text-7xl lg:text-8xl lg:inline blue-gradient bg-clip-text text-transparent">
          2022
        </span>
      </h1>
    </>
  );
}

export {};
