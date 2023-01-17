import React from "react";

type ViewCountTYPE = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const ViewCount: React.FC<ViewCountTYPE> = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={`flex flex-col justify-center h-full w-full max-w-[18%] text-sm md:text-lg mr-auto font-bold md:font-medium ${className}`}
      {...otherProps}
    ></div>
  );
};
