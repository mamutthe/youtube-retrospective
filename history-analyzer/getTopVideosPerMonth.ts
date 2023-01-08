import { reducedHistoryTYPE, reducedYTVideoTYPE } from "../types/types";

type topVideoOfEachMonthTYPE = {
  [key: string]: reducedYTVideoTYPE[];
};

export const getTopVideosPerMonth = (reducedHistory: reducedHistoryTYPE) => {
  const months = [
    "Foo",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const topVideoPerMonth: topVideoOfEachMonthTYPE = {};

  reducedHistory.forEach((video: reducedYTVideoTYPE) => {
    video.time.forEach((time: string) => {
      const monthIndex = Number(time.match(/^\d{4}-(\d{2})/)?.slice(1));
      const month = months[monthIndex];
      if (!topVideoPerMonth[month]) {
        topVideoPerMonth[month] = [] as reducedYTVideoTYPE[];
      }

      const videoCopy = { ...video };
      videoCopy.views = 0;
      topVideoPerMonth[month].push(videoCopy);
    });
  });

  Object.keys(topVideoPerMonth).forEach((month: string) => {
    topVideoPerMonth[month] = topVideoPerMonth[month].reduce(
      (
        currentVideoList: reducedYTVideoTYPE[],
        currentVideo: reducedYTVideoTYPE
      ) => {
        if (
          currentVideoList.some(
            (video: reducedYTVideoTYPE) => video.title === currentVideo.title
          )
        ) {
          const videoIndex = currentVideoList.findIndex(
            (video: reducedYTVideoTYPE) => video.title === currentVideo.title
          );
          currentVideoList[videoIndex].views++;
        } else {
          currentVideoList.push(currentVideo);
          currentVideoList[currentVideoList.length - 1].views++;
        }
        return currentVideoList;
      },
      []
    );
  });

  //sort videos by views
  Object.keys(topVideoPerMonth).forEach((month: string) => {
    topVideoPerMonth[month].sort(
      (a: reducedYTVideoTYPE, b: reducedYTVideoTYPE) => b.views - a.views
    );
  });

  //keep only the most viewed video of each month
  Object.keys(topVideoPerMonth).forEach((month: string) => {
    topVideoPerMonth[month] = topVideoPerMonth[month].slice(0, 1);
  });

  Object.keys(topVideoPerMonth).forEach((month: string, index) => {
    topVideoPerMonth[index] = topVideoPerMonth[months[index]];
    delete topVideoPerMonth[months[index]];
  });

  window.localStorage.setItem(
    "topVideosPerMonth",
    JSON.stringify(topVideoPerMonth)
  );
};
