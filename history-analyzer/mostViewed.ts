import { setHistory } from './getHistory.js';
import { historyTYPE, ytVideoTYPE } from './types';

const history: historyTYPE = await setHistory();

export class mostViewed {
  history: historyTYPE;

  constructor(history: historyTYPE) {
    this.history = history;
  }

  static getTitles(history: historyTYPE): string[] {
    const listOfTitles = history.map((ytVideo: ytVideoTYPE) => {
      const title = ytVideo.title;
      return title;
    });
    return listOfTitles;
  }

  static countRepeatedTitles(listOfTitles: string[]): {} {
    const repeatedTitles: {} = listOfTitles.reduce(
      (acc: { [key: string]: number }, title) => {
        if (acc[title as keyof typeof acc] === undefined) {
          acc[title as keyof typeof acc] = 1;
        } else {
          acc[title as keyof typeof acc]++;
        }
        return acc;
      },
      {}
    );
    return repeatedTitles;
  }

  static sortTitlesByViews(repeatedTitles: object): Array<[string, number]> {
    const sortedTitlesByViews: Array<[string, number]> = Object.entries(
      repeatedTitles
    ).sort((a, b) => b[1] - a[1]);
    return sortedTitlesByViews;
  }

  static filterTitlesByViews(
    sortedTitlesByViews: Array<[string, number]>,
    views: number
  ): Array<[string, number]> {
    const filteredTitlesByViews: Array<[string, number]> =
      sortedTitlesByViews.filter((title) => title[1] >= views);
    return filteredTitlesByViews;
  }
}

const titles = mostViewed.getTitles(history);
const repeatedTitles = mostViewed.countRepeatedTitles(titles);
const sortedTitlesByViews = mostViewed.sortTitlesByViews(repeatedTitles);
const filteredTitlesByViews = mostViewed.filterTitlesByViews(
  sortedTitlesByViews,
  2
);

filteredTitlesByViews.map((title) =>
  document.write(`<p>${title[0]}: ${title[1]}</p>`)
);
