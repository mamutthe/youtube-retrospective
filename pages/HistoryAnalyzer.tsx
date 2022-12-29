import React, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import { historyTYPE, reducedHistoryTYPE } from "../types/types";
import { HistoryUpload } from "../components";
import { getTopChannels } from "../components/StoryCards/TopChannelsCard/getTopChannels";
import { getMostWatchedVideos } from "../components/StoryCards/MostWatchedVideosCard/getMostWatchedVideos";

export const HistoryContext = createContext({
  setReducedHistory: (reducedHistory: reducedHistoryTYPE) => {},
  handleGenerate: () => {},
});

const HistoryAnalyzer: React.FC = () => {
  const router = useRouter();

  //Estado referente ao histórico upado pelo usuário e ao histórico reduzido
  const [reducedHistory, setReducedHistory] =
    useState<reducedHistoryTYPE | null>(null);

  const handleGenerate = () => {
    getTopChannels(reducedHistory as reducedHistoryTYPE);
    getMostWatchedVideos(reducedHistory as reducedHistoryTYPE, 5);
    router.push("/Storys");
  };

  return (
    <HistoryContext.Provider value={{ setReducedHistory, handleGenerate }}>
      <div>
        <HistoryUpload />
      </div>
    </HistoryContext.Provider>
  );
};

export default HistoryAnalyzer;
