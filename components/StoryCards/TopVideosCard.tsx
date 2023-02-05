import React, { useEffect, useState } from 'react';
import { BaseCard } from './BaseCard';
import { ViewCount } from '../ViewCount';
import { StoryInfoCard } from '../StoryInfoCard';
import { reducedHistoryTYPE, reducedYTVideoTYPE } from '../../types/types';
import { getMockupData } from '../../history-analyzer/getMockupData';

export function TopVideosCard() {
  const [topVideos, setTopVideos] = useState<reducedHistoryTYPE>(
    [] as reducedHistoryTYPE
  );

  useEffect(() => {
    if (
      window.localStorage.getItem('topVideos') === null &&
      window.localStorage.getItem('isGenerated') !== 'true'
    ) {
      setTopVideos(getMockupData('topVideos'));
    } else {
      setTopVideos(
        JSON.parse(window.localStorage.getItem('topVideos') as string) //TopVideos size is determined by the listSize param on the func getTopVideos called on HistoryAnalyzer.tsx
      );
    }
  }, []);

  return (
    <BaseCard className="items-center bg-gradient-to-r from-emerald-400 to-teal-500 px-4 py-1">
      <span className="mt-4 text-2xl font-medium text-white md:text-xl md:font-bold">
        Seus vídeos mais assistidos deste ano foram
      </span>
      <div className="flex h-full w-full flex-col space-y-2 py-2">
        {topVideos.map((video: reducedYTVideoTYPE) => (
          <StoryInfoCard
            key={video.title}
            info={video.title}
            textStyle={`px-2 text-teal-900 ${
              video.title.length > 50 ? 'text-md' : 'text-lg'
            } ml-auto mr-0 overflow-hidden overflow-ellipsis`}
            link={video.titleUrl}
          >
            <ViewCount className="ml-auto mr-0 rounded-r-xl bg-emerald-500/20 text-lg text-teal-900">
              {video.views}
              <br />
              vezes
            </ViewCount>
          </StoryInfoCard>
        ))}
      </div>
    </BaseCard>
  );
}

export {};
