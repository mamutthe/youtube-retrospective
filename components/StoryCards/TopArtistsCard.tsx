import { BaseCard } from "./BaseCard/BaseCard";
import { StoryInfoCard } from "../StoryInfoCard";
import { useEffect, useState } from "react";
import { channelsWithViewCountTYPE } from "../../types/types";

export function TopArtistsCard() {
  const [topArtists, setTopArtists] = useState<channelsWithViewCountTYPE[]>(
    [] as channelsWithViewCountTYPE[]
  );

  useEffect(() => {
    if (window.localStorage.getItem("topArtists") === null) {
      throw new Error("TopChannelsCard: no data found in localStorage");
    }

    setTopArtists(
      JSON.parse(window.localStorage.getItem("topArtists") as string).slice(
        0,
       6
      )
    );
  }, []);

  return (
    <BaseCard className="flex flex-col items-center justify-center px-4 py-1 space-y-4 bg-gradient-to-r from-sky-400 to-sky-700">
      <span className="self-auto text-2xl font-medium text-white b-4">
        Your Top Artists
      </span>

      {topArtists.map((artist) => (
        <StoryInfoCard
          key={artist.channelTitle}
          title={artist.channelTitle}
          link={artist.channelTitleUrl}
          textColor={"text-sky-900"}
        />
      ))}
    </BaseCard>
  );
}

export {};
