import {
  reducedHistoryTYPE,
  reducedYTVideoTYPE,
  topChannelsTYPE
} from "../types/types";

export const getTopChannelsAndArtists = (
  reducedHistory: reducedHistoryTYPE,
  service: string
) => {
  if (!reducedHistory) {
    throw new Error("getTopChannelsAndArtists: reducedHistory is undefined");
  }

  //Gera um objeto que contém a quantidade de videos diferentes de cada canal no histórico
  const topChannels: topChannelsTYPE = {};

  //Filtra o histórico de acordo com o serviço (youtube ou youtube music)
  reducedHistory
    .filter((video: reducedYTVideoTYPE) => video.header === service)
    .forEach((video: any) => {
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

  if (service === "YouTube") {
    window.localStorage.setItem(
      "topChannels",
      JSON.stringify(sortedTopChannels)
    );
  } else if (service === "YouTube Music") {
    window.localStorage.setItem(
      "topArtists",
      JSON.stringify(sortedTopChannels)
    );
  }

  return sortedTopChannels;
};
