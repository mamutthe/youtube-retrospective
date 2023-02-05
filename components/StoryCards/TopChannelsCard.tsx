import { BaseCard } from './BaseCard';
import { StoryInfoCard } from '../StoryInfoCard';
import { useEffect, useState } from 'react';
import { channelsWithViewCountTYPE } from '../../types/types';
import { ViewCount } from '../ViewCount';
import { getMockupData } from '../../history-analyzer/getMockupData';

export function TopChannelsCard() {
  const [topChannel, setTopChannel] = useState<channelsWithViewCountTYPE[]>(
    [] as channelsWithViewCountTYPE[]
  );

  useEffect(() => {
    if (
      window.localStorage.getItem('topChannels') === null &&
      window.localStorage.getItem('isGenerated') !== 'true'
    ) {
      setTopChannel(getMockupData('topChannels'));
    } else {
      setTopChannel(
        JSON.parse(window.localStorage.getItem('topChannels') as string)
      );
    }
  }, []);

  return (
    <>
      <BaseCard className="items-center bg-gradient-to-r from-sky-400 to-sky-700 px-4 py-1">
        <span className="mt-4 text-2xl font-medium text-white md:text-xl md:font-bold">
          Seus canais mais assistidos foram
        </span>

        <div className="flex h-full w-full flex-col space-y-2 py-2">
          {topChannel.map((channel: channelsWithViewCountTYPE) => (
            <StoryInfoCard
              key={channel.channelTitle}
              info={channel.channelTitle}
              link={channel.channelTitleUrl}
              textStyle={`text-sky-900 ${
                channel.channelTitle.length > 50 ? 'text-md' : 'text-lg'
              } max-w-[16rem] ml-auto`}
            >
              <ViewCount className="ml-auto mr-0 rounded-r-xl rounded-l-none bg-sky-300/20 text-sky-800 md:text-sm">
                {channel.count} <br /> vídeos
              </ViewCount>
            </StoryInfoCard>
          ))}
        </div>
      </BaseCard>
    </>
  );
}

export {};
