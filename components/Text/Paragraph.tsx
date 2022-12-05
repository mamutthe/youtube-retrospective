import React from 'react';

export function Paragraph(): JSX.Element {
  const text = 'Get statistics about YoutTube account';
  return (
    <>
      <p className="text-xl md:text-2xl lg:text-[2.2rem] my-4 font-medium text-slate-800 text-center">
        {text}
      </p>
    </>
  );
}
