import React, { useState } from "react";
import { ArrowButton } from "./ArrowButton";

interface StorySliderTYPE {
  storyRef?: React.RefObject<HTMLDivElement>;
  storyCards: JSX.Element[];
  starterCard: number;
}

export const StorySlider: React.FC<StorySliderTYPE> = ({
  storyCards,
  storyRef,
  starterCard,
}) => {
  const [storyIndex, setStoryIndex] = useState(starterCard);

  const handleStoryChange = (isNext: boolean) => {
    const nextIndex = isNext ? storyIndex + 1 : storyIndex - 1;
    if (nextIndex >= 0 && nextIndex < storyCards.length) {
      setStoryIndex(nextIndex);
    }
  };
  const nextStory = () => handleStoryChange(true);
  const prevStory = () => handleStoryChange(false);
  const storyCardsId = () =>
    [...Array(storyCards.length)].map(() =>
      (Math.random() + 1).toString(16).substring(7)
    );

  console.log(storyCards[0].key);
  return (
    <div className="flex font-sans flex-row items-center md:space-x-4">
      <ArrowButton
        arrow="left"
        className="hidden md:block lg:block"
        onClick={prevStory}
      />

      <div className="flex flex-col">
        <div className="relative top-4 z-50 flex flex-row justify-between space-x-1 px-2">
          {storyCardsId().map((currentStory, index) => (
            <div
              key={currentStory}
              className={`h-[0.3rem] w-[30%] rounded-xl bg-${
                index === storyIndex ? "white/70" : "white/20"
              } cursor-pointer`}
              onClick={() => setStoryIndex(index)}
            ></div>
          ))}
        </div>

        <div className="flex flex-col">
          <div className="flex overflow-hidden rounded-xl md:rounded-2xl">
            <div className="flex" ref={storyRef}>
              {storyCards[storyIndex]}
            </div>
          </div>
        </div>
      </div>

      <ArrowButton
        arrow="right"
        className="hidden md:block lg:block"
        onClick={nextStory}
      />
    </div>
  );
};

export {};
