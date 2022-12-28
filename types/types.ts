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
  header: "Youtube" | "YouTube Music";
  title: string;
  titleUrl: string;
  channelTitle: string;
  channelTitleUrl: string;
  time: string;
  views: number;
}

export type reducedHistoryTYPE = reducedYTVideoTYPE[];

export interface topChannelsTYPE {
  channelTitle: string;
  channelTitleUrl: string;
  count: number;
}
