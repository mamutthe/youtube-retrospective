import React, { useState, createContext, useEffect } from "react";
import { historyTYPE, reducedHistoryTYPE } from "../types/types";
import { GradientButton, UploadHistory } from "../components";
import { StatsExplorer } from "../components";
import { getTopChannels } from "../history-analyzer/getTopChannels";
import { getTopVideos } from "../history-analyzer/getTopVideos";
import { getVideosWatchedPerMonth } from "../history-analyzer/getFeaturedStats";
import { getAmountOfVideosWatched } from "../history-analyzer/getFeaturedStats";
import { getTopVideosPerMonth } from "../history-analyzer/getTopVideosPerMonth";

export const HistoryContext = createContext({
  reducedHistory: [] as reducedHistoryTYPE,
  setHistory: (history: historyTYPE) => {},
  setReducedHistory: (reducedHistory: reducedHistoryTYPE) => {},
  handleGenerate: () => {},
  handleExplore: () => {},
});

const HistoryAnalyzer: React.FC = () => {
  //Estado referente ao histórico upado pelo usuário
  const [history, setHistory] = useState<historyTYPE>([] as historyTYPE);

  //Estado referente ao histórico upado pelo usuário e ao histórico reduzido
  const [reducedHistory, setReducedHistory] = useState<reducedHistoryTYPE>(
    [] as reducedHistoryTYPE
  );

  const [isExplore, setIsExplore] = useState(false);

  const handleGenerate = () => {
    getTopVideos(reducedHistory as reducedHistoryTYPE, 6);

    getTopVideosPerMonth(reducedHistory as reducedHistoryTYPE);

    getVideosWatchedPerMonth(history as historyTYPE);

    getAmountOfVideosWatched(history as historyTYPE);

    getTopChannels(reducedHistory as reducedHistoryTYPE);

    window.localStorage.setItem("isGenerated", "true");
  };

  const handleExplore = () => {
    setIsExplore(true);
  };

  return (
    <HistoryContext.Provider
      value={{
        reducedHistory,
        setHistory,
        setReducedHistory,
        handleGenerate,
        handleExplore,
      }}
    >
      <div className="flex min-h-screen flex-col justify-center bg-zinc-900 p-4">
        {isExplore ? <StatsExplorer /> : <UploadHistory />}
      </div>
    </HistoryContext.Provider>
  );
};

export default HistoryAnalyzer;
