import { reducedHistoryTYPE, reducedYTVideoTYPE, topChannelsTYPE } from "../../../types/types";



export const getTopChannels = (reducedHistory: reducedHistoryTYPE) => {
  //Gera um objeto que contém a quantidade de videos diferentes de cada canal no histórico
  const topChannels: topChannelsTYPE = {};

  if (!reducedHistory) return;
  reducedHistory.forEach((video: any) => {
    if (topChannels[video.channelTitle]) {
      topChannels[video.channelTitle].count++;
    } else {
      topChannels[video.channelTitle] = {
        count: 1,
        channelTitle: video.channelTitle,
        channelTitleUrl: video.channelTitleUrl,
      };
    }
  });
  
  //Ordena a lista pelo número de videos assistidos de cada canal
    const sortedTopChannels = Object.values(topChannels).sort(
    (a: any, b: any) => b.count - a.count
    );
  sortedTopChannels.length = 10;
  
  //Salva a lista dos canais mais vistos no localStorage
  window.localStorage.setItem("topChannels", JSON.stringify(sortedTopChannels));
  
return sortedTopChannels;
};
