import { reducedHistoryTYPE, reducedYTVideoTYPE } from "../../../types/types";

export const getMostWatchedVideos = (
  reducedHistory: reducedHistoryTYPE,
  listSize: number
): reducedHistoryTYPE => {
  if (!reducedHistory) {
    throw new Error("getMostWatchedVideos: reducedHistory is undefined");
  }

  //Filtra apenas os videos do youtube, ignorando o youtube music, a função sort ordena a lista de acordo com a quantidade de views
  const mostWatchedVideos = reducedHistory.filter(
    (video: reducedYTVideoTYPE) => video.header === "YouTube music"
  ).sort(
    (videoA, videoB) => videoB.views - videoA.views
  );


  //Reduz o tamanho da lista de acordo com o parametro listSize
  mostWatchedVideos.length = listSize;

  //Salva a lista dos videos mais vistos no localStorage
  window.localStorage.setItem(
    "mostWatchedVideos",
    JSON.stringify(mostWatchedVideos)
  );

  return mostWatchedVideos;
};
