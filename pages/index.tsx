import React from 'react';
import {
  MostWatchedChannelCard,
  TopChannelsCard,
  TopVideosCard,
} from '../components';
import Head from 'next/head';

import { HomeTitle } from '../components/Home/HomeTitle';
import { HeaderButtons } from '../components/Home/HeaderButtons';
import { BouncingArrow } from '../components/Home/BouncingArrow';
import { StorySlider } from '../components/StorySlider';
import { HowItWorksCards } from '../components/Home/HowItWorksCards';

export default function Home() {
  const storyCards = [
    <TopChannelsCard key="first" />,
    <MostWatchedChannelCard key="second" />,
    <TopVideosCard key="third" />,
  ];

  return (
    <div className="flex w-screen flex-col items-center justify-center ">
      <Head>
        <title>YouTube Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex h-[200vh] flex-col lg:h-screen lg:flex-row lg:items-center lg:justify-center lg:space-x-4">
        <div className="h-screen">
          <div className="flex h-[70%] flex-col items-center justify-end space-y-10">
            <HomeTitle />
            <HeaderButtons />
          </div>
          <BouncingArrow />
        </div>
        <div
          id="slider-container"
          className="flex h-screen flex-col items-center border-t border-t-slate-200/10 bg-zinc-800 p-4 lg:h-[95%] lg:w-[32vw] lg:rounded-2xl lg:border-none lg:bg-transparent lg:p-0 lg:shadow-2xl"
        >
          <StorySlider starterCard={1} storyCards={storyCards} />
          <span className='before:top-12 text-lg font-medium text-red-500'>Exemplo</span>
        </div>
      </header>
      <HowItWorksCards />
    </div>
  );
}
