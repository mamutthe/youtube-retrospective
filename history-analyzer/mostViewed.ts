import { history } from './doHistory';
import { historyTYPE, ytVideoTYPE, mostViewedVideosTYPE } from './types';

function geViewedVideosList(history: historyTYPE): Array<mostViewedVideosTYPE> {
  const viewedVideosList: Array<mostViewedVideosTYPE> = history.map(
    (ytVideo: ytVideoTYPE) => {
      const videoInfo: mostViewedVideosTYPE = {
        title: ytVideo.title,
        titleUrl: ytVideo.titleUrl,
        views: 0,
      };
      return videoInfo;
    }
  );

  return viewedVideosList;
}

export function getMostViewedVideosList(
  viewedVideosList: Array<mostViewedVideosTYPE>
) {
  const mostViewedVideosList = viewedVideosList.reduce((array: any, video, index) => {
    if (array[index].title === undefined) {
      array[index].
    }
  },
  []);
}

function sortTitlesByViews(repeatedTitles: object): Array<[string, number]> {
  const sortedTitlesByViews: Array<[string, number]> = Object.entries(
    repeatedTitles
  ).sort((a, b) => b[1] - a[1]);
  return sortedTitlesByViews;
}

/* const repeatedTitles: {} = listOfTitles.reduce(
    (acc, title) => {
      if (acc[title] === undefined) {
        acc[title] = 1;
      } else {
        acc[title]++;
      }
      return acc;
    },
    {}
  ); */
