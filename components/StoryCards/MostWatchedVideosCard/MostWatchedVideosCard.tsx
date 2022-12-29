import React, { useEffect, useState } from "react";
import { BaseCard } from "../BaseCard/BaseCard";
import { RoundedTransparentCard } from "../../RoundedTransparentCard/RoundedTransparentCard";
import Image from "next/image";
import ytChannelPic from "/workspaces/yt-history-stats/public/picExample.jpg";
import { reducedHistoryTYPE, reducedYTVideoTYPE } from "../../../types/types";
import Link from "next/link";

export function MostWatchedVideosCard() {
  const [mostWatchedVideos, setMostWatchedVideos] =
    useState<reducedHistoryTYPE>([] as reducedHistoryTYPE);

  useEffect(() => {
    if (window.localStorage.getItem("mostWatchedVideos") === null) {
      throw new Error("mostWatchedVideos: no data found in localStorage");
    }
    setMostWatchedVideos(
      JSON.parse(window.localStorage.getItem("mostWatchedVideos") as string)
    );
  }, []);

  return (
    <BaseCard className="flex flex-col items-center justify-center px-4 py-1 space-y-4 bg-gradient-to-r from-emerald-400 to-teal-500">
       <span className="mb-4 text-2xl font-medium text-white">
        Your most watched videos were
      </span>
      {mostWatchedVideos.map((video) => (
        <Link
          className="w-full"
          key={video.title}
          href={video.titleUrl}
          target="_blank"
          rel="noreferrer"
        >
          <RoundedTransparentCard className="flex h-[5.5rem] w-full rounded-2xl">
            <Image
              className="h-full mr-auto rounded-l-2xl"
              alt="channel pic"
              src={ytChannelPic}
              width={0}
              height={0}
            />
            <span className="mr-auto text-xl font-medium text-center text-teal-900 trucate">
              {video.title}
            </span>
          </RoundedTransparentCard>
        </Link>
      ))}
    </BaseCard>
  );
}

export {};
