import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: (e: any) => void;
} & React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>;

export const GenericButton: React.FC<ButtonProps> = ({
  children,
  id,
  className,
  onClick,
}) => {
  return (
    <button
      id={id}
      className={`hover:shadow-slate-600/30 rounded-lg h-12 shadow-lg shadow-slate-600/20 text-white text-lg font-medium flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export {};