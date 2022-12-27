import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: (e: any) => void;
}

const GenericButton: React.FC<ButtonProps> = ({
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

export default GenericButton;
