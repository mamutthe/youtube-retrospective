import React from 'react';
import { BaseCard } from '../BaseCard/BaseCard';
import { RoundedTransparentCard } from '../../RoundedTransparentCard/RoundedTransparentCard';
import Image from 'next/image';
import ytChannelPic from '/workspaces/yt-history-stats/public/picExample.jpg';

export function MostWatchedVideosCard() {
  const MostWatchedVideos = [
    {
      title: 'O Zelador do Meu Condomínio Me Fez Ter Uma Crise',
      link: 'https://www.youtube.com/watch?v=1',
      thumbnail: ytChannelPic,
    },
    {
      title: 'ATENÇÃO PRESTADORES DE SERVIÇO DA #SKY E #CPFL',
      link: 'https://www.youtube.com/watch?v=GlgtTmuZRiM&t=351s',
      thumbnail: ytChannelPic,
    },
    {
      title: 'O BOLETO DO #CONDOMÍNIO CHEGOU, MAS DEU #MERDA',
      link: 'https://www.youtube.com/watch?v=1',
      thumbnail: ytChannelPic,
    },
    {
      title: 'MEU DESABAFO COM A REELEIÇÃO DA DILMA #RIPBrasil',
      link: 'https://www.youtube.com/watch?v=1',
      thumbnail: ytChannelPic,
    },
    {
      title: 'WEB DIVA TULLA LUANA® DIZ: ESSE É MEU ÚLTIMO VÍDEO DE NATAL!',
      link: 'https://www.youtube.com/watch?v=1',
      thumbnail: ytChannelPic,
    },
  ];
  return (
    <BaseCard className="flex items-center justify-center flex-col space-y-4 bg-gradient-to-r from-emerald-400 to-teal-600 px-4 py-1">
      <span className="text-slate-200 font-medium text-2xl mb-4">
        Most Watched Videos
      </span>
      {MostWatchedVideos.map((video) => (
        <a key={video.title} href={video.link} target="_blank" rel="noreferrer">
          <RoundedTransparentCard
            className="grid grid-rows-1 grid-flow-col h-22 w-full rounded-2xl"
          >
            <Image
              className="rounded-l-2xl h-full"
              src={video.thumbnail}
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
