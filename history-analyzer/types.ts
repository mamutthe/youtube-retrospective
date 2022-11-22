export interface ytVideoTYPE {
  header: string;
  title: string;
  titleUrl: string;
  subtitles: Array<{}>;
  time: string;
  productus: string[];
  activityControls: string[];
}

export type historyTYPE = ytVideoTYPE[];
