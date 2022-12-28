import ytChannelPic from "/workspaces/yt-history-stats/public/picExample.jpg";
import Image from "next/image";
import { BaseCard } from "../BaseCard/BaseCard";
import { RoundedTransparentCard } from "../../RoundedTransparentCard/RoundedTransparentCard";

export function MostWatchedChannelCard() {
  const mostWatchedChannel = "Web Diva Tulla Luana";
  const channelLink = "https://www.youtube.com/@PQPWEBDIVATULLALUANA;";
  const mostWatchedChannelTime = 150;

  return (
    <BaseCard className="flex flex-col items-center justify-center w-full h-full px-4 space-y-4 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-2xl">
      <p className="text-2xl font-medium text-slate-200 mt-7">
        Your most watched channel was
      </p>

      <div>
        <a
          className="flex flex-col items-center"
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

      <RoundedTransparentCard className="flex-col py-2 mt-10 space-y-1 bg-white/70 rounded-3xl">
        <span className="p-2 text-3xl font-medium text-center text-slate-800">
          You watched it for
        </span>
        <span className="p-2 font-extrabold text-center text-slate-800 text-7xl">
          {mostWatchedChannelTime} minutes
        </span>
      </RoundedTransparentCard>
    </BaseCard>
  );
}
