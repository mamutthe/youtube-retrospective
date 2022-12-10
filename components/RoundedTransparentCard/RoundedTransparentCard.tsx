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
      className={`bg-white/70 backdrop-blur-sm backdrop-saturate-200 rounded shadow-md flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export {};
