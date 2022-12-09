import { BaseCard } from '../BaseCard/BaseCard';
import { RoundedTransparentCard } from '../../RoundedTransparentCard/RoundedTransparentCard';
import ytChannelPic from 'components/StoryCards/MostWatchedChannel/ytChannelPic.jpg';
import Image from 'next/image';

const backgroundImg =
  'https://img.freepik.com/free-vector/grainy-gradient-texture-design_52683-64519.jpg?w=996&t=st=1670621095~exp=1670621695~hmac=b0caa2a4fadc4266aaa35be66b29cc710915df7a4aad172e80e7263c96f0c508';
const mostWatchedChannelList = [
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
const mostWatchedChannel = mostWatchedChannelList.at(0)?.channel;

export function Top10Watched() {
  return (
    <>
      <BaseCard height={40} width={24} backgroundImg={""}>
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-sm bg-orange bg-size h-full w-full rounded-2xl grid grid-row-3 p-1 pt-6">
          <div className="flex flex-col items-center space-y-4">
            <span className="font-medium text-slate-100 text-lg">
              Your Top 10 most Watched Channels were
            </span>
            <Image
              className="rounded-full"
              src={ytChannelPic}
              alt="channel pic"
              width={110}
            ></Image>
            <RoundedTransparentCard className='p-4 h-16 w-[21.5rem]'>
              <span className="text-3xl text-orange-500 font-bold">
                {mostWatchedChannel}
              </span>
            </RoundedTransparentCard>
          </div>
          <div className="grid grid-rows-5 grid-cols-2 grid-flow-col gap-4 p-4 mb-4">
            {mostWatchedChannelList.slice(1).map((channel, index) => (
              <RoundedTransparentCard key={channel.channel} className="h-14">
                <span className="text-orange-500 font-medium text-lg text-center">{`${
                  index + 2
                }º ${channel.channel}`}</span>
              </RoundedTransparentCard>
            ))}
          </div>
        </div>
      </BaseCard>
    </>
  );
}

export {};
