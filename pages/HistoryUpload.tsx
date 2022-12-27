import React, { useState, useRef, useEffect } from "react";
import { Button, Spinner } from "flowbite-react";
import { historyTYPE } from "../history-analyzer/types";
import GenericButton from "../components/GenericButton";

export default function HistoryUpload() {
  const [history, setHistory] = useState<historyTYPE | null>(null);
  useEffect(() => {
    console.log(history);
  }, [history]);

  //Função que lida com o upload do histórico	e armazena o histórico no estado "history"
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return alert("No file has been uploaded");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.readyState && setUploadButtonStyle({ status: "Loading" });
    reader.onload = () => {
      setHistory(JSON.parse(reader.result as string));
      setUploadButtonStyle({
        status: e.target.value.split("\\").pop() as string,
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
          <h1 className="font-extrabold text-4xl lg:text-6xl text-slate-900">
            UPLOAD YOUR
            <span className="blue-gradient bg-clip-text text-transparent ">
              {" "}
              HISTORY{" "}
            </span>
            FILE
          </h1>
          <p className="font-bold lg:text-3xl">
            and select which stats you want
          </p>
        </header>

        <div className="flex flex-row justify-between items-center w-[85%]">
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
          className="blue-gradient w-[85%]"
          onClick={handleGenerate}
        >
          Generate
        </GenericButton>
      </section>
    </main>
  );
}
