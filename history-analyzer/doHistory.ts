import { historyTYPE, ytVideoTYPE } from './types';
import { useState } from 'react';
type jsonFile = string | ArrayBuffer | null;

export let history: historyTYPE;
let year = 2022;

export async function doHistory(historyFile: jsonFile): Promise<void> {
  history = filterRawHistory(historyFile);
}

function filterRawHistory(historyFile: jsonFile) {
  const rawHistory = JSON.parse(historyFile as string);
  const historyFilteredByYear = filterHistoryByYear(year, rawHistory);
  const historyWithoutUnecessary = filterUnnecessaryInfo(historyFilteredByYear);
  const history = fixTitleUrl(historyWithoutUnecessary);

  return history;
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

function fixTitleUrl(history: historyTYPE): historyTYPE {
  const historyWithFixedUrl: historyTYPE = history.map(
    (ytVideo: ytVideoTYPE) => {
      const fixedUrl = ytVideo.titleUrl
        .replace(/\\u003d/g, '=')
        .replace(/\\u0026/g, '&');
      ytVideo.titleUrl = fixedUrl;
      return ytVideo;
    }
  );
  return historyWithFixedUrl;
}
