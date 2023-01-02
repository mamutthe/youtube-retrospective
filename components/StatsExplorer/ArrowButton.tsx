import React from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

type ArrowButtonProps = { arrow: "up" | "down" | "left" | "right"} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ArrowButton = (props: ArrowButtonProps) => {
  const { className, ...otherProps } = props;
  return (
    <button
      className={`${className} fixed p-2 bg-white/30 border border-white/20 hover:bg-white/40 rounded-full`}
      {...otherProps}
    >
      {props.arrow === "up" && <ArrowSmallUpIcon className="w-4 h-4" />}
      {props.arrow === "down" && <ArrowSmallDownIcon className="w-4 h-4" />}
      {props.arrow === "left" && <ArrowSmallLeftIcon className="w-4 h-4" />}
      {props.arrow === "right" && <ArrowSmallRightIcon className="w-4 h-4" />}

    </button>
  );
};

export { ArrowButton };
