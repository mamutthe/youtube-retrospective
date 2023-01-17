import React from "react";

export const HomeTitle = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="p-2 blue-gradient bg-clip-text text-center text-5xl font-black text-transparent md:text-8xl lg:text-8xl">
        YouTube Stats
      </h1>
      <span className="px-2 font-medium text-slate-200 md:text-[1.7rem] lg:text-[1.7rem]">
        Retrospectiva do seu histórico do YouTube
      </span>
    </div>
  );
};

export {};
