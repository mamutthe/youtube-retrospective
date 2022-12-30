import { BaseCard } from "./BaseCard/BaseCard";
import { RoundedTransparentCard } from "../RoundedTransparentCard/RoundedTransparentCard";
import ytChannelPic from "/workspaces/yt-history-stats/public/picExample.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { topChannelsTYPE } from "../../types/types";

export function TopChannelsCard() {
  const [topChannels, setTopChannels] = useState<topChannelsTYPE[]>(
    [] as topChannelsTYPE[]
  );

  useEffect(() => {
    if (window.localStorage.getItem("topChannels") === null) {
      throw new Error("TopChannelsCard: no data found in localStorage");
    }

    setTopChannels(
      JSON.parse(window.localStorage.getItem("topChannels") as string)
    );
  }, []);

  return (
    <>
      <BaseCard className="grid w-full h-full p-1 pt-6 text-sm bg-gradient-to-r from-amber-500 to-orange-500 bg-orange bg-size grid-row-3">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-xl font-medium text-slate-100">
            Your most watched channels were
          </span>
          <Image
            className="rounded-full"
            src={ytChannelPic}
            alt="channel pic"
            width={110}
          ></Image>
          <RoundedTransparentCard className="p-4 h-16 w-[21.5rem]">
            <span className="text-3xl font-bold text-orange-500">
              {topChannels[0]?.channelTitle}
            </span>
          </RoundedTransparentCard>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4 mb-4">
          {topChannels.slice(1).map((channel, index) => {
            if (index === 0) {
              return (
                <RoundedTransparentCard
                  key={channel.channelTitle}
                  className="col-span-2 h-14"
                >
                  <p className="text-xl font-medium text-center text-orange-500">{`2º ${channel.channelTitle}`}</p>
                </RoundedTransparentCard>
              );
            }
            return (
              <RoundedTransparentCard
                key={channel.channelTitle}
                className="h-14"
              >
                <span className="text-lg font-medium text-center text-orange-500">{`${
                  index + 2
                }º ${channel.channelTitle}`}</span>
              </RoundedTransparentCard>
            );
          })}
        </div>
      </BaseCard>
    </>
  );
}

export {};
