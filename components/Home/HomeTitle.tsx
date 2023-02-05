import React from "react";

export const HomeTitle = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="p-2 text-5xl text-center text-slate-200 font-extrabold md:text-8xl">
        YouTube Stats
      </h1>
      <span className="px-2 font-medium text-slate-200 text-xl md:text-[1.7rem]">
        Retrospectiva do seu 
        histórico do YouTube
      </span>
    </div>
  );
};

export {};
