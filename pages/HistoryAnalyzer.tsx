import React, { useState, createContext } from "react";
import { historyTYPE } from "../types/types";
import { HistoryUpload } from "../components";

export const HistoryContext = createContext({
  history: null as historyTYPE | null,
  setHistory: (history: historyTYPE | null) => {},
  handleGenerate: () => {},
});

const HistoryAnalyzer: React.FC = () => {
  //Estado referente ao histórico upado pelo usuário
  const [history, setHistory] = useState<historyTYPE | null>(null);

  const handleGenerate = () => {
    
  };

  return (
    <HistoryContext.Provider value={{ history, setHistory, handleGenerate }}>
      <div>
        <HistoryUpload />
      </div>
    </HistoryContext.Provider>
  );
};

export default HistoryAnalyzer;
