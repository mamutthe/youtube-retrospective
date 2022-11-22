import { historyTYPE, ytVideoTYPE } from './types';

const JSONPath = './history/userHistory.json';
const year = 2022;

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

export async function setHistory(): Promise<historyTYPE> {
  const rawHistory = await getHistory(JSONPath);
  const filteredHistoryByYear = filterHistoryByYear(year, rawHistory);
  return filteredHistoryByYear;
}

