import React from 'react';
import { BaseCard } from '../BaseCard/BaseCard';
import { RoundedTransparentCard } from '../../RoundedTransparentCard/RoundedTransparentCard';
import Image from 'next/image';
import { getVideosViewCountList } from '../../../history-analyzer/getVideosViewCountList';
import ytChannelPic from '/workspaces/yt-history-stats/public/picExample.jpg';
import { historyTYPE, ytVideoTYPE, mostViewedVideosTYPE } from '/workspaces/yt-history-stats/history-analyzer/types'

export function MostWatchedVideosCard() {
 function getMostWatchedVideos() {
   const MostWatchedVideos = JSON.parse(window.localStorage.getItem('currentUserHistory') as string).slice(0, 10);
    return MostWatchedVideos;
 }


  return (
    <BaseCard className="flex items-center justify-center flex-col space-y-4 bg-gradient-to-r from-emerald-400 to-teal-500 px-4 py-1">
      <span className="text-slate-200 font-medium text-2xl mb-4">
        Most Watched Videos
      </span>
      {getMostWatchedVideos.map((video: mostViewedVideosTYPE) => (
        <a key={video.title} href={video.titleUrl} target="_blank" rel="noreferrer">
          <RoundedTransparentCard className="rounded-2xl grid grid-rows-1 grid-flow-col h-22 w-full ">
            <Image
              className="rounded-l-xl h-full"
              src={ytChannelPic}
              alt="channel pic"
              width={0}
              height={0}
            />
            <span className="text-teal-800 font-medium text-lg text-center mx-2 trucate">
              {video.title}
            </span>
          </RoundedTransparentCard>
        </a>
      ))}
    </BaseCard>
  );
}

export {};
