import { BaseCard } from "./BaseCard";
import { RoundedTransparentCard } from "../RoundedTransparentCard/RoundedTransparentCard";
import { useEffect, useState } from "react";
import { channelsWithViewCountTYPE } from "../../types/types";

export function MostWatchedChannelCard() {
  const [mostWatchedChannel, setMostWatchedChannel] =
    useState<channelsWithViewCountTYPE | null>(null);

  useEffect(() => {
    if (window.localStorage.getItem("topChannels") === null) return;
    setMostWatchedChannel(
      JSON.parse(window.localStorage.getItem("topChannels") as string)[0]
    );
  }, []);

  return (
    <div>
      <BaseCard className="px-4 space-y-4 bg-gradient-to-r from-indigo-500 to-violet-700 rounded-2xl">
        <p className="text-2xl font-medium text-white mt-8 mb-16 ">
          Your favorite channel of the year was
        </p>

        <a
          className="flex flex-col items-center py-6 px-1 max-h-[13rem] border border-white/20 rounded-xl bg-white/20 backdrop-saturate-150 overflow-hidden"
          style={{ marginBottom: "80px" }}
          href={mostWatchedChannel?.channelTitleUrl}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-white font-bold text-[1.7rem]">
            {mostWatchedChannel?.channelTitle}
          </p>
        </a>

        <span className="p-2 text-xl font-bold text-center text-white mb-32">
          {`That's how many diffrent videos you watched from them:`}
        </span>

        <RoundedTransparentCard className=" mt-10 flex-col py-2 space-y-1 border border-white/20 rounded-xl bg-white/20 backdrop-saturate-150">
          <span className="p-2 font-extrabold text-center text-white text-5xl">
            {`${mostWatchedChannel?.count} videos`}
          </span>
        </RoundedTransparentCard>
      </BaseCard>
    </div>
  );
}
