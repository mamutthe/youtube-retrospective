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
    <BaseCard className="flex flex-col items-center space-y-4 bg-gradient-to-r from-red-500 to-red-700 px-4 py-1 text-center">
      <p className="mt-4 mb-5 text-center text-2xl font-medium text-white">
        Estes foram os meses em que você mais assistiu
      </p>
      {Object.entries(videosWatchedPerMonth)
        .slice(0, 3)
        .map((month) => (
          <StoryInfoCard
            key={month[0]}
            info={month[0]}
            textStyle="text-2xl font-bold text-red-800 ml-auto mr-0"
          >
            <ViewCount className="ml-auto mr-0 max-w-[22%] bg-red-500/20 text-lg font-bold text-red-800">
              {month[1]}
              <br />
              vídeos
            </ViewCount>
          </StoryInfoCard>
        ))}

      <p className="text-xl font-medium text-white">
        {`Essa foi a quantidade de vídeos que você viu este ano`}
      </p>
      <StoryInfoCard
        info={`${amountOfVideosWatched} vídeos`}
        textStyle="text-2xl font-bold text-red-800"
      ></StoryInfoCard>

      {amountOfVideosWatched > 8000 && (
        <p className="text-2xl font-medium text-white">É mais de 8 mil !</p>
      )}
    </BaseCard>
  );
}

export {};
