import React from 'react';
import Link from 'next/link';
type GradientButtonTYPE = {
  beforeClassName?: string;
  href?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ButtonContainer = (props: any) => (
  <div className={`before:rounded-2xl pseudo-glow before:h-14 before:w-64 ${props.beforeClassName}`}>
    <button
      {...props}
      className={`${props.className} relative h-14 w-64 rounded-lg bg-slate-100 text-lg font-medium text-slate-900 transition-all duration-100 ease-in-out`}
    >
      {props.children}
    </button>
  </div>
);

export const GradientButton: React.FC<GradientButtonTYPE> = ({href,...rest}) => (
    <>
      {href ? (
        <Link href={href}>
          <ButtonContainer {...rest} />
        </Link>
      ) : (
        <ButtonContainer {...rest} />
      )}
    </>
);
