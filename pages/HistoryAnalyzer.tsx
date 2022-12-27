import React, { useState, createContext, useEffect } from "react";
import { historyTYPE, reducedHistoryTYPE } from "../types/types";
import { HistoryUpload } from "../components";
import { reduceHistory } from "../history-analyzer/reduceHistory";

export const HistoryContext = createContext({
  history: null as historyTYPE | null,
  setHistory: (history: historyTYPE | null) => {},
  handleGenerate: () => {},
});

const HistoryAnalyzer: React.FC = () => {
  //Estado referente ao histórico upado pelo usuário e ao histórico reduzido
  const [history, setHistory] = useState<historyTYPE | null>(null);
  const [reducedHistory, setReducedHistory] =
    useState<reducedHistoryTYPE | null>(null);

  const handleGenerate = () => {
    setReducedHistory(reduceHistory(history as historyTYPE));
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
