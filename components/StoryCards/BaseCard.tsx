import React from "react";

type BaseCardProps = {
  className?: string;
  children?: React.ReactNode;
};

export const BaseCard: React.FC<BaseCardProps> = ({ className, children }) => {
  return (
    <>
      <div
        className={`flex h-[36rem] w-full flex-col overflow-hidden text-center md:h-[38.5rem] md:w-[22rem] ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export {};
