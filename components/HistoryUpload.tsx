import React, { useState, useRef, useContext } from "react";
import { Spinner } from "flowbite-react";
import { HistoryContext } from "../pages/HistoryAnalyzer";
import { GenericButton } from "../components";
import { filterHistory } from "../history-analyzer/filterHistory";

export const HistoryUpload: React.FC = () => {
  //Estado obtido com componente HistoryAnalyzer
  const { setHistory, handleGenerate } = useContext(HistoryContext);

  //Função que lida com o upload do histórico	e armazena o histórico no estado "history"
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return alert("No file has been uploaded");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.readyState && setUploadButtonStyle({ status: "Loading" });
    reader.onload = () => {
      const filteredHistory = filterHistory(reader.result as string);
      setHistory(filteredHistory);
      setUploadButtonStyle({
        status: "Done!",
      });
    };
  };

  //Refere-se ao input com id "ytHistory", a função permite que o input seja clicado quando o botão de upload é clicado
  const fileInputRef = useRef<HTMLInputElement>(null);
  const ytHistoryInputClick = () => {
    if (fileInputRef.current === null) return;
    fileInputRef.current.click();
  };

  //Estado referente ao botão de upload
  const [uploadButtonStyle, setUploadButtonStyle] = useState({
    status: "Browse file...",
  });

  return (
    <main className="p-4">
      <section className="flex flex-col items-center justify-center space-y-6">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold lg:text-7xl text-slate-900">
            UPLOAD YOUR
            <span className="text-transparent blue-gradient bg-clip-text ">
              {" "}
              HISTORY{" "}
            </span>
            FILE
          </h1>
          <p className="font-bold lg:text-3xl">
            {"and select which stats you want".toUpperCase()}
          </p>
        </header>

        <div className="flex flex-row items-center justify-between w-[25%]">
          <input
            type="file"
            id="ytHistory"
            accept=".json"
            onChange={handleUpload}
            className="hidden"
            ref={fileInputRef}
          />
          <GenericButton
            id="uploadButton"
            className="bg-blue-500 w-[8.8rem]"
            onClick={ytHistoryInputClick}
          >
            {uploadButtonStyle.status}
          </GenericButton>
          <GenericButton className="bg-green-500 w-[8.8rem]">
            Costumize
          </GenericButton>
        </div>
        <GenericButton
          className="blue-gradient w-[85%] lg:w-[25%]"
          onClick={handleGenerate}
        >
          Generate
        </GenericButton>
      </section>
    </main>
  );
};

export {};
