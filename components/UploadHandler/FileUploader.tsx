import React, { useContext, useRef, useState } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';
import { GenericButton } from '../GenericButton';
import { UploadHandlerContext } from '../../pages/UploadHandler';
import { LoadingFile } from './LoadingFile';
import { filterHistory } from '../../history-analyzer/filterHistory';
import { storeUserHistory } from '../../history-analyzer/handleHistory';

const UploadButton = ({ setIsLoading }: any) => {
  const { showWarning, setCurrentComponent } = useContext(UploadHandlerContext);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      throw new Error('No file has been selected');
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.readyState && setIsLoading(true);
    reader.onload = () => {
      try {
        const filteredHistory = filterHistory(reader.result as string);
        storeUserHistory(filteredHistory);
        setCurrentComponent('HandleRetrospective');
      } catch (error) {
        setIsLoading(false);
        console.error(error);
        showWarning(
          'Arquivo inválido: Por favor, faça upload de seu .json contendo o histórico do YouTube'
        );
      }
    };
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const ytHistoryInputClick = () => {
    if (inputRef === null || inputRef.current === null) return;
    inputRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        id="ytHistory"
        accept=".json"
        onChange={handleUpload}
        className="hidden"
        ref={inputRef}
      />
      <GenericButton
        className="md:text-lg h-12 w-36 text-sm md:h-14 md:w-52"
        onClick={ytHistoryInputClick}
      >
        Escolher arquivo...
      </GenericButton>
    </>
  );
};

export const FileUploader = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading ? (
        <LoadingFile />
      ) : (
        <div className="flex w-full flex-col items-center justify-center space-y-5 text-center">
          <div className="flex w-full flex-col items-center">
            <ArrowUpTrayIcon className="h-20 w-20 text-zinc-500 md:h-24 md:w-24" />
            <span className="w-full text-xl text-zinc-500 md:text-2xl">
              Faça upload do seu arquivo do histórico
            </span>
          </div>
          <UploadButton setIsLoading={setIsLoading} />
        </div>
      )}
    </>
  );
};

export {};
