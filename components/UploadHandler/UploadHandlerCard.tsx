import React, { ReactNode } from 'react';

export const UploadHandlerCard = ({ children }: any) => {
  return (
    <div className="relative flex h-[50vh] w-[80vw] flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-800/60 p-4 md:w-1/2">
      {children}
    </div>
  );
};

export {};
