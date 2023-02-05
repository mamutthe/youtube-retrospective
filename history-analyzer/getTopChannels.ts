import { reducedHistoryTYPE, topChannelsTYPE } from '../types/types';

export const getTopChannels = (
  reducedHistory: reducedHistoryTYPE,
  listSize: number
) => {
  if (!reducedHistory) {
    throw new Error('getTopChannels: reducedHistory is undefined');
  }

  //Gera um objeto que contém
  const topChannels: topChannelsTYPE = {};

  //Filtra o histórico de acordo com o serviço (youtube ou youtube music)
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

  sortedTopChannels.length = listSize;

  window.localStorage.setItem('topChannels', JSON.stringify(sortedTopChannels));
};
