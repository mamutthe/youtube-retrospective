import { setHistory } from './getHistory.js';
import { historyTYPE, ytVideoTYPE } from './types';

const history: historyTYPE = await setHistory();

function getTitles(history: historyTYPE): string[] {
  const listOfTitles = history.map((ytVideo: ytVideoTYPE) => {
    const title = ytVideo.title;
    return title;
  });
  return listOfTitles;
}

function countRepeatedTitles(listOfTitles: string[]): {} {
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

function sortTitlesByViews(repeatedTitles: object): Array<[string, number]> {
  const sortedTitlesByViews: Array<[string, number]> = Object.entries(
    repeatedTitles
  ).sort((a, b) => b[1] - a[1]);
  return sortedTitlesByViews;
}
console.time('sort');
sortTitlesByViews(countRepeatedTitles(getTitles(history))).map((title) =>
  document.write(`${title[0]}: ${title[1]} views <br>`)
);
console.timeEnd('sort');
