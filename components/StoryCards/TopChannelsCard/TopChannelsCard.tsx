import { BaseCard } from '../BaseCard/BaseCard';
import { RoundedTransparentCard } from '../../RoundedTransparentCard/RoundedTransparentCard';
import ytChannelPic from 'components/StoryCards/MostWatchedChannel/ytChannelPic.jpg';
import Image from 'next/image';

const mostWatchedChannelsList = [
  { channel: 'Web Diva Tulla Luana' },
  { channel: 'Monark' },
  { channel: 'Brasil Paralelo' },
  { channel: 'MC Melody' },
  { channel: 'Damares alves' },
  { channel: 'Eduardo Bolsonaro' },
  { channel: 'Porno de anão' },
  { channel: 'Paola Carossela' },
  { channel: 'Felipe Neto' },
  { channel: 'UNESP Rio Preto' },
];

export function TopChannelsCard() {
  return (
    <>
      <BaseCard className="bg-gradient-to-r from-amber-500 to-orange-500 text-sm bg-orange bg-size h-full w-full grid grid-row-3 p-1 pt-6">
        <div className="flex flex-col items-center space-y-4">
          <span className="font-medium text-slate-200 text-xl">
            Your most watched channels were
          </span>
          <Image
            className="rounded-full"
            src={ytChannelPic}
            alt="channel pic"
            width={110}
          ></Image>
          <RoundedTransparentCard className="p-4 h-16 w-[21.5rem]">
            <span className="text-3xl text-orange-500 font-bold">
              {mostWatchedChannelsList[0].channel}
            </span>
          </RoundedTransparentCard>
        </div>
        <div className="grid grid-rows-2 grid-cols-2 gap-4 p-4 mb-4">
          {mostWatchedChannelsList.slice(1).map((channel, index) => {
            if (index === 0) {
              return (
                <RoundedTransparentCard
                  key={channel.channel}
                  className="h-14 col-span-2"
                >
                  <p className="text-orange-500 font-medium text-xl text-center">{`2º ${channel.channel}`}</p>
                </RoundedTransparentCard>
              );
            }
            return (
              <RoundedTransparentCard key={channel.channel} className="h-14">
                <span className="text-orange-500 font-medium text-lg text-center">{`${
                  index + 2
                }º ${channel.channel}`}</span>
              </RoundedTransparentCard>
            );
          })}
        </div>
      </BaseCard>
    </>
  );
}

export {};
