import React, { useState, useRef, useContext, useEffect } from "react";
import { GradientButton } from "../GradientButton";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";
import { HistoryContext } from "../../pages/HistoryAnalyzer";
import { GenericButton } from "../GenericButton";
import { filterHistory } from "../../history-analyzer/filterHistory";
import { reduceHistory } from "../../history-analyzer/reduceHistory";
import TutorialSlider from "./TutorialSlider";
import { motion } from "framer-motion";

const HeaderUpload: React.FC = () => (
  <header className="text-center">
    <h1 className="text-medium text-2xl text-slate-200">Siga o tutorial</h1>
  </header>
);

const BrowseFile: React.FC<{
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadButtonState: { status: string; isDisabled: boolean };
}> = ({ handleUpload, uploadButtonState }) => {
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
      <GradientButton
        id="uploadButton"
        beforeClassName={`before:orange-gradient`}
        onClick={ytHistoryInputClick}
        disabled={uploadButtonState.isDisabled}
      >
        {uploadButtonState.status === "Loading" ? (
          <Spinner />
        ) : (
          uploadButtonState.status
        )}
      </GradientButton>
    </>
  );
};

const ViewStats: React.FC<{
  handleExplore: () => void;
  handleGenerate: () => void;
}> = ({ handleExplore, handleGenerate }) => {
  const router = useRouter();
  const [isGenerated, setIsGenerated] = useState(false);

  if (isGenerated) {
    return (
      <div className="flex flex-row space-x-6">
        <GradientButton
          beforeClassName={`before:purple-gradient`}
          onClick={() => router.push("/Storys")}
        >
          Ver retrospectiva
        </GradientButton>

        <GradientButton
          beforeClassName={`before:purple-gradient`}
          onClick={handleExplore}
        >
          Exporar estatísticas
        </GradientButton>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row space-x-2">
        <GradientButton
          id="generateButton"
          beforeClassName={`before:blue-gradient`}
          onClick={() => {
            handleGenerate();
            setIsGenerated(true);
          }}
        >
          Gerar retrospectiva
        </GradientButton>
        <GradientButton
          id="generateButton"
          beforeClassName={`before:blue-gradient`}
        >
          Escolha o ano
        </GradientButton>
      </div>
    );
  }
};

export const UploadHistory: React.FC = () => {
  const [uploadButtonState, setUploadButtonState] = useState({
    status: "Selecione seu arquivo...",
    isDisabled: false,
  });
  const { setHistory, setReducedHistory, handleGenerate, handleExplore } =
    useContext(HistoryContext);

  //Função que lida com o upload do histórico	e armazena o histórico no estado "history"
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      throw new Error("No file uploaded");
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.readyState &&
      setUploadButtonState({
        status: "Loading",
        isDisabled: true,
      });
    reader.onload = () => {
      try {
        const historyFile = reader.result as string;
        const filteredHistory = filterHistory(historyFile);
        setHistory(filteredHistory);
        setReducedHistory(reduceHistory(filteredHistory));
        setUploadButtonState((prevState) => ({
          ...prevState,
          status: "done",
        }));
      } catch (error) {
        setUploadButtonState({
          status: "Selecione seu arquivo...",
          isDisabled: false,
        });
        console.error(error);
        alert(
          "Arquivo inválido: Por favor, faça upload de seu .json contendo o histórico do YouTube"
        );
      }
    };
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <HeaderUpload />
      <TutorialSlider />
      {uploadButtonState.status === "done" ? (
        <ViewStats
          handleExplore={handleExplore}
          handleGenerate={handleGenerate}
        />
      ) : (
        <>
          <BrowseFile
            handleUpload={handleUpload}
            uploadButtonState={uploadButtonState}
          />
        </>
      )}
    </div>
  );
};

export {};
