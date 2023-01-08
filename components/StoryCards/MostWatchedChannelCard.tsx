import { BaseCard } from "./BaseCard";
import { RoundedTransparentCard } from "../RoundedTransparentCard/RoundedTransparentCard";
import React, { useEffect, useState } from "react";
import { channelsWithViewCountTYPE } from "../../types/types";
import Image from "next/image";
import { Button } from "flowbite-react";

export function MostWatchedChannelCard() {
  const [mostWatchedChannel, setMostWatchedChannel] =
    useState<channelsWithViewCountTYPE | null>(null);

  const [channelThumbnail, setChanneThumbnail] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem("topChannels") === null) return;
    setMostWatchedChannel(
      JSON.parse(window.localStorage.getItem("topChannels") as string)[0]
    );
  }, []);

  const getThumbnail = async (e: any) => {
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
  };

  return (
    <div>
      <BaseCard className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-700 px-4">
        <p className="mt-8 mb-16 text-2xl font-medium text-white ">
          Seu canal favorito deste ano foi
        </p>

        <a
          href={mostWatchedChannel?.channelTitleUrl}
          target="_blank"
          rel="noreferrer"
        >
          <RoundedTransparentCard className="mb-12 py-4 rounded-xl border border-white/20 bg-white/20 backdrop-saturate-150">
            <p className="text-4xl font-bold text-white">
              {mostWatchedChannel?.channelTitle}
            </p>
          </RoundedTransparentCard>
        </a>

        <span className="p-2 text-center text-2xl font-medium text-white">
          {`Essa foi a quantidade de vídeos diferentes que você assistiu`}
        </span>

        <RoundedTransparentCard className="mt-3 rounded-xl border border-white/20 bg-white/20 py-2 backdrop-saturate-150">
          <span className="p-2 text-center text-5xl font-bold text-white">
            {`${mostWatchedChannel?.count} vídeos`}
          </span>
        </RoundedTransparentCard>
      </BaseCard>
    </div>
  );
}
