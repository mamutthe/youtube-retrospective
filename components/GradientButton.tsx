import React from "react";

type GradientButtonTYPE = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const GradientButton: React.FC<GradientButtonTYPE> = (props) => {
  return (
    <button
      {...props}
      className={`${props.className} bg-slate-100 w-48 h-14 rounded-lg text-slate-900 font-medium text-lg transition-all duration-100 ease-in-out`}
    ></button>
  );
};
