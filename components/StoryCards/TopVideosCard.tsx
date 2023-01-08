import React, { useEffect, useState } from "react";
import { BaseCard } from "./BaseCard";
import { ViewCount } from "../ViewCount";
import { StoryInfoCard } from "../StoryInfoCard";
import { reducedHistoryTYPE, reducedYTVideoTYPE } from "../../types/types";

export function TopVideosCard() {
  const [topVideos, setTopVideos] = useState<reducedHistoryTYPE>(
    [] as reducedHistoryTYPE
  );

  useEffect(() => {
    if (window.localStorage.getItem("topVideos") === null) {
      throw new Error("topVideos: no topVideos in localStorage");
    }
    setTopVideos(
      JSON.parse(window.localStorage.getItem("topVideos") as string)
    );
  }, []);

  return (
    <BaseCard className="flex flex-col items-center space-y-4 bg-gradient-to-r from-emerald-400 to-teal-500 px-4 py-1">
      <span className="mt-4 text-2xl font-medium text-white">
        Seus vídeos mais assistidos deste ano foram
      </span>
      {topVideos.map((video: reducedYTVideoTYPE) => (
        <StoryInfoCard
          key={video.title}
          info={video.title}
          textStyle={`px-2 text-teal-900 ${
            video.title.length > 50 ? "text-md" : "text-lg"
          } ml-auto mr-0 overflow-hidden overflow-ellipsis`}
          link={video.titleUrl}
        >
          <ViewCount className="ml-auto mr-0 rounded-r-xl bg-emerald-500/20 text-lg text-teal-900">
            {video.views}
            <br />
            vezes
          </ViewCount>
        </StoryInfoCard>
      ))}
    </BaseCard>
  );
}

export {};
