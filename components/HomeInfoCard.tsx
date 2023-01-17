import React from "react";

type HomeInfoCardProps = {
  infoNumber?: string;
  children?: React.ReactNode;
  transparent?: boolean;
  textDivClassName?: string;
  beforeClassName?: string;
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const HomeInfoCard: React.FC<HomeInfoCardProps> = (props) => {
  const {
    infoNumber,
    transparent,
    children,
    className,
    textDivClassName,
    beforeClassName,
    ...rest
  } = props;
  return (
    <div className={`h-[50%] w-[50%] pseudo-glow ${beforeClassName}`}>
      <div
        {...rest}
        className={`${className} relative flex items-center ${
          transparent === true ? "bg-zinc-900" : "blue-gradient"
        } h-[50%] w-[50%] rounded-2xl border border-white/20 py-6`}
      >
        {infoNumber && (
          <div className="ml-3 flex h-[4rem] max-h-[2rem] w-[4rem] max-w-[4rem] items-center justify-center self-center rounded-full border border-white/40 bg-white/50 p-2 saturate-100">
            <span className="text-xl font-semibold text-white/70">
              {infoNumber}
            </span>
          </div>
        )}

        <div className={`${textDivClassName} px-4`}>{children}</div>
      </div>
    </div>
  );
};

export {};
