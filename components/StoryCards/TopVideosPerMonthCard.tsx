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
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <BaseCard className="flex flex-col items-center justify-center px-4 py-1 space-y-2 text-center bg-gradient-to-r from-yellow-300 to-rose-500">
      <span className="mb-1 text-xl font-medium text-white">
        Your most watched videos per month
      </span>
      {Object.values(topVideosPerMonth).map((video, index: number) => (
        <StoryInfoCard
          key={video[0].title}
          info={video[0].title}
          link={video[0].titleUrl}
          textStyle={"order-2 text-yellow-800 text-sm max-w-[12rem] overflow-hidden text-ellipsis whitespace-nowrap"}
          className="flex flex-row h-[2.5rem]"
        >
          <ViewCount className="order-1 text-yellow-700 bg-yellow-300/20 max-w-[14%] mr-auto">{months[index]}</ViewCount>
          <ViewCount className="order-3 text-rose-700 bg-rose-500/10 rounded-l-none rounded-r-xl ml-auto mr-0 leading-5">{video[0].views} <br/> views</ViewCount>
        </StoryInfoCard>
      ))}
    </BaseCard>
  );
}

export {};
