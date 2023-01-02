import React, { useState, useRef, useContext, createRef } from "react";
import { GradientButton } from "../components";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";
import { HistoryContext } from "../pages/HistoryAnalyzer";
import { GenericButton } from "../components";
import { filterHistory } from "../history-analyzer/filterHistory";
import { reduceHistory } from "../history-analyzer/reduceHistory";

const HeaderUpload: React.FC = () => (
  <header className="text-center">
    <h1 className="text-4xl font-extrabold lg:text-7xl text-slate-900">
      UPLOAD YOUR
      <span className="text-transparent blue-gradient bg-clip-text ">
        {" "}
        HISTORY{" "}
      </span>
      FILE
    </h1>
    <p className="font-bold lg:text-3xl uppercase">
      and select which stats you want
    </p>
  </header>
);

const UploadAndCostumize = React.forwardRef<
  HTMLInputElement,
  {
    handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    uploadButtonStyle: { status: string };
  }
>(({ handleUpload, uploadButtonStyle }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const ytHistoryInputClick = () => {
    if (inputRef === null || inputRef.current === null) return;
    inputRef.current.click();
  };

  return (
    <div className="flex flex-row items-center justify-between w-[25%]">
      <input
        type="file"
        id="ytHistory"
        accept=".json"
        onChange={handleUpload}
        className="hidden"
        ref={inputRef}
      />
      <GenericButton
        id="uploadButton"
        className="bg-blue-500 w-[8.8rem]"
        onClick={ytHistoryInputClick}
      >
        {uploadButtonStyle.status === "Loading" ? (
          <Spinner />
        ) : (
          uploadButtonStyle.status
        )}
      </GenericButton>
      <GenericButton className="bg-green-500 w-[8.8rem]">
        Costumize
      </GenericButton>
    </div>
  );
});

UploadAndCostumize.displayName = "UploadAndCostumize";

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
          className="bg-blue-500 w-[85%] lg:w-[25%]"
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
  const [uploadButtonStyle, setUploadButtonStyle] = useState({
    status: "Browse file...",
  });
  const { setHistory, setReducedHistory, handleGenerate, handleExplore } =
    useContext(HistoryContext);
  const fileInputRef = createRef<HTMLInputElement>();
  //Função que lida com o upload do histórico	e armazena o histórico no estado "history"
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      throw new Error("No file uploaded");
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.readyState && setUploadButtonStyle({ status: "Loading" });
    reader.onload = () => {
      try {
        const filteredHistory = filterHistory(reader.result as string);
        setHistory(filteredHistory);
        setReducedHistory(reduceHistory(filteredHistory));
        setUploadButtonStyle({
          status: "done",
        });
      } catch (error) {
        setUploadButtonStyle({
          status: "Browse file...",
        });
        console.error(error);
        alert("Invalid file");
      }
    };
  };

  return (
    <main className="p-4">
      <HeaderUpload />

      {uploadButtonStyle.status === "done" ? (
        <ViewStats
          handleExplore={handleExplore}
          handleGenerate={handleGenerate}
        />
      ) : (
        <UploadAndCostumize
          handleUpload={handleUpload}
          uploadButtonStyle={uploadButtonStyle}
          ref={fileInputRef}
        />
      )}
    </main>
  );
};

export {};
