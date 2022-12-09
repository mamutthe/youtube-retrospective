import React from 'react';

type BaseCardProps = {
  width: number;
  height: number;
  children: React.ReactNode;
  backgroundImg: string;
};

export const BaseCard: React.FC<BaseCardProps> = ({
  width,
  height,
  backgroundImg,
  children,
}) => {
  return (
    <>
      <div style={{ height: `${height}rem`, width: `${width}rem` }}>
        <div
          className="h-full w-full rounded-2xl"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export {};
