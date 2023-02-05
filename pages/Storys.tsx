import {
  TopChannelsCard,
  MostWatchedChannelCard,
  TopVideosCard,
  TopVideosPerMonthCard,
  FeaturedStatsCard,
  GenericButton,
} from '../components';
import React, { useCallback, useRef } from 'react';
import { StorySlider } from '../components/StorySlider';
import { ArrowButton } from '../components/ArrowButton';
import { toPng } from 'html-to-image';
import { Button } from 'flowbite-react';

const DownloadStoryButton: React.FC<{
  storyRef: React.RefObject<HTMLDivElement>;
}> = ({ storyRef }) => {
  const downloadStory = useCallback(() => {
    if (storyRef.current === null) {
      return;
    }

    toPng(storyRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'story';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [storyRef]);

  return (
    <GenericButton
      className="w-full h-10"
      onClick={downloadStory}
    >Salvar story</GenericButton>
  );
};

export default function Storys() {
  const storyCards = [
    <MostWatchedChannelCard key="first" />,
    <TopChannelsCard key="second" />,
    <TopVideosCard key="third" />,
    <TopVideosPerMonthCard key="forth" />,
    <FeaturedStatsCard key="fifth" />,
  ];

  const storyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="m-auto flex flex-col h-screen space-y-2 md:w-1/3 w-screen items-center space-x-4 p-4">
      <StorySlider
        starterCard={0}
        storyRef={storyRef}
        storyCards={storyCards}
      />
      <DownloadStoryButton storyRef={storyRef} />
    </div>
  );
}
