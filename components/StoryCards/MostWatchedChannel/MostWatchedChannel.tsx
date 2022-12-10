import ytChannelPic from '/workspaces/yt-history-stats/components/StoryCards/MostWatchedChannel/ytChannelPic.jpg';
import Image from 'next/image';
import { BaseCard } from '../BaseCard/BaseCard';
import { RoundedTransparentCard } from '../../RoundedTransparentCard/RoundedTransparentCard';

export function MostWatchedChannel() {
  const mostWatchedChannel = 'Web Diva Tulla Luana';
  const channelLink = 'https://www.youtube.com/@PQPWEBDIVATULLALUANA;';
  const mostWatchedChannelTime = 150;

  return (
    <BaseCard height={40} width={24}>
      <div className="flex items-center justify-center space-y-6 flex-col bg-gradient-to-r from-indigo-500 to-violet-600 w-full h-full rounded-2xl px-2">
        <span className="mb-3 mt-1 text-slate-200 font-medium text-[1.3rem] text-center">
          Your most watched channel was
        </span>
        <a href={channelLink} target="_blank" rel="noreferrer">
          <picture className="flex justify-center mb-7">
            <Image
              className="rounded-full"
              src={ytChannelPic}
              alt="channel pic"
              width={200}
            ></Image>
          </picture>
          <span className="text-slate-200 font-bold text-[2.2rem] text-center">
            {mostWatchedChannel}
          </span>
        </a>
        <RoundedTransparentCard className='flex-col mx-4 space-y-1'>
          <span className="text-slate-800 font-medium text-3xl text-center p-2">
            You watched it for
          </span>
          <span className="text-slate-800 font-extrabold text-7xl text-center p-2">
            {mostWatchedChannelTime} minutes
          </span>
        </RoundedTransparentCard>
      </div>
    </BaseCard>
  );
}
