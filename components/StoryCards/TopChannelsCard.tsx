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
    <BaseCard className="relative flex flex-col items-center space-y-4 bg-gradient-to-r from-sky-400 to-sky-700 px-4 py-1">
      <span className="mt-4 self-auto text-2xl font-medium text-white">
        Seus canais mais assistidos foram
      </span>

      {topChannel.map((channel: channelsWithViewCountTYPE) => (
        <StoryInfoCard
          key={channel.channelTitle}
          info={channel.channelTitle}
          link={channel.channelTitleUrl}
          textStyle={`text-sky-900 ${
            channel.channelTitle.length > 50 ? "text-md" : "text-lg"
          } max-w-[16rem] ml-auto`}
        >
          <ViewCount className="ml-auto mr-0 rounded-r-xl rounded-l-none bg-sky-300/20 text-sky-800">
            {channel.count} <br /> vídeos
          </ViewCount>
        </StoryInfoCard>
      ))}
    </BaseCard>
  );
}

export {};
