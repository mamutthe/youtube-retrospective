import ytChannelPic from "/workspaces/yt-history-stats/public/picExample.jpg";
import Image from "next/image";
import { BaseCard } from "../BaseCard/BaseCard";
import { RoundedTransparentCard } from "../../RoundedTransparentCard/RoundedTransparentCard";
import { useEffect, useState } from "react";
import { channelsWithCountTYPE } from "../../../types/types";

export function MostWatchedChannelCard() {
  const [mostWatchedChannel, setMostWatchedChannel] =
    useState<channelsWithCountTYPE | null>(null);

  useEffect(() => {
    if (window.localStorage.getItem("topChannels") === null) return;
    setMostWatchedChannel(
      JSON.parse(window.localStorage.getItem("topChannels") as string)[0]
    );
  }, []);

  return (
    <BaseCard className="flex flex-col items-center w-full h-full px-4 space-y-4 bg-gradient-to-r from-indigo-500 to-violet-700 rounded-2xl">
      <p className="text-2xl font-medium text-white mt-7">
        Your most watched channel was
      </p>

      <div>
        <a
          className="flex flex-col items-center"
          href={mostWatchedChannel?.channelTitleUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="rounded-full"
            src={ytChannelPic}
            alt="channel pic"
            width={180}
            height={180}
          ></Image>

          <p className="text-white font-bold text-[2.2rem]">
            {mostWatchedChannel?.channelTitle}
          </p>
        </a>
      </div>

      <span className="p-2 text-xl font-bold text-center text-white">
        {`That's how many diffrent videos you watched from them:`}
      </span>

      <RoundedTransparentCard className="flex-col py-2 mt-6 space-y-1 bg-white/70 backdrop-saturate-200 rounded-3xl">
        <span className="p-2 font-extrabold text-center text-slate-800 text-7xl">
          {`${mostWatchedChannel?.count} videos`}
        </span>
      </RoundedTransparentCard>
    </BaseCard>
  );
}
