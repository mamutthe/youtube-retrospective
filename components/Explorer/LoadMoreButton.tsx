import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

type LoadMoreButtonProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const LoadMoreButton = (props: LoadMoreButtonProps) => {
  const { className, ...otherProps } = props;
  return (
    <button
      className={`${className} px-8 py-2 text-sm font-semibold text-white border border-white/20 bg-white/30 hover:bg-white/40 hover:shadow-lg hover:shadow-white/10 rounded-xl`}
      {...otherProps}
    >
        <PlusIcon className="w-5 h-5 text-white" />
    </button>
  );
};

export { LoadMoreButton };
