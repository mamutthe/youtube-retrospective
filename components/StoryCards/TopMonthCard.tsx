import React from 'react';
import { BaseCard } from './BaseCard/BaseCard';
import { RoundedTransparentCard } from '../RoundedTransparentCard/RoundedTransparentCard';

export function TopMonthCard() {
  const topMonth = 'January';
  const differentVideos = 12154;
  const timeSpent = 14541;
  return (
    <BaseCard className="flex items-center justify-center flex-col space-y-8 text-center bg-gradient-to-r from-red-500 to-red-700 px-4 py-1">
      <div>
        <p className="text-slate-200 font-medium text-xl mb-2 text-center">
          The month you watched videos the most was
        </p>
        <RoundedTransparentCard className="py-4 px-24">
          <p className="text-red-800 font-bold text-2xl text-center">
            {topMonth}
          </p>
        </RoundedTransparentCard>
      </div>

      <div className="">
        <p className="text-slate-200 font-medium text-xl mb-2">
          {`That's how much different videos you watched in 2022`}
        </p>
        <RoundedTransparentCard className="py-4 px-24">
          <p className="text-red-800 font-bold text-2xl">
            {`${differentVideos.toString()} videos`}
          </p>
        </RoundedTransparentCard>
      </div>

      <div className="">
        <p className="text-slate-200 font-medium text-xl mb-2">
          {`That's how time you spent watching videos in 2022`}
        </p>
        <RoundedTransparentCard className="py-4 px-24">
          <p className="text-red-800 font-bold text-2xl inline-block">
            {`${timeSpent.toString()} minutes`}
          </p>
        </RoundedTransparentCard>
      </div>
    </BaseCard>
  );
}

export {};
