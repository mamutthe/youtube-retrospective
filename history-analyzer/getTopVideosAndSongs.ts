import { reducedHistoryTYPE, reducedYTVideoTYPE } from "../types/types";

export const getTopVideosAndSongs = (
  reducedHistory: reducedHistoryTYPE,
  listSize: number,
  service: string
): reducedHistoryTYPE => {
  if (!reducedHistory) {
    throw new Error("getMostWatchedVideos: reducedHistory is undefined");
  }

  //Filtra apenas os videos do youtube, ignorando o youtube music, a função sort ordena a lista de acordo com a quantidade de views
  const topVideosAndSongs = reducedHistory
    .filter((video: reducedYTVideoTYPE) => video.header === service)
    .sort((videoA, videoB) => videoB.views - videoA.views);

  //Reduz o tamanho da lista de acordo com o parametro listSize
  topVideosAndSongs.length = listSize;

  //Salva a lista dos videos mais vistos no localStorage
  switch (service) {
    case "YouTube":
  window.localStorage.setItem(
    "mostWatchedVideos",
    JSON.stringify(topVideosAndSongs)
  );
      break;
    case "YouTube Music":
  window.localStorage.setItem(
    "mostListenedSongs",
    JSON.stringify(topVideosAndSongs)
  );
      break;
    default:
      break;
  }
  
  return topVideosAndSongs;
};
