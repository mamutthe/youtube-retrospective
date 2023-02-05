import React, { useContext } from 'react';
import { generateRetrospective } from '../../history-analyzer/generateRetrospective';
import { GradientButton } from '../GradientButton';
import { GenericButton } from '../GenericButton';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { UploadHandlerContext } from '../../pages/UploadHandler';
import { useRouter } from 'next/router';

export const HandleRetrospetive = () => {
  const router = useRouter();
  const { setCurrentComponent } = useContext(UploadHandlerContext);

  const handleUploadAgain = () => {
    setCurrentComponent('FileUploader');
  };
  const handleGenerate = () => {
    generateRetrospective();
    router.push('/Storys');
  };

  return (
    <div className="bg-red flex h-full w-full flex-col justify-center space-y-6 text-center">
      <h1 className="w-full text-2xl text-slate-200 md:text-3xl">
        Seu histórico foi carregado com sucesso!
      </h1>
      <div className="flex flex-col items-center justify-center space-y-2">

        <GradientButton
          onClick={handleGenerate}
          beforeClassName="before:blue-gradient"
        >
          Ver retrospectiva
        </GradientButton>

        <GenericButton
          href='/Explorer'
          className="flex items-center justify-center"
        >
          <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
          Explorar histórico
        </GenericButton>

        <GenericButton
          onClick={handleUploadAgain}
          className="flex items-center justify-center"
        >
          <ArrowPathIcon className="mr-2 h-5 w-5" />
          Carregar outro histórico
        </GenericButton>

      </div>
    </div>
  );
};

export {};
