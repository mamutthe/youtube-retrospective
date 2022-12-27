import { historyTYPE, ytVideoTYPE, mostViewedVideosTYPE } from "../types/types";

export function getVideosViewCountList(
  history: historyTYPE
): Array<mostViewedVideosTYPE> {
  const viewedVideosList = history.map((ytVideo: ytVideoTYPE) => {
    const videoInfo: mostViewedVideosTYPE = {
      title: ytVideo.title,
      titleUrl: ytVideo.titleUrl,
      views: 0,
    };
    return videoInfo;
  });

  const videosViewCountList: Array<mostViewedVideosTYPE> =
    viewedVideosList.reduce(
      (
        currentVideoList: Array<mostViewedVideosTYPE>,
        currentVideo: mostViewedVideosTYPE
      ) => {
        if (
          currentVideoList.some(
            (video: mostViewedVideosTYPE) => video.title === currentVideo.title
          )
        ) {
          const videoIndex = currentVideoList.findIndex(
            (video: mostViewedVideosTYPE) => video.title === currentVideo.title
          );
          currentVideoList[videoIndex].views++;
        } else {
          currentVideoList.push(currentVideo);
        }
        return currentVideoList;
      },
      []
    );

  return videosViewCountList;
}
