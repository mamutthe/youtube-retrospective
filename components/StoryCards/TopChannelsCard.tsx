import { BaseCard } from "./BaseCard";
import { StoryInfoCard } from "../StoryInfoCard";
import { useEffect, useState } from "react";
import { channelsWithViewCountTYPE } from "../../types/types";
import { ViewCount } from "../ViewCount";

export function TopChannelsCard() {
  const [topChannel, setTopChannel] = useState<channelsWithViewCountTYPE[]>(
    [] as channelsWithViewCountTYPE[]
  );

  useEffect(() => {
    if (window.localStorage.getItem("topChannels") === null) {
      throw new Error("TopChannelsCard: no topChannels in localStorage");
    }

    setTopChannel(
      JSON.parse(window.localStorage.getItem("topChannels") as string).slice(
        0,
        6
      )
    );
  }, []);

  return (
    <BaseCard className="flex flex-col items-center justify-center px-4 py-1 space-y-4 bg-gradient-to-r from-sky-400 to-sky-700">
      <span className="self-auto text-2xl font-medium text-white b-4">
        Your most watched channels were
      </span>

      {topChannel.map((channel: channelsWithViewCountTYPE) => (
        <StoryInfoCard
          key={channel.channelTitle}
          info={channel.channelTitle}
          link={channel.channelTitleUrl}
          textStyle={
            "text-sky-900 max-w-[16rem] overflow-hidden text-ellipsis whitespace-nowrap mr-auto"
          }
        >
          <ViewCount className="text-sky-800 bg-sky-300/20 rounded-l-xl rounded-r-none ml-0 mr-auto">
            {channel.count} <br /> videos
          </ViewCount>
        </StoryInfoCard>
      ))}
    </BaseCard>
  );
}

export {};
