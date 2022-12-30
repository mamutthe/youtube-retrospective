import React, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import { historyTYPE, reducedHistoryTYPE } from "../types/types";
import { HistoryUpload } from "../components";
import { getTopChannelsAndArtists } from "../history-analyzer/getTopChannelsAndArtists";
import { getTopVideosAndSongs } from "../history-analyzer/getTopVideosAndSongs";

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
    getTopChannelsAndArtists(reducedHistory as reducedHistoryTYPE, "YouTube");
    getTopChannelsAndArtists(reducedHistory as reducedHistoryTYPE, "YouTube Music");
    getTopVideosAndSongs(reducedHistory as reducedHistoryTYPE, 5, "YouTube");
    getTopVideosAndSongs(
      reducedHistory as reducedHistoryTYPE,
      5,
      "YouTube Music"
    );
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
