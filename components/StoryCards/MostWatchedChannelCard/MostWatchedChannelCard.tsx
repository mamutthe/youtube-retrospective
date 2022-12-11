import ytChannelPic from '/workspaces/yt-history-stats/public/picExample.jpg';
import Image from 'next/image';
import { BaseCard } from '../BaseCard/BaseCard';
import { RoundedTransparentCard } from '../../RoundedTransparentCard/RoundedTransparentCard';

export function MostWatchedChannelCard() {
  const mostWatchedChannel = 'Web Diva Tulla Luana';
  const channelLink = 'https://www.youtube.com/@PQPWEBDIVATULLALUANA;';
  const mostWatchedChannelTime = 150;

  return (
    <BaseCard className="flex items-center justify-center space-y-4 flex-col bg-gradient-to-r from-indigo-500 to-violet-600 w-full h-full rounded-2xl px-4">
      <p className="text-slate-200 font-medium text-2xl mt-7">
        Your most watched channel was
      </p>

      <div>
        <a
          className="flex items-center flex-col"
          href={channelLink}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="rounded-full"
            src={ytChannelPic}
            alt="channel pic"
            width={180}
            height={180}
          ></Image>

          <p className="text-slate-200 font-bold text-[2.2rem]">
            {mostWatchedChannel}
          </p>
        </a>
      </div>

      <RoundedTransparentCard className="flex-col bg-white/70 rounded-3xl space-y-1 py-2 mt-10">
        <span className="text-slate-800 font-medium text-3xl text-center p-2">
          You watched it for
        </span>
        <span className="text-slate-800 font-extrabold text-7xl text-center p-2">
          {mostWatchedChannelTime} minutes
        </span>
      </RoundedTransparentCard>
    </BaseCard>
  );
}
