import React from 'react';
import { GradientButton } from '../GradientButton';
import { GenericButton } from '../GenericButton';

export const HeaderButtons = () => {
  return (
    <div className="">
      <GradientButton
        className="h-12 w-44 text-base md:h-16 md:w-80 md:text-xl"
        beforeClassName={`before:blue-gradient before:w-44 md:before:w-80 md:before:h-16 before:h-12`}
        href="/UploadHandler"
      >
        Começar agora
      </GradientButton>
      <br />
      <GenericButton
        className="h-12 w-44 text-base md:h-16 md:w-80 md:text-xl"
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          })
        }
      >
        Saiba como funciona
      </GenericButton>
    </div>
  );
};

export {};
