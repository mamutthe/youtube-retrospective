import { historyTYPE, ytVideoTYPE } from './types';

async function getHistory(JSONPath: string): Promise<historyTYPE> {
  const response = fetch(JSONPath);
  const history = response.then(async (response) => await response.json());
  return await history;
}

function filterHistoryByYear(year: number, history: historyTYPE): historyTYPE {
  const historyFilteredByYear: historyTYPE = history.filter(
    (ytVideo: ytVideoTYPE) => {
      if (ytVideo.time.includes(`${year}`)) {
        return ytVideo;
      }
      return null;
    }
  );
  return historyFilteredByYear;
}

function filterUnnecessaryInfo(
  historyFilteredByYear: historyTYPE
): historyTYPE {
  const historyWithoutAdsAndRemoved: historyTYPE = historyFilteredByYear.filter(
    (ytVideo: ytVideoTYPE) => {
      if (
        ytVideo.details === undefined &&
        ytVideo.title !== 'Watched a video that has been removed' &&
        ytVideo.title !== 'Visited YouTube Music'
      ) {
        return ytVideo;
      }
      return null;
    }
  );
  return historyWithoutAdsAndRemoved;
}

export async function setHistory(
  JSONPath: string,
  year: number
): Promise<historyTYPE> {
  const rawHistory = await getHistory(JSONPath);
  const historyFilteredByYear = filterHistoryByYear(year, rawHistory);
  const historyWithoutUnnecessary = filterUnnecessaryInfo(
    historyFilteredByYear
  );
  return historyWithoutUnnecessary;
}
