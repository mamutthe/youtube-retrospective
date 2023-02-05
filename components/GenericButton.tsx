import Link from 'next/link';
import React from 'react';

type GenericButtonTYPE = { href?: string } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ButtonContainer = (props: any) => (
  <button
    {...props}
    className={`${props.className} h-14 w-64 rounded-lg border border-white/50 bg-white/20 text-lg font-medium text-slate-200 transition-all duration-100 ease-linear hover:bg-white hover:text-slate-900 active:bg-white`}
  ></button>
);

export const GenericButton: React.FC<GenericButtonTYPE> = ({
  href,
  ...rest
}) => (
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

export {};
