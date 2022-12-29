import React from "react";
import { BaseCard } from "../BaseCard/BaseCard";
import { RoundedTransparentCard } from "../../RoundedTransparentCard/RoundedTransparentCard";
import Image from "next/image";
import ytChannelPic from "/workspaces/yt-history-stats/public/picExample.jpg";

export function MostListenedSongsCard() {
  const MostListenedSongs = [
    {
      title: "Gloria",
      link: "https://www.youtube.com/watch?v=1",
      songCover: ytChannelPic,
    },
    {
      title: "Bad Romance",
      link: "https://www.youtube.com/watch?v=GlgtTmuZRiM&t=351s",
      songCover: ytChannelPic,
    },
    {
      title: "Physical",
      link: "https://www.youtube.com/watch?v=1",
      songCover: ytChannelPic,
    },
    {
      title: "Dancing Queen",
      link: "https://www.youtube.com/watch?v=1",
      songCover: ytChannelPic,
    },
    {
      title: "I Want It That Way",
      link: "https://www.youtube.com/watch?v=1",
      songCover: ytChannelPic,
    },
  ];
  return (
    <BaseCard className="flex flex-col items-center justify-center px-4 py-1 space-y-4 bg-gradient-to-r from-pink-500 to-rose-700">
      <span className="mb-4 text-2xl font-medium text-slate-200">
        Most Listened Songs
      </span>
      {MostListenedSongs.map((video) => (
        <a
          className="w-full"
          key={video.title}
          href={video.link}
          target="_blank"
          rel="noreferrer"
        >
          <RoundedTransparentCard className="flex h-[5.5rem] w-full rounded-2xl">
            <Image
              className="h-full mr-auto rounded-l-2xl"
              src={video.songCover}
              alt="channel pic"
              width={0}
              height={0}
            />
            <span className="mr-auto text-xl font-medium text-center text-rose-900 trucate">
              {video.title}
            </span>
          </RoundedTransparentCard>
        </a>
      ))}
    </BaseCard>
  );
}

export {};
