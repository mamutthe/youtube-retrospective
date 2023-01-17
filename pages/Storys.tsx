import {
  TopChannelsCard,
  MostWatchedChannelCard,
  TopVideosCard,
  TopVideosPerMonthCard,
  FeaturedStatsCard,
} from "../components";
import React, { useCallback, useRef } from "react";
import { StorySlider } from "../components/StorySlider";
import { ArrowButton } from "../components/ArrowButton";
import { toPng } from "html-to-image";

export default function Storys() {
  const storyCards = [
    <MostWatchedChannelCard key="first" />,
    <TopChannelsCard key="second" />,
    <TopVideosCard key="third" />,
    <TopVideosPerMonthCard key="forth" />,
    <FeaturedStatsCard key="fifth" />,
  ];


  const storyRef = useRef<HTMLDivElement>(null);

  const downloadStory = useCallback(() => {
    if (storyRef.current === null) {
      return;
    }

    toPng(storyRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "story";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [storyRef]);

  return (
    <div className="flex min-h-screen w-screen flex-row items-center justify-center space-x-4 p-4">
      <StorySlider
        starterCard={0}
        storyRef={storyRef}
        storyCards={storyCards}
      />
      <ArrowButton arrow="down" onClick={downloadStory}></ArrowButton>
    </div>
  );
}
