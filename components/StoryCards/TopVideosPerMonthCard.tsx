import React, { useEffect, useState } from "react";
import { BaseCard } from "./BaseCard";
import { StoryInfoCard } from "../StoryInfoCard";
import { ViewCount } from "../ViewCount";
import { reducedHistoryTYPE } from "../../types/types";

export function TopVideosPerMonthCard() {
  const [topVideosPerMonth, setTopVideosPerMonth] = useState<
    reducedHistoryTYPE[]
  >([] as reducedHistoryTYPE[]);

  useEffect(() => {
    if (window.localStorage.getItem("topVideosPerMonth") === null) {
      throw new Error("topVideosPerMonth: no data found in localStorage");
    }
    setTopVideosPerMonth(
      JSON.parse(window.localStorage.getItem("topVideosPerMonth") as string)
    );
  }, []);

  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  return (
    <BaseCard className="flex flex-col items-center justify-center space-y-2 bg-gradient-to-r from-yellow-300 to-rose-500 px-4 py-1 text-center">
      <span className="mb-1 text-xl font-medium text-white">
        Estes foram seus vídeos mais assistidos de cada mês
      </span>
      {Object.values(topVideosPerMonth).map((video, index: number) => (
        <StoryInfoCard
          key={video[0].title}
          info={video[0].title}
          link={video[0].titleUrl}
          textStyle={
            "order-2 text-yellow-800 text-sm max-w-[12rem] overflow-hidden text-ellipsis whitespace-nowrap"
          }
          className="flex h-[2.5rem] flex-row"
        >
          <ViewCount className="order-1 mr-auto max-w-[14%] bg-yellow-300/20 text-yellow-700">
            {months[index]}
          </ViewCount>
          <ViewCount className="order-3 ml-auto mr-0 rounded-l-none rounded-r-xl bg-rose-500/10 leading-5 text-rose-700">
            {video[0].views} <br /> vezes
          </ViewCount>
        </StoryInfoCard>
      ))}
    </BaseCard>
  );
}

export {};
