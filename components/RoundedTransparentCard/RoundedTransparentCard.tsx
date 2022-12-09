import React from 'react';

type RoundedTransparentCardProps = {
  children?: React.ReactNode;
  className?: string;
};
export const RoundedTransparentCard: React.FC<RoundedTransparentCardProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`bg-white/80 col-span-3 backdrop-blur-sm backdrop-saturate-200 rounded shadow-md flex justify-center items-center p-1 ${className}`}
    >
      {children}
    </div>
  );
};

export {};
