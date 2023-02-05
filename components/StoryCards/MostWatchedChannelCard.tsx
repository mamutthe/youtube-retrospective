import { BaseCard } from './BaseCard';
import { RoundedTransparentCard } from '../RoundedTransparentCard/RoundedTransparentCard';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { channelsWithViewCountTYPE } from '../../types/types';
import { getMockupData } from '../../history-analyzer/getMockupData';

export function MostWatchedChannelCard() {
  const [mostWatchedChannel, setMostWatchedChannel] =
    useState<channelsWithViewCountTYPE>({} as channelsWithViewCountTYPE);

  /*   const [channelThumbnail, setChanneThumbnail] = useState(""); */

  useEffect(() => {
    if (
      window.localStorage.getItem('topChannels') === null &&
      window.localStorage.getItem('isGenerated') !== 'true'
    ) {
      setMostWatchedChannel(getMockupData('mostWatchedChannel'));
    } else {
      setMostWatchedChannel(
        JSON.parse(window.localStorage.getItem('topChannels') as string)[0]
      );
    }
  }, []);

  /*  const getThumbnail = async (e: any) => {
    e.preventDefault();
    let attempts = 0;
    const url =
      "https://www.whateverorigin.org/get?url=" +
      encodeURIComponent(mostWatchedChannel?.channelTitleUrl as string);
    let rawHTML;

    while (attempts < 5) {
      try {
        const response = await fetch(url);
        rawHTML = await response.json();
        break;
      } catch (error) {
        console.error(error);
        attempts++;
      }
    }

    const regex =
      /\{[^\{\}]*url:\s*"([^"]+)"[^\{\}]*width:\s*176[^\{\}]*height:\s*176[^\{\}]*\}/;
    const match = regex.exec(rawHTML.contents);
    console.log(rawHTML.contents);
  }; */

  return (
    <BaseCard className="bg-gradient-to-r from-indigo-500 to-violet-700 px-4">
      <p className="mt-8 mb-16 text-2xl font-medium text-white md:font-bold ">
        Seu canal favorito deste ano foi
      </p>

      <section className="flex flex-col justify-center">
        <a
          href={mostWatchedChannel?.channelTitleUrl}
          target="_blank"
          rel="noreferrer"
        >
          <RoundedTransparentCard className="bg-white/15 mb-12 rounded-xl border border-white/20 py-4 backdrop-saturate-150">
            <p className="text-4xl font-bold text-violet-600">
              {mostWatchedChannel?.channelTitle}
            </p>
          </RoundedTransparentCard>
        </a>

        <span className="p-2 text-center text-2xl font-medium text-white md:font-bold">
          {`Essa foi a quantidade de vídeos diferentes que você assistiu`}
        </span>

        <RoundedTransparentCard className="bg-white/15 mt-3 rounded-xl border border-white/20 py-2 backdrop-saturate-150">
          <span className="p-2 text-center text-4xl font-bold text-violet-600">
            {`${mostWatchedChannel?.count} vídeos`}
          </span>
        </RoundedTransparentCard>
      </section>
    </BaseCard>
  );
}
