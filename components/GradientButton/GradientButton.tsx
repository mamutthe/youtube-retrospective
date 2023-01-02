import React from "react";

type GradientButtonTYPE = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const GradientButton: React.FC<GradientButtonTYPE> = (props) => {
  return (
    <button
      {...props}
      className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group blue-gradient group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white"
    >
      <span className="px-20 py-3 transition-all duration-100 ease-in bg-white rounded-md group-hover:bg-opacity-0">
        {props.children}
      </span>
    </button>
  );
};
