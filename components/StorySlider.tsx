import React, { useEffect, useState } from 'react';
import { ArrowButton } from './ArrowButton';

interface StorySliderTYPE {
  storyRef?: React.RefObject<HTMLDivElement>;
  storyCards: JSX.Element[];
  starterCard: number;
}

const StorySelector: React.FC<{
  storyCards: JSX.Element[];
  storyIndex: number;
  setStoryIndex: React.Dispatch<React.SetStateAction<number>>;
}> = ({ storyCards, storyIndex, setStoryIndex }) => {
  return (
    <>
      {storyCards.map((currentStory, index) => (
        <div
          key={currentStory.key}
          className={`h-[0.3rem] w-[30%] rounded-xl bg-${
            index === storyIndex ? 'white/70' : 'white/20'
          } cursor-pointer`}
          onClick={() => setStoryIndex(index)}
        ></div>
      ))}
    </>
  );
};

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextStory();
      } else if (e.key === 'ArrowLeft') {
        prevStory();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextStory, prevStory]);
  return (
    <div
      onKeyDown={(e) => (e.key === 'n' ? nextStory() : null)}
      className="flex h-full flex-row items-center lg:space-x-4"
    >
      <ArrowButton
        arrow="left"
        className="hidden md:block"
        onClick={prevStory}
        onKeyDown={(e) => (e.key === 'Left' ? prevStory() : null)}
      />

      <div className="flex h-full flex-col">
        <div className="relative top-4 z-50 flex flex-row justify-between space-x-1 px-2">
          <StorySelector
            storyCards={storyCards}
            storyIndex={storyIndex}
            setStoryIndex={setStoryIndex}
          />
        </div>

        <div className="flex h-full overflow-hidden rounded-xl lg:rounded-2xl">
          <div className="flex" ref={storyRef}>
            {storyCards[storyIndex]}
          </div>
        </div>
      </div>

      <ArrowButton
        arrow="right"
        className="hidden md:block"
        onClick={nextStory}
      />
    </div>
  );
};

export {};
