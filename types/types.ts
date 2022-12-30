export interface ytVideoTYPE {
  header: "Youtube" | "YouTube Music";
  title: string;
  titleUrl: string;
  subtitles: Array<{
    name: string;
    url: string;
  }>;
  time: string;
  products: string[];
  details?: Array<{
    name: string;
  }>;
  activityControls: string[];
}

export type historyTYPE = ytVideoTYPE[];

export interface reducedYTVideoTYPE {
  header: string;
  title: string;
  titleUrl: string;
  channelTitle: string;
  channelTitleUrl: string;
  time: string;
  views: number;
}

export type reducedHistoryTYPE = reducedYTVideoTYPE[];

//Este tipo armazena informações sobre os canais presentes no historico, incluindo a quantidade de videos assistidos de cada um,
//essas informações são geradas pelo arquivo getTopChannelsAndArtists.ts
export interface channelsWithViewCountTYPE {
  count: number;
  channelTitle: string; //channelTitle refere-se tanto ao nome do canal(YouTube) quanto ao nome do artista(YouTube Music)
  channelTitleUrl: string;
}

export interface topChannelsTYPE {
  [key: string]: channelsWithViewCountTYPE;
}
