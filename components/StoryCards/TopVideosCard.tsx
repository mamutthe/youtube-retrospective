import React, { useEffect, useState } from "react";
import { BaseCard } from "./BaseCard";
import { ViewCount } from "../ViewCount";
import { StoryInfoCard } from "../StoryInfoCard";
import { reducedHistoryTYPE, reducedYTVideoTYPE } from "../../types/types";

export function TopVideosCard() {
  const [topVideos, setTopVideos] =
    useState<reducedHistoryTYPE>([] as reducedHistoryTYPE);

  useEffect(() => {
    if (window.localStorage.getItem("topVideos") === null) {
      throw new Error("topVideos: no topVideos in localStorage");
    }
    setTopVideos(
      JSON.parse(window.localStorage.getItem("topVideos") as string)
    );
  }, []);

  return (
    <BaseCard className="flex flex-col items-center justify-center px-4 py-1 space-y-4 bg-gradient-to-r from-emerald-400 to-teal-500">
      <span className="mb-4 text-2xl font-medium text-white">
        Your most watched videos were
      </span>
      {topVideos.map((video: reducedYTVideoTYPE) => (
        <StoryInfoCard
          key={video.title}
          info={video.title}
          textStyle="text-teal-900 mr-auto"
          link={video.titleUrl}
        >
          <ViewCount className="text-lg text-teal-900 bg-emerald-500/20">
            {video.views}
            <br />
            views
          </ViewCount>
        </StoryInfoCard>
      ))}
    </BaseCard>
  );
}

export {};
