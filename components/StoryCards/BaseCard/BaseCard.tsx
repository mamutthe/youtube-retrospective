import React from 'react';

type BaseCardProps = {
  className?: string;
  children?: React.ReactNode;
};

export const BaseCard: React.FC<BaseCardProps> = ({
  className,
  children,
}) => {
  return (
    <>
      <div className={`rounded-2xl h-[40rem] w-[24rem] ${className}`}>
          {children}
      </div>
    </>
  );
};

export {};
