import { reducedHistoryTYPE, reducedYTVideoTYPE } from "../types/types";

/**
 * @description Esta função é necessária apenas para salvar uma parte do reducedHistory no localStorage, pois ele geralmente é muito grande e não cabe no localStorage
 * @param reducedHistory - Lista de videos reduzida, gerada por reduceHistory.ts
 * @param listSize - Tamanho da lista de videos mais vistos
 * @returns void
 *
 **/

export const getTopVideos = (
  reducedHistory: reducedHistoryTYPE,
  listSize: number
) => {
  if (!reducedHistory) {
    throw new Error("getMostWatchedVideos: reducedHistory is undefined");
  }

  const topVideos = reducedHistory.slice(0, listSize);

  window.localStorage.setItem("topVideos", JSON.stringify(topVideos));
};
