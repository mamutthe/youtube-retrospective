import { historyTYPE, reducedHistoryTYPE } from "../types/types";
import { videosWatchedPerMonthTYPE } from "../types/types";

export const getVideosWatchedPerMonth = (history: historyTYPE) => {
  const months = [
    "foo",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let videosWatchedPerMonth: videosWatchedPerMonthTYPE = {};

  history.forEach((video, index: number) => {
    if (
      !videosWatchedPerMonth[
        months[Number(video.time.match(/^\d{4}-(\d{2})/)?.slice(1) as string[])]
      ]
    ) {
      videosWatchedPerMonth[
        months[Number(video.time.match(/^\d{4}-(\d{2})/)?.slice(1) as string[])]
      ] = 1;
    } else {
      videosWatchedPerMonth[
        months[Number(video.time.match(/^\d{4}-(\d{2})/)?.slice(1) as string[])]
      ] += 1;
    }
  });

  //Adiciona no localStorage um objeto com os meses em ordem decrescente de videos assistidos
  window.localStorage.setItem(
    "videosWatchedPerMonth",
    JSON.stringify(
      Object.fromEntries(
        Object.entries(videosWatchedPerMonth).sort((a, b) => b[1] - a[1])
      )
    )
  );
};

export const getAmountOfVideosWatched = (filteredHistory: historyTYPE) => {
  window.localStorage.setItem(
    "amountOfVideosWatched",
    filteredHistory.length.toString()
  );
};
