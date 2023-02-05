import React from "react";

type BaseCardProps = {
  className?: string;
  children?: React.ReactNode;
};

export const BaseCard: React.FC<BaseCardProps> = ({ className, children }) => {
  return (
    <>
      <div
        className={`relative flex h-full w-full flex-col overflow-hidden text-center ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export {};
