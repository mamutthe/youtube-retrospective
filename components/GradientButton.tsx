import React from "react";

type GradientButtonTYPE = {
  beforeClassName?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const GradientButton: React.FC<GradientButtonTYPE> = (props) => {
  return (
    <div className={`pseudo-glow ${props.beforeClassName}`}>
      <button
        {...props}
        className={`${props.className} h-14 w-64 rounded-lg bg-slate-100 text-lg font-medium text-slate-900 transition-all duration-100 ease-in-out`}
      ></button>
    </div>
  );
};
