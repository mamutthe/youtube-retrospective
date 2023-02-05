import React, { useContext } from 'react';
import { GradientButton } from '../GradientButton';
import { GenericButton } from '../GenericButton';
import { UploadHandlerContext } from '../../pages/UploadHandler';

export const TutorialQuestion = () => {
  const { setCurrentComponent } = useContext(UploadHandlerContext);

  return (
    <div className="flex flex-col items-center space-y-3 text-center text-xl font-medium text-slate-200 md:space-y-10">
      <span className="w-screen px-16 text-2xl md:text-3xl">
        Você deseja realizar o tutorial?
      </span>
      <div className="flex flex-col items-center space-y-1 md:flex-row md:justify-center md:space-y-0 md:space-x-4 ">
        <GradientButton
          onClick={() => setCurrentComponent('Tutorial')}
          beforeClassName="before:blue-gradient before:w-52 before:h-12 md:before:h-14"
          className=" h-12 w-52 md:h-14"
        >
          Sim
        </GradientButton>
        <GenericButton
          onClick={() => setCurrentComponent('FileUploader')}
          className="h-18 w-52"
        >
          Não
        </GenericButton>
      </div>
    </div>
  );
};

export {};
