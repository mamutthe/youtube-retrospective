import React, { useState, useRef, useContext, useEffect } from "react";
import { GradientButton } from "../components";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";
import { HistoryContext } from "../pages/HistoryAnalyzer";
import { GenericButton } from "../components";
import { filterHistory } from "../history-analyzer/filterHistory";
import { reduceHistory } from "../history-analyzer/reduceHistory";
import { motion } from "framer-motion";

const HeaderUpload: React.FC = () => (
  <header className="p-4 text-center">
    <h1 className="orange-gradient bg-clip-text text-7xl font-extrabold text-transparent">
      Temos um header aqui
    </h1>
  </header>
);

const TutorialSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      (sliderRef.current?.scrollWidth as number) -
        (sliderRef.current?.offsetWidth as number)
    );
  }, []);

  return (
    <motion.div className="flex h-[25rem] w-[45rem] overflow-hidden">
      <motion.div
        ref={sliderRef}
        drag="x"
        whileTap={{ cursor: "grabbing" }}
        dragConstraints={{ left: -width, right: 0 }}
        className="flex h-full w-full space-x-5 p-2 hover:cursor-grab"
      >
        <motion.div className="h-full w-full shrink-0 rounded-3xl bg-emerald-600"></motion.div>
        <motion.div className="h-full w-full shrink-0 rounded-3xl bg-sky-600"></motion.div>
        <motion.div className="h-full w-full shrink-0 rounded-3xl bg-purple-600"></motion.div>
        <motion.div className="h-full w-full shrink-0 rounded-3xl bg-green-600"></motion.div>
      </motion.div>
    </motion.div>
  );
};

const UploadAndCostumize: React.FC<{
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadButtonState: { status: string; isDisabled: boolean };
}> = ({ handleUpload, uploadButtonState }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const ytHistoryInputClick = () => {
    if (inputRef === null || inputRef.current === null) return;
    inputRef.current.click();
  };

  return (
    <div className="flex w-[25%] flex-row items-center justify-between">
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
        className="relative"
        onClick={ytHistoryInputClick}
        disabled={uploadButtonState.isDisabled}
      >
        {uploadButtonState.status === "Loading" ? (
          <Spinner />
        ) : (
          uploadButtonState.status
        )}
      </GradientButton>
      <GenericButton className="w-[8.8rem] bg-green-500">
        Costumize
      </GenericButton>
    </div>
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
      <>
        <GenericButton
          className="blue-gradient w-[85%] lg:w-[25%]"
          onClick={() => router.push("/Storys")}
        >
          View Stories
        </GenericButton>

        <GenericButton
          className="w-[85%] bg-blue-500 lg:w-[25%]"
          onClick={handleExplore}
        >
          Explore
        </GenericButton>
      </>
    );
  } else {
    return (
      <GradientButton
        className="blue-gradient w-[85%] lg:w-[25%]"
        onClick={() => {
          handleGenerate();
          setIsGenerated(true);
        }}
      >
        Generate
      </GradientButton>
    );
  }
};

export const HistoryUpload: React.FC = () => {
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
          status: "Upload concluído!",
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
    <div className="flex h-screen flex-col items-center bg-zinc-900">
      <HeaderUpload />

      {uploadButtonState.status === "done" ? (
        <ViewStats
          handleExplore={handleExplore}
          handleGenerate={handleGenerate}
        />
      ) : (
        <>
          <TutorialSlider />
          <UploadAndCostumize
            handleUpload={handleUpload}
            uploadButtonState={uploadButtonState}
          />
        </>
      )}
    </div>
  );
};

export {};
