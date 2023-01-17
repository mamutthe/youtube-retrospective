import React from "react";

type GenericButtonTYPE = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const GenericButton: React.FC<GenericButtonTYPE> = (props) => {
  return (
    <button
      {...props}
      className={`${props.className} h-14 w-64 rounded-lg border border-white/50 bg-white/20 text-lg font-semibold text-slate-200 transition-all duration-75 ease-linear hover:bg-white hover:text-slate-900 active:bg-white`}
    ></button>
  );
};

export {};
