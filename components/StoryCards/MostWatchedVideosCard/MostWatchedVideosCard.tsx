import React from "react";
import { BaseCard } from "../BaseCard/BaseCard";
import { RoundedTransparentCard } from "../../RoundedTransparentCard/RoundedTransparentCard";
import Image from "next/image";
import { getVideosViewCountList } from "../../../history-analyzer/getVideosViewCountList";
import ytChannelPic from "/workspaces/yt-history-stats/public/picExample.jpg";
import {
  historyTYPE,
  ytVideoTYPE,
  mostViewedVideosTYPE,
} from "../../../types/types";

export function MostWatchedVideosCard() {
  function getMostWatchedVideos() {
    const MostWatchedVideos = JSON.parse(
      window.localStorage.getItem("currentUserHistory") as string
    ).slice(0, 10);
    return MostWatchedVideos;
  }

  return (
    <BaseCard className="flex flex-col items-center justify-center px-4 py-1 space-y-4 bg-gradient-to-r from-emerald-400 to-teal-500">
      <span className="mb-4 text-2xl font-medium text-slate-200">
        Most Watched Videos
      </span>
      {getMostWatchedVideos.map((video: mostViewedVideosTYPE) => (
        <a
          key={video.title}
          href={video.titleUrl}
          target="_blank"
          rel="noreferrer"
        >
          <RoundedTransparentCard className="grid w-full grid-flow-col grid-rows-1 rounded-2xl h-22 ">
            <Image
              className="h-full rounded-l-xl"
              src={ytChannelPic}
              alt="channel pic"
              width={0}
              height={0}
            />
            <span className="mx-2 text-lg font-medium text-center text-teal-800 trucate">
              {video.title}
            </span>
          </RoundedTransparentCard>
        </a>
      ))}
    </BaseCard>
  );
}

export {};
