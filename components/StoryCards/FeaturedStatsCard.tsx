import React, { useEffect, useState } from "react";
import { BaseCard } from "./BaseCard";
import { StoryInfoCard } from "../StoryInfoCard";
import { ViewCount } from "../ViewCount";
import { videosWatchedPerMonthTYPE } from "../../types/types";

export function FeaturedStatsCard() {
  const [videosWatchedPerMonth, setVideosWatchedPerMonth] =
    useState<videosWatchedPerMonthTYPE>({});
  const [amountOfVideosWatched, setAmountOfVideosWatched] = useState<number>(0);

  useEffect(() => {
    if (window.localStorage.getItem("videosWatchedPerMonth") === null) {
      throw new Error(
        "FeaturedStatsCard|videosWatchedPerMonth: no data found in localStorage"
      );
    }

    if (window.localStorage.getItem("amountOfVideosWatched") === null) {
      throw new Error(
        "FeaturedStatsCard|amountOfVideosWatched: no data found in localStorage"
      );
    }

    setAmountOfVideosWatched(
      JSON.parse(window.localStorage.getItem("amountOfVideosWatched") as string)
    );

    setVideosWatchedPerMonth(
      JSON.parse(window.localStorage.getItem("videosWatchedPerMonth") as string)
    );
  }, []);

  return (
    <BaseCard className="flex flex-col items-center justify-center px-4 py-1 space-y-4 text-center bg-gradient-to-r from-red-500 to-red-700">
      <p className="mb-2 text-xl font-medium text-center text-white">
        The month you watched videos the most was
      </p>
      {Object.entries(videosWatchedPerMonth)
        .slice(0, 3)
        .map((month) => (
          <StoryInfoCard
            key={month[0]}
            info={month[0]}
            textStyle="text-2xl font-bold text-red-800 mr-auto"
          >
            <ViewCount className="text-red-800 font-bold text-lg bg-red-500/20 max-w-[22%]">
              {month[1]}
              <br />
              videos
            </ViewCount>
          </StoryInfoCard>
        ))}

      <p className="mb-2 text-xl font-medium text-white">
        {`That's how many videos you watched in 2022`}
      </p>
      <StoryInfoCard
        info={`${amountOfVideosWatched} videos`}
        textStyle="text-2xl font-bold text-red-800"
      ></StoryInfoCard>
    </BaseCard>
  );
}

export {};
